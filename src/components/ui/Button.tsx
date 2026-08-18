export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
}
export function Button({ children, onClick, disabled = false }: ButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} className="px-4 py-2 rounded-lg border border-border bg-elevated text-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {children}
        </button>
    );
}