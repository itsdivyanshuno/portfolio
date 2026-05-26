"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Auto-dismiss success/error after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const isValid = name.trim() && EMAIL_REGEX.test(email) && message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    setStatus("loading");

    try {
      await addDoc(collection(db, "messages"), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: new Date(),
      });

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-32">

      <div className="mx-auto max-w-3xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none transition focus:border-white/30"
            required
          />

          <button
            type="submit"
            disabled={status === "loading" || !isValid}
            className="w-full rounded-full bg-white px-8 py-3 font-medium text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="animate-pulse rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
              Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}

        </form>

      </div>

    </section>
  );
}