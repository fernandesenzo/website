import { useState } from "react"
import { createShortLink } from "../api";

export function useShortener() {
    const [status, setStatus] = useState<'form' | 'fetching' | 'success' | 'failure'>('form');
    const [url, setUrl] = useState("");
    const [code, setCode] = useState("");

    const generateLink = async () => {
        setStatus('fetching');
        try {
            const resp = await createShortLink(url)
            setCode(resp.code)
            setStatus('success');

        } catch (error) {
            setStatus('failure');
            setUrl('');
        }
    }
    const reopenGenerateLink = () => {
        setCode("");
        setStatus('form');
    }
    return {
        status, url, setUrl, code, generateLink, reopenGenerateLink
    }
}