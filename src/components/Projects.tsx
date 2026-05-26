import SafeImage from "@/components/SafeImage";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-4xl font-bold">

          Projects

        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:scale-[1.02]"
            >

              {/* Project Image */}

              <div className="mb-4 overflow-hidden rounded-xl bg-zinc-900">

                <SafeImage
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-32 w-full object-contain p-2 transition duration-500 hover:scale-105"
                />

              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold">

                {project.title}

              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-6 text-gray-400">

                {project.description}

              </p>

              {/* Tech Stack */}

              <div className="mt-5 flex flex-wrap gap-2">

                {project.tech.map((item, i) => (

                  <span
                    key={i}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs"
                  >

                    {item}

                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="mt-6 flex gap-3">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
                >

                  GitHub

                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-4 py-2 text-sm text-black"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}