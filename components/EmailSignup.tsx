"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScrWJiKGiFfwfl2kCowa8XBzzFbOzVCMcDbavR1veaXxTfnIA/formResponse";
const GOOGLE_FORM_EMAIL_ENTRY = "entry.421251072";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append(GOOGLE_FORM_EMAIL_ENTRY, email);
      // Google Forms doesn't send CORS headers, so the response is opaque —
      // "no-cors" lets the POST go through without the fetch throwing on it.
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p
        className="font-body text-ink text-base sm:text-lg fade-up"
        role="status"
      >
        You&rsquo;re on the list. We&rsquo;ll email you the moment we launch.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-full max-w-[520px]"
      noValidate
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        placeholder="Enter your email to be the first to know"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
        className="w-full h-[52px] sm:h-[60px] rounded-full border border-ink/15 bg-card px-6 text-ink placeholder:text-sage/70 text-base focus:border-botanical transition-colors disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="h-[52px] sm:h-[60px] rounded-full bg-ink text-white font-medium px-8 text-base transition-colors hover:bg-botanical-dark disabled:opacity-60 whitespace-nowrap"
      >
        {status === "submitting" ? "Joining\u2026" : "Stay Connected"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
