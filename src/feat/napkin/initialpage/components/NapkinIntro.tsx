export function NapkinIntro() {
    const DOMAIN = window.location.origin;
    return (
        <section className="flex flex-col items-center gap-6 text-text">
            <h2 className="text-3xl font-bold">
                Napkin
            </h2>

            <p className="max-w-3xl text-center leading-7">
                Napkin is a real-time collaborative notepad. Rooms are identified by a
                6-character code, and the note's content is kept in a redis cache, syncing
                across everyone in real time. A room expires 24 hours after its last update.
            </p>
            <p className="max-w-3xl text-center leading-7">
                You can enter any napkin by entering the url <i>{DOMAIN}/napkin/yourcode</i>, or using the helper below.
            </p>

        </section>
    )
}