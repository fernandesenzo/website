import { useShortener } from "../hooks/useShortener";
import { ShortenerFailure } from "./ShortenerFailure";
import { ShortenerForm } from "./ShortenerForm";
import { ShortenerSuccess } from "./ShortenerSuccess";

export default function CreateLink() {
    const { status, url, setUrl, code, generateLink, reopenGenerateLink } = useShortener();
    const isSubmitting = status === 'fetching';
    return (
        <>
            {
                (status === 'form' || status === 'fetching') && <ShortenerForm url={url} onUrlChange={setUrl} onSubmit={() => void generateLink()} isSubmitting={isSubmitting} />
            }
            {
                status === 'success' && <ShortenerSuccess code={code} restart={reopenGenerateLink} />
            }
            {
                status === 'failure' && <ShortenerFailure restart={reopenGenerateLink} />
            }


        </>
    )

}