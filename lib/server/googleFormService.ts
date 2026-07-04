import "server-only";
import { ContactPayload } from "@/lib/contact";

const googleFormEnvNames = [
  "GOOGLE_FORM_ID",
  "GOOGLE_FORM_ENTRY_NAME",
  "GOOGLE_FORM_ENTRY_COMPANY",
  "GOOGLE_FORM_ENTRY_EMAIL",
  "GOOGLE_FORM_ENTRY_BUDGET",
  "GOOGLE_FORM_ENTRY_TIMELINE",
  "GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION"
] as const;

function getGoogleFormEnv(name: (typeof googleFormEnvNames)[number]) {
  return process.env[name]?.trim() || "";
}

function isGoogleFormConfigured() {
  return googleFormEnvNames.every((name) => Boolean(getGoogleFormEnv(name)));
}

function getGoogleFormConfig() {
  const formId = getGoogleFormEnv("GOOGLE_FORM_ID");

  return {
    responseUrl: `https://docs.google.com/forms/d/e/${formId}/formResponse`,
    entryMap: {
      name: getGoogleFormEnv("GOOGLE_FORM_ENTRY_NAME"),
      company: getGoogleFormEnv("GOOGLE_FORM_ENTRY_COMPANY"),
      email: getGoogleFormEnv("GOOGLE_FORM_ENTRY_EMAIL"),
      budgetRange: getGoogleFormEnv("GOOGLE_FORM_ENTRY_BUDGET"),
      timeline: getGoogleFormEnv("GOOGLE_FORM_ENTRY_TIMELINE"),
      projectDescription: getGoogleFormEnv("GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION")
    }
  };
}

export async function submitToGoogleForm(payload: ContactPayload) {
  if (!isGoogleFormConfigured()) {
    return { accepted: false, provider: "google-forms", skipped: true, reason: "not-configured" };
  }

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
