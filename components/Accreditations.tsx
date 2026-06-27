const CERTS = [
  "NCSC Cyber Advisor (Cyber Essentials)",
  "NCSC Cyber Incident Exercising",
  "NCSC Consultancy Risk Management",
  "NCSC Consultancy Audit & Review",
  "NCSC CHECK Penetration Testing",
  "NCSC Cyber Incident Response Standard Level",
  "NCSC Consultancy Security Architecture",
  "NCSC Cyber Resilience Audit",
];

export default function Accreditations() {
  return (
    <section className="bg-gallery py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-dark">
            Assurance
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Accreditations and Certifications
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            Our consultants work to recognised cyber security, privacy, and
            resilience standards so recommendations are practical, auditable, and
            repeatable.
          </p>
        </div>

        <div className="mt-12 rounded-sm bg-navy p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-gallery/10 sm:grid-cols-4 lg:grid-cols-8">
            {CERTS.map((cert, index) => (
              <div
                key={cert}
                className="flex min-h-40 flex-col items-center justify-start gap-3 bg-navy p-4 text-center"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-[9px] font-bold uppercase ${
                    index % 2 === 0
                      ? "border-teal/60 text-teal"
                      : "border-purple/70 text-purple"
                  }`}
                >
                  {index % 3 === 0 ? "ISO" : "NCSC"}
                </div>
                <span className="text-[10px] leading-tight text-gallery/80">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="button-focus inline-block rounded-sm bg-purple px-6 py-3 text-sm font-semibold text-gallery transition-colors hover:bg-purple-dark"
          >
            View All Accreditations
          </a>
        </div>
      </div>
    </section>
  );
}
