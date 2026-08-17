import CreateLink from "../feat/shortener/components/CreateLink";
import { ShortenerIntro } from "../feat/shortener/components/ShortenerIntro";

export default function Shortener() {
    return (
        <main className="flex flex-col items-center gap-6">
            <ShortenerIntro />
            <CreateLink />
        </main>

    )
}