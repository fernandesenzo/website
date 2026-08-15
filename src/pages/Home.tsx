import AboutMe from "../components/sections/AboutMe";


export default function Home() {
    return (
        <main className="flex flex-col gap-16">
            <section className="w-2/5 mx-auto">
                <AboutMe />
            </section>
        </main>
    )
}