import AboutMe from "../components/sections/AboutMe";


export default function Home() {
    return (
        <main className="flex flex-col gap-16">
            <div className="w-2/5 mx-auto">
                <AboutMe />
            </div>
        </main>
    )
}