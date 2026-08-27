"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // STUB: replace this block with your real signup destination.
    // Examples:
    //   Mailchimp:    POST to /api/subscribe (a route you add) which forwards to Mailchimp's API
    //   Google Form:  POST to the form's formResponse URL with the right entry.* field name
    //   ConvertKit:   POST to https://api.convertkit.com/v3/forms/{FORM_ID}/subscribe
    try {
      await new Promise((resolve) => setTimeout(resolve, 600)); // simulated latency
      console.log("Signup stub — email captured:", email);
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
