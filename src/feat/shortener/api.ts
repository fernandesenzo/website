import type { CreateLinkRequest, CreateLinkResponse } from "./dto";

const API_URL: string = import.meta.env.VITE_SHORTENER_API_URL as string;

export async function createShortLink(url: string): Promise<CreateLinkResponse> {
    const body: CreateLinkRequest = { url }
    const res = await fetch(`${API_URL}/links`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
    if (!res.ok) {
        //todo: customize error, it would be nice to at least inform the specific error when it has surpassed the ip limit.
        throw new Error("could not create link.")
    }
    return await res.json() as CreateLinkResponse;
}