export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "Tailwind",
    "Firebase",
    "Git",
    "Framer Motion",
    "TypeScript",
    "JavaScript",
  ];

  return (
    <section
      id="skills"
      className="py-32"
    >

      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-4 text-gray-400">

          SKILLS

        </p>

        <h2 className="mb-12 text-4xl font-bold">

          Technologies I Use

        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:scale-105 hover:bg-white/10"
            >

              <h3 className="text-lg font-semibold">

                {skill}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}