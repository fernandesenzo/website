
import meImg from '../../assets/me.jpeg';

export default function AboutMe() {
    return (
        <section className="flex flex-col items-center gap-6 text-text ">
            <img
                src={meImg}
                alt="Enzo"
                className="w-32 h-32 rounded-full object-cover"
            />
            <h2 className="text-3xl font-bold">
                About me
            </h2>

            <p className="max-w-3xl text-center leading-7">
                I'm Enzo, a full stack developer and computer science graduate
                from the{" "}
                <a
                    href="https://en.wikipedia.org/wiki/University_of_São_Paulo"
                    className="underline"
                    target="_blank" rel="noreferrer"
                >
                    University of São Paulo
                </a>
                . Over the last years I've been working with a variety of
                technologies, such as Go, React, Postgres, Redis, Docker and
                AWS. On this website, I host some small applications I've built to help me in my day-to-day life.
                The source code for all of them, including this website is available on my{" "}
                <a
                    href="https://github.com/fernandesenzo"
                    className="underline"
                    target="_blank" rel="noreferrer"
                >
                    GitHub
                </a>
                .
            </p>

            <p className="text-center">
                Feel free to reach out through any of the links below.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <a href="https://t.me/enzofxz" className="underline" target="_blank" rel="noreferrer">Telegram</a>
                <a href="https://www.linkedin.com/in/fernandesenzo/" target="_blank" rel="noreferrer" className="underline">
                    LinkedIn
                </a>
                <a href="mailto:enzo.oliveira174@gmail.com" target="_blank" rel="noreferrer" className="underline">Email</a>
            </div>
        </section>
    );
}