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
    items: ["MySQL", "MongoDB"]
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
          <h2 className="text-2xl font-semibold">Esperienze e progetti principali</h2>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold text-zinc-800">
                Esperienze lavorative
              </h3>
              <div className="grid gap-5 text-sm text-zinc-600">
                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2015 — Junior Developer, Clevermind Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo di portale web in HTML / CSS / JavaScript
                      (jQuery) per la gestione dei consumi di un impianto
                      sciistico a Marilleva.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2016 — Junior Developer, Clevermind Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo di landofmedia.com in HTML / CSS / JavaScript
                      (jQuery) con backend PHP per un&apos;agenzia di marketing
                      digitale che noleggia PDF relativi a diverse nazioni.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2017–2020 — Senior Developer, Clevermind Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo di un portale web in HTML / CSS / JavaScript
                      (jQuery) con backend PHP per Techem Srl: gestione commesse
                      e ticket di assistenza tecnica legati a ripartitori di
                      calore, valvole termostatiche e contatori d&apos;acqua.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2020–2022 — Senior Developer, Clevermind Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo del portale proprietario Simplybudget (Aurelia
                      frontend da fork di AngularJS, backend Node.js a
                      microservizi) per gestione flussi economici e finanziari,
                      con previsionale.
                    </li>
                    <li>
                      Sviluppo app nativa SoundYourBrand per Android e iOS con
                      Flutter, per la gestione di radio personalizzate.
                    </li>
                    <li>
                      Sviluppo portale web Allianz per la vendita di biglietti
                      di un evento speciale al Teatro alla Scala di Milano.
                    </li>
                    <li>
                      Sviluppo portale per Valandro Srl per raccolta informative
                      privacy e invio documentale ai clienti.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2022–2025 — Senior Developer, Clevermind Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo portale web per Autochim Srl (Aurelia + Node.js)
                      per gestione ordini clienti, assegnazione autisti,
                      giornate lavorative, integrazioni con altri portali e
                      tracking in tempo reale di veicolo e carico.
                    </li>
                    <li>
                      Sviluppo del portale proprietario TouchMyLink (Aurelia +
                      Node.js) per contenuti personalizzati condivisibili via
                      link, QR code o tag NFC.
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                  <div className="font-semibold text-zinc-800">
                    2025–2026 — Senior Software Engineer, Overclouds Srl
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      Sviluppo portale camminatametabolica.it (React.js +
                      Node.js) per gestione attività sportive, eventi e
                      abbonamenti ai corsi.
                    </li>
                    <li>
                      Sviluppo portale per Colibri System S.p.A. per gestione
                      ordini dei distributori e delle attività con i rispettivi
                      agenti.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
          <h2 className="text-2xl font-semibold">Lingue</h2>
          <ul className="flex flex-col gap-2 text-sm text-zinc-600">
            <li>Italiano: madrelingua</li>
            <li>Inglese: livello B1</li>
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Soft skill</h2>
          <ul className="flex flex-col gap-3 text-sm text-zinc-600">
            <li>
              <span className="font-medium text-zinc-800">Cliente:</span>{" "}
              comunicazione diretta per analisi necessità, soluzioni tecniche e
              gestione del progetto.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Team di sviluppo:</span>{" "}
              confronto continuo per condividere idee e trovare soluzioni
              efficienti e scalabili.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Team di design:</span>{" "}
              allineamento su decisioni UI/UX e modalità di implementazione delle
              funzionalità.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Collaborazioni esterne:</span>{" "}
              supporto a sviluppatori terzi per integrazioni di componenti e
              funzionalità su progetti esistenti.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Qualità:</span>{" "}
              attenzione ai dettagli e code review sui vari progetti.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Adattabilità:</span>{" "}
              apprendimento rapido di nuove tecnologie e framework.
            </li>
          </ul>
        </section>

        <section className="grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Hobby</h2>
          <ul className="flex flex-col gap-3 text-sm text-zinc-600">
            <li>
              <span className="font-medium text-zinc-800">Viaggiare:</span> viaggi
              in diverse città europee e internazionali, con tappe principali a
              Londra, Parigi, Giappone, Madeira (escursionismo), Gran Canaria e
              Croazia.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Sport:</span> palestra,
              calcio e basket, sia da praticante che da spettatore.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Escursioni:</span>{" "}
              trekking in ambienti di montagna.
            </li>
            <li>
              <span className="font-medium text-zinc-800">Musica:</span>{" "}
              ascolto attivo e partecipazione a concerti.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
