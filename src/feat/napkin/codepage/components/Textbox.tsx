type TextboxProps = {
    content: string;
    onWrite: (val: string) => void;

}

export function TextBox({ content, onWrite }: TextboxProps) {
    return (
        <textarea
            placeholder="Start your napkin..."
            className="rounded-lg border border-border px-4 py-3 w-full min-h-96 whitespace-pre-wrap break-words"
            value={content}
            onChange={(e) => onWrite(e.target.value)}
        />
    )
}