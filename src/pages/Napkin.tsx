import { NapkinFooter } from "../feat/napkin/initialpage/components/NapkinFooter";
import { NapkinIntro } from "../feat/napkin/initialpage/components/NapkinIntro";
import { NapkinRedirect } from "../feat/napkin/initialpage/components/NapkinRedirect";

export default function Napkin() {
    return (
        <main className="flex flex-col items-center gap-6">
            <NapkinIntro />
            <NapkinRedirect />
            <NapkinFooter />
        </main>

    );
} 