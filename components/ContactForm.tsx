"use client";

import { FormEvent, useState } from "react";
import {
  ContactErrors,
  ContactPayload,
  budgetOptions,
  timelineOptions,
  validateContactField,
  validateContactPayload
} from "@/lib/contact";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<ContactErrors>({});

  function collectFormValues(formData: FormData): ContactPayload {
    return {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      budgetRange: String(formData.get("budgetRange") || ""),
      timeline: String(formData.get("timeline") || ""),
      projectDescription: String(formData.get("projectDescription") || "")
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = collectFormValues(formData);
    const nextErrors = validateContactPayload(payload);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsError(true);
      setMessage("Please correct validation errors before submitting.");
      setLoading(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("/api/contact", {
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
              setErrors((prev) => ({ ...prev, name: validateContactField("name", value) || undefined }));
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
                company: validateContactField("company", value) || undefined
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
              setErrors((prev) => ({ ...prev, email: validateContactField("email", value) || undefined }));
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
                budgetRange: validateContactField("budgetRange", value) || undefined
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
              setErrors((prev) => ({ ...prev, timeline: validateContactField("timeline", value) || undefined }));
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
              projectDescription: validateContactField("projectDescription", value) || undefined
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
    </form>
  );
}
