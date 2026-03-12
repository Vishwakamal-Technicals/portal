import "server-only";
import { ContactPayload } from "@/lib/contact";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

function getGoogleFormConfig() {
  const formId = getRequiredEnv("GOOGLE_FORM_ID");

  return {
    responseUrl: `https://docs.google.com/forms/d/e/${formId}/formResponse`,
    entryMap: {
      name: getRequiredEnv("GOOGLE_FORM_ENTRY_NAME"),
      company: getRequiredEnv("GOOGLE_FORM_ENTRY_COMPANY"),
      email: getRequiredEnv("GOOGLE_FORM_ENTRY_EMAIL"),
      budgetRange: getRequiredEnv("GOOGLE_FORM_ENTRY_BUDGET"),
      timeline: getRequiredEnv("GOOGLE_FORM_ENTRY_TIMELINE"),
      projectDescription: getRequiredEnv("GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION")
    }
  };
}

export async function submitToGoogleForm(payload: ContactPayload) {
  const config = getGoogleFormConfig();

  const body = new URLSearchParams({
    [`entry.${config.entryMap.name}`]: payload.name,
    [`entry.${config.entryMap.company}`]: payload.company,
    [`entry.${config.entryMap.email}`]: payload.email,
    [`entry.${config.entryMap.budgetRange}`]: payload.budgetRange,
    [`entry.${config.entryMap.timeline}`]: payload.timeline,
    [`entry.${config.entryMap.projectDescription}`]: payload.projectDescription
  });

  const response = await fetch(config.responseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store"
  });

  const html = await response.text();
  const isRecorded = html.includes("Your response has been recorded");

  if (!response.ok || !isRecorded) {
    throw new Error("Google Form submission was not confirmed.");
  }

  return { accepted: true, provider: "google-forms", status: response.status };
}
