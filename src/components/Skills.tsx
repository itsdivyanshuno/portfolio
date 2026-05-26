const skills = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l5.973 7.546.053-.077.108-.155V7.2h1.462v8.895l1.527-1.915.502-.628V7.2h1.23v7.553l2.347 2.944c.438.636.777 1.32 1.006 2.049a12.06 12.06 0 01-2.34 2.232z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M12 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
        <path d="M7.05 16.95c-1.56-1.56-3.05-4.12-3.05-4.95s1.49-3.39 3.05-4.95c1.56-1.56 4.12-3.05 4.95-3.05s3.39 1.49 4.95 3.05c1.56 1.56 3.05 4.12 3.05 4.95s-1.49 3.39-3.05 4.95c-1.56 1.56-4.12 3.05-4.95 3.05s-3.39-1.49-4.95-3.05z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M3.89 15.673L6.255.461A.542.542 0 017.27.288L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 6.366a.543.543 0 00-.918-.295l-14.2 14.293 7.919 4.055a1.61 1.61 0 011.454 0l9.096-4.655a.543.543 0 00-.1-.94zM14.3 7.148l-1.82-3.482a.542.542 0 00-.96 0L3.53 16.166 14.3 7.148z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76a1.3 1.3 0 011.1 1.1l2.656 2.66a1.3 1.3 0 11-1.382 1.382L11.23 7.945v5.348a1.3 1.3 0 11-1.1-.362V7.687a1.3 1.3 0 01-.707-1.707L6.608 3.16.452 9.316c-.603.606-.603 1.584 0 2.188l10.481 10.481c.604.603 1.582.603 2.188 0l10.425-10.425c.603-.604.603-1.582 0-2.188z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M4 0h16v8H4V0zm0 8h8l8 8H4V8zm0 8h8v8l-8-8z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <rect x="1" y="1" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M6.5 11.5v-2h11v2M12 9.5v9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <rect x="1" y="1" width="22" height="22" rx="2" />
        <path d="M15 18.5c.8.7 1.8 1.2 3 1 1.3-.1 2.1-1 2.1-2.1 0-1.3-1-2-2.5-2.8-1.7-.9-3-2-3-4 0-2 1.5-3.6 3.8-3.6 1.5 0 2.6.5 3.4 1.5m-8 .5c0 .2 0 .5-.1.7H13c0-.2.1-.5.1-.7v-5H10" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-4 text-gray-400">SKILLS</p>

        <h2 className="mb-12 text-4xl font-bold">
          Technologies I Use
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="mb-4 flex justify-center text-gray-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}