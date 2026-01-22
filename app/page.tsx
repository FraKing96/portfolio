import Image from "next/image";

const skills = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Architettura a microservizi",
      "RabbitMQ",
      "REST API",
      "PHP",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "HTML / CSS / JavaScript"],
  },
  {
    title: "DevOps",
    items: [
      "Docker",
      "CI/CD (GitHub Actions, GitLab, Gitea)",
      "Vercel (deploy React / Next.js)",
      "Server Linux",
    ],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10">
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Portfolio / Curriculum
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Francesco Palmeri
            </h1>
            <p className="text-lg text-zinc-600">Senior Software Engineer</p>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <a
                className="w-fit font-medium text-zinc-900"
                href="mailto:fra.palmeri96@gmail.com"
              >
                fra.palmeri96@gmail.com
              </a>
              <span>Via Nazario Sauro 12C, Tromello (automunito)</span>
            </div>
          </div>
          <div className="relative h-36 w-36 overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm md:h-44 md:w-44">
            <Image
              src="/image.jpg"
              alt="Foto profilo di Francesco Palmeri"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Profilo</h2>
          <p className="text-base leading-relaxed text-zinc-700">
            Senior Software Developer con oltre 10 anni di esperienza nello
            sviluppo di applicazioni web e backend. Specializzato in
            architetture a microservizi sviluppate in Node.js e comunicazione
            asincrona (tramite RabbitMQ) e containerizzazione Docker, con
            pipeline CI/CD per deploy automatizzati. Esperienza full-stack
            (React, React Native) e collaborazione diretta con clienti per
            analisi necessità e soluzioni tecniche. Esperienza consolidata nel
            lavoro in team di sviluppo composto da due o tre persone o anche con
            collaboratori esterni e team di design. Collaborazione continua su
            codebase condivise, review del codice e allineamento tecnico.
          </p>
        </section>

        <section className="grid gap-6">
          <h2 className="text-2xl font-semibold">Competenze</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-600">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Esperienze lavorative</h2>
          <p className="text-sm text-zinc-600">
            Sezione pronta: inseriremo qui le esperienze con ruolo, azienda,
            periodo e principali attività.
          </p>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-500">
            In attesa dei dettagli.
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Formazione</h2>
          <div className="flex flex-col gap-2">
            <p className="text-base font-medium">
              Diploma scuola superiore presso ITIS G. Caramuel di Vigevano
            </p>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Progetti principali</h2>
          <p className="text-sm text-zinc-600">
            Sezione pronta per inserire descrizioni, stack e link ai progetti.
          </p>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-500">
            In attesa dei dettagli.
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Lingue</h2>
          <ul className="flex flex-col gap-2 text-sm text-zinc-600">
            <li>Italiano: madrelingua</li>
            <li>Inglese: livello B1</li>
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Hobby</h2>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-500">
            In attesa dei dettagli.
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Soft skill</h2>
          <div className="rounded-2xl border border-dashed border-zinc-200 p-4 text-sm text-zinc-500">
            In attesa dei dettagli.
          </div>
        </section>
      </main>
    </div>
  );
}
