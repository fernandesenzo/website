export function ShortenerFooter() {
    return (
        <>
            <p className="max-w-3xl text-center leading-7">
                <strong>Notice:</strong> Links may expire before 24 hours.
                Since they are stored in Redis, they may be evicted if the
                cache becomes full. Our Redis instance uses an LRU eviction policy.
            </p>
            <p className="max-w-3xl text-center leading-7">
                <a
                    href="https://github.com/fernandesenzo/linkshortener"
                    className="underline"
                    target="_blank" rel="noreferrer"
                >
                    Source Code
                </a>
            </p>
        </>
    )
}