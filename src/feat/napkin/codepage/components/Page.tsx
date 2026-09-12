import { Button } from "../../../../components/ui/Button";
import { useNapkinPage } from "../hooks/useNapkinPage"
import { TextBox } from "./Textbox";

export default function Page() {
    const { code, content, error, handleTextChange, handleCopyLink } = useNapkinPage();
    return (
        <div className="flex items-center flex-col">
            <h2 className="text-3xl font-bold">
                {!error && <>Room code: {code}</>}
            </h2>
            <div className="max-w-2xl w-full">
                {error && <p className="text-center">{error}</p>}
                {!error && <TextBox content={content} onWrite={handleTextChange} />}
            </div>
            {!error && <Button onClick={handleCopyLink}>Copy share link</Button>}
        </div>
    )
}