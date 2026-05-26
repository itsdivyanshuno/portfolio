"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });

      alert("Message sent successfully 🚀");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-32">

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
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-4"
            required
          />

          <button
            type="submit"
            className="w-full rounded-full bg-white px-8 py-3 text-black"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}