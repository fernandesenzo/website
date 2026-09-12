interface InputProps {
    value: string
    onChange: (val: string) => void;
    disabled?: boolean;
    placeholder: string;

}
export function Input({ value, onChange, disabled, placeholder }: InputProps) {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="w-72 px-4 py-2 rounded-lg border border-border  text-text text-center focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
        />
    )

}