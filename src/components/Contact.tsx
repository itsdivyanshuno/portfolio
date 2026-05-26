export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >

      <div className="mx-auto max-w-3xl px-6">

        <p className="mb-4 text-center text-gray-400">

          CONTACT

        </p>

        <h2 className="mb-12 text-center text-4xl font-bold">

          Let's Connect

        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
          />

          <button
            type="submit"
            className="rounded-full bg-white px-8 py-3 text-black transition hover:scale-105"
          >

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
}