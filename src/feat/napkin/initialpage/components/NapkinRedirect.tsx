import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";
import { useNapkinIntro } from "../hooks/useNapkinIntro";

export function NapkinRedirect() {
    const { code, isInputComplete, updateText, onRandomClick, onNormalClick } = useNapkinIntro()
    return (
        <>
            <Input onChange={updateText} value={code} placeholder="Enter a 6 digit code" />
            <div className="flex justify-around gap-6">
                <Button onClick={onRandomClick}>Generate random </Button>
                <Button onClick={onNormalClick} disabled={!isInputComplete}>Enter code</Button>
            </div>

        </>
    )
}