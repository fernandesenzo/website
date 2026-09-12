import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNapkinContent, openNapkinWebSocket, postNapkin } from "../api";

const MAX_BYTES = 400;

function truncateToUtf8Bytes(text: string, maxBytes: number): string {
    const bytes = new TextEncoder().encode(text);
    if (bytes.length <= maxBytes) {
        return text;
    }

    const decoder = new TextDecoder("utf-8", { fatal: true });

    for (let size = maxBytes; size > 0; size--) {
        try {
            return decoder.decode(bytes.slice(0, size));
        } catch {
            // last byte cut a multi-byte character in half, step back one byte.
        }
    }

    return "";
}

export function useNapkinPage() {
    const { code } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null)
    const [content, setContent] = useState("");
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const socket = useRef<WebSocket | null>(null);

    const handleTextChange = (val: string) => {
        const text = truncateToUtf8Bytes(val, MAX_BYTES);
        setContent(text);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => socket.current?.send(text), 500)
    }

    const handleCopyLink = () => {
        void navigator.clipboard.writeText(window.location.href); // we could treat an error here...
    };

    useEffect(() => {
        let cleanupDone = false;
        const handleMessage = (event: MessageEvent) => {
            if (typeof event.data === "string") {
                setContent(event.data)
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                }
            }
        }
        if (!code || !/^[A-Za-z0-9]{6}$/.test(code)) {
            void navigate("/napkin");
            return
        }
        const fetchContent = async () => {
            setError(null);
            try {
                const resp = await getNapkinContent(code)
                if (resp === null) {
                    await postNapkin(code);
                }
                setContent(resp?.content ?? "");
                if (!cleanupDone) {
                    socket.current = openNapkinWebSocket(code);
                    socket.current?.addEventListener("message", handleMessage)
                }
            } catch {
                setError("Failed to load the page, please return to the home page and try again.")
            }
        }
        void fetchContent();
        return () => {
            cleanupDone = true;
            socket.current?.removeEventListener("message", handleMessage);
            socket.current?.close();
        }

    }, [code, navigate])
    return { code, content, error, handleTextChange, handleCopyLink }
}