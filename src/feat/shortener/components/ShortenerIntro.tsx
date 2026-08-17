export function ShortenerIntro() {
    return (
        <section className="flex flex-col items-center gap-6 text-text">
            <h2 className="text-3xl font-bold">
                Shortener
            </h2>

            <p className="max-w-3xl text-center leading-7">
                Shortener is a URL shortener that turns long, messy links into
                short, shareable ones identified by a random 6-character code.
                The URL mappings are stored in Redis.
            </p>

            {/* <h4 className="text-2xl font-bold">
                Some rules
            </h4> */}

            <ul className="list-disc space-y-2 text-left">
                <li>Only well-formed HTTP or HTTPS URLs are accepted.</li>
                <li>URLs cannot be longer than 200 characters.</li>
                <li>Links expire automatically after 24 hours.</li>
            </ul>


        </section>
    );
}