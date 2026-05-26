import { projects } from "@/data/projects";

export default function Projects() {
  return (

    <section
      id="projects"
      className="py-32"
    >

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:scale-[1.02]"
            >

              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="rounded-full bg-white/10 px-4 py-1 text-sm"
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}