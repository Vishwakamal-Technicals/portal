"use client";

import { FormEvent, useState } from "react";
import { budgetOptions, timelineOptions } from "@/lib/content";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  company: string;
  email: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validateField(name: keyof FormValues, value: string): string {
    const trimmed = value.trim();

    if (!trimmed) {
      return "This field is required.";
    }

    if (name === "name" && trimmed.length < 2) {
      return "Name must be at least 2 characters.";
    }

    if (name === "company" && trimmed.length < 2) {
      return "Company must be at least 2 characters.";
    }

    if (name === "email" && !emailRegex.test(trimmed)) {
      return "Enter a valid work email address.";
    }

    if (name === "budgetRange" && !budgetOptions.includes(trimmed)) {
      return "Select a valid budget range.";
    }

    if (name === "timeline" && !timelineOptions.includes(trimmed)) {
      return "Select a valid timeline.";
    }

    if (name === "projectDescription" && trimmed.length < 30) {
      return "Project description must be at least 30 characters.";
    }

    return "";
  }

  function collectFormValues(formData: FormData): FormValues {
    return {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      timeline: String(formData.get("timeline") || ""),
      projectDescription: String(formData.get("projectDescription") || "")
    };
  }

  function validateAll(values: FormValues): FormErrors {
    const nextErrors: FormErrors = {};

    (Object.keys(values) as Array<keyof FormValues>).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) nextErrors[key] = error;
    });

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = collectFormValues(formData);
    const nextErrors = validateAll(payload);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsError(true);
      setMessage("Please correct validation errors before submitting.");
      setLoading(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.message || "Inquiry submission failed.");
      }

      setIsError(false);
      setMessage(body.message || "Inquiry submitted successfully.");
      form.reset();
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="grid-2">
        <label>
          Name
          <input
            name="name"
            required
            placeholder="Full name"
            onBlur={(event) => {
              const value = event.currentTarget.value;
              setErrors((prev) => ({ ...prev, name: validateField("name", value) || undefined }));
            }}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="field-error">{errors.name}</span> : null}
        </label>
        <label>
          Company
          <input
            name="company"
            required
            placeholder="Organization name"
            onBlur={(event) => {
              const value = event.currentTarget.value;
              setErrors((prev) => ({
                ...prev,
                company: validateField("company", value) || undefined
              }));
            }}
            aria-invalid={Boolean(errors.company)}
          />
          {errors.company ? <span className="field-error">{errors.company}</span> : null}
        </label>
      </div>
      <div className="grid-2">
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="Work email"
            onBlur={(event) => {
              const value = event.currentTarget.value;
              setErrors((prev) => ({ ...prev, email: validateField("email", value) || undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="field-error">{errors.email}</span> : null}
        </label>
        <label>
          Budget Range
          <select
            name="budgetRange"
            required
            defaultValue=""
            onBlur={(event) => {
              const value = event.currentTarget.value;
              setErrors((prev) => ({
                ...prev,
                budgetRange: validateField("budgetRange", value) || undefined
              }));
            }}
            aria-invalid={Boolean(errors.budgetRange)}
          >
            <option value="" disabled>
              Select budget range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budgetRange ? <span className="field-error">{errors.budgetRange}</span> : null}
        </label>
      </div>
      <div className="grid-2">
        <label>
          Timeline
          <select
            name="timeline"
            required
            defaultValue=""
            onBlur={(event) => {
              const value = event.currentTarget.value;
              setErrors((prev) => ({ ...prev, timeline: validateField("timeline", value) || undefined }));
            }}
            aria-invalid={Boolean(errors.timeline)}
          >
            <option value="" disabled>
              Select timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeline ? <span className="field-error">{errors.timeline}</span> : null}
        </label>
        <div className="placeholder" />
      </div>
      <label>
        Project Description
        <textarea
          name="projectDescription"
          required
          rows={5}
          placeholder="Share your current architecture context, growth goals, and priority constraints."
          onBlur={(event) => {
            const value = event.currentTarget.value;
            setErrors((prev) => ({
              ...prev,
              projectDescription: validateField("projectDescription", value) || undefined
            }));
          }}
          aria-invalid={Boolean(errors.projectDescription)}
        />
        {errors.projectDescription ? <span className="field-error">{errors.projectDescription}</span> : null}
      </label>
      <button className="btn btn-primary" disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit Strategic Inquiry"}
      </button>
      {message ? <p className={isError ? "form-message error" : "form-message"}>{message}</p> : null}
      <p className="integration-note">
        Backend route is production-ready for future AWS SES or Resend integration via provider adapters.
      </p>
    </form>
  );
}
