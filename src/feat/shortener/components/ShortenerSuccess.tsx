import { Button } from "../../../components/ui/Button";

const DISPLAY_URL = import.meta.env.VITE_SHORTENER_RESPONSE_ALTERNATIVE_URL;

interface ShortenerSuccessProps {
    code: string;
    restart: () => void;
}
export function ShortenerSuccess({ code, restart }: ShortenerSuccessProps) {
    return (
        <>
            <p>
                Success! Your shortened URL is: <span className="text-emerald-500">{DISPLAY_URL + "/" + code}</span>.
            </p>
            <Button onClick={restart}>
                Restart
            </Button>
        </>
    )
}