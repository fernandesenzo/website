import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";

interface ShortenerFormProps {
    url: string;
    onUrlChange: (value: string) => void
    onSubmit: () => void;
    isSubmitting: boolean;
}

export function ShortenerForm({ url, onUrlChange, onSubmit, isSubmitting }: ShortenerFormProps) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <Input value={url} onChange={onUrlChange} disabled={isSubmitting} placeholder="Enter a URL" />
            <Button onClick={onSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Generating..." : "Generate"}
            </Button>
        </div>
    )

}