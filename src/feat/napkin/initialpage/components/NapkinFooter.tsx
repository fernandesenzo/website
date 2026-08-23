export function NapkinFooter() {
    return (
        <>
            <p className="max-w-3xl text-center leading-7">
                <strong>Notice:</strong> Napkins may expire before 24 hours.
                Since their contents are stored in Redis, they may be evicted if the
                cache becomes full. Our Redis instance uses an LRU eviction policy.
            </p>
            <p className="max-w-3xl text-center leading-7">
                <a
                    href="https://github.com/fernandesenzo/napkin"
                    className="underline"
                    target="_blank" rel="noreferrer"
                >
                    Source Code
                </a>
            </p>
        </>
    )
}