export default function Projects() {
  return (
    <section id="projects" className="py-32">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">

              Student Database System

            </h3>

            <p className="mt-4 text-gray-400">

              Student management project with subject cards and structured data.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">

              HBTU Connect

            </h3>

            <p className="mt-4 text-gray-400">

              Student networking platform concept.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}