import type { GetNapkinResponse, PostNapkinRequest } from "./dto";

const API_URL: string = import.meta.env.VITE_NAPKIN_API_URL as string;

export async function getNapkinContent(code: string): Promise<GetNapkinResponse | null> {
    const res = await fetch(`${API_URL}/${code}`)
    if (!res.ok) {
        if (res.status === 404) {
            return null
        }
        throw new Error('could not fetch content')
    }
    return await res.json() as GetNapkinResponse;
}

export async function postNapkin(code: string) {
    const body: PostNapkinRequest = { code: code, content: "" }
    const res = await fetch(`${API_URL}/save`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    )
    if (!res.ok) {
        throw new Error('could not create napkin');
    }
}

export function openNapkinWebSocket(code: string): WebSocket {
    //TODO: observe connection errors
    const wsUrl = API_URL.replace(/^https:\/\//, "wss://").replace(/^http:\/\//, "ws://");
    return new WebSocket(`${wsUrl}/${code}/ws`);
}