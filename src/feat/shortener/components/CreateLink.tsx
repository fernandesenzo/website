import { useShortener } from "../hooks/useShortener";
import { ShortenerForm } from "./ShortenerForm";

export default function CreateLink() {
    const { status, url, setUrl, code, generateLink, reopenGenerateLink } = useShortener();
    const isSubmitting = status === 'fetching';
    return (
        <>
            {
                (status === 'form' || status === 'fetching') && <ShortenerForm url={url} onUrlChange={setUrl} onSubmit={generateLink} isSubmitting={isSubmitting} />
            }
            <p className="max-w-3xl text-center leading-7">
                <strong>Notice:</strong> Links may expire before 24 hours.
                Since they are stored in Redis, they may be evicted if the
                cache becomes full. Our Redis instance uses an LRU eviction policy.
            </p>
        </>
    )

}