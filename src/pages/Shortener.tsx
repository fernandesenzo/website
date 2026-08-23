import CreateLink from "../feat/shortener/components/CreateLink";
import { ShortenerFooter } from "../feat/shortener/components/ShortenerFooter";
import { ShortenerIntro } from "../feat/shortener/components/ShortenerIntro";

export default function Shortener() {
    return (
        <main className="flex flex-col items-center gap-6">
            <ShortenerIntro />
            <CreateLink />
            <ShortenerFooter />
        </main>

    )
}