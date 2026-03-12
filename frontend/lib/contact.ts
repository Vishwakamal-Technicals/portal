export const budgetOptions = ["Under $25K", "$25K-$75K", "$75K-$150K", "$150K-$300K", "$300K+"] as const;
export const timelineOptions = ["0-3 months", "3-6 months", "6-12 months", "12+ months"] as const;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

export function validateContactField(name: keyof ContactPayload, value: string): string {
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

  if (name === "budgetRange" && !budgetOptions.includes(trimmed as (typeof budgetOptions)[number])) {
    return "Select a valid budget range.";
  }

  if (name === "timeline" && !timelineOptions.includes(trimmed as (typeof timelineOptions)[number])) {
    return "Select a valid timeline.";
  }

  if (name === "projectDescription" && trimmed.length < 30) {
    return "Project description must be at least 30 characters.";
  }

  return "";
}

export function validateContactPayload(values: ContactPayload): ContactErrors {
  const nextErrors: ContactErrors = {};

  (Object.keys(values) as Array<keyof ContactPayload>).forEach((key) => {
    const error = validateContactField(key, values[key]);
    if (error) {
      nextErrors[key] = error;
    }
  });

  return nextErrors;
}

export function normalizeContactPayload(values: Partial<Record<keyof ContactPayload, unknown>>): ContactPayload {
  return {
    name: String(values.name || "").trim(),
    company: String(values.company || "").trim(),
    email: String(values.email || "").trim(),
    budgetRange: String(values.budgetRange || "").trim(),
    timeline: String(values.timeline || "").trim(),
    projectDescription: String(values.projectDescription || "").trim()
  };
}
