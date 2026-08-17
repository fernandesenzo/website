import { Button } from "../../../components/ui/Button";

interface ShortenerFormProps {
    url: string;
    onUrlChange: (value: string) => void
    onSubmit: () => void;
    isSubmitting: boolean;
}

export function ShortenerForm({ url, onUrlChange, onSubmit, isSubmitting }: ShortenerFormProps) {
    return (
        <div className="flex flex-col gap-2 items-center">
            <input
                value={url}
                onChange={(e) => onUrlChange(e.target.value)}
                placeholder="Insert your link"
                disabled={isSubmitting}
                className="w-72 px-4 py-2 rounded-lg border border-border  text-text text-center focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
            />
            <Button onClick={onSubmit} isDisabled={isSubmitting}>
                {isSubmitting ? "Generating..." : "Generate"}
            </Button>
        </div>
    )

}