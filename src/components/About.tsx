import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >

      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">

        {/* Left */}

        <div className="flex justify-center">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">

            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={350}
              height={350}
              className="rounded-2xl object-cover"
            />

          </div>

        </div>

        {/* Right */}

        <div>

          <p className="mb-4 text-gray-400">

            ABOUT ME

          </p>

          <h2 className="text-5xl font-bold">

            Hi, I'm Divyansh

          </h2>

          <p className="mt-6 leading-8 text-gray-400">

            First-year student exploring development through projects,
            learning modern web technologies and experimenting with ideas.

          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "Tailwind",
              "Firebase",
              "Framer Motion",
            ].map((skill) => (

              <span
                key={skill}
                className="rounded-full bg-white/10 px-4 py-2 text-sm"
              >

                {skill}

              </span>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}