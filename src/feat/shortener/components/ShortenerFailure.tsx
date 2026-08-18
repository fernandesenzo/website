import { Button } from "../../../components/ui/Button";

interface ShortenerFailureProps {
    restart: () => void;
}

export function ShortenerFailure({ restart }: ShortenerFailureProps) {
    return (
        <>
            <p className="text-center"><span className="text-red-500 ">Oops! Something went wrong</span>.<br /> Maybe you exceeded your active links quota. If this is not the case, check the URL provided and try again.</p>
            <Button onClick={restart}>
                Try Again
            </Button>
        </>
    )
}