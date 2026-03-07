function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return value;
}

export async function submitToGoogleForm(payload) {
  const formId = getRequiredEnv("GOOGLE_FORM_ID");
  const responseUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  const entryMap = {
    name: getRequiredEnv("GOOGLE_FORM_ENTRY_NAME"),
    company: getRequiredEnv("GOOGLE_FORM_ENTRY_COMPANY"),
    email: getRequiredEnv("GOOGLE_FORM_ENTRY_EMAIL"),
    budgetRange: getRequiredEnv("GOOGLE_FORM_ENTRY_BUDGET"),
    timeline: getRequiredEnv("GOOGLE_FORM_ENTRY_TIMELINE"),
    projectDescription: getRequiredEnv("GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION")
  };

  const body = new URLSearchParams({
    [`entry.${entryMap.name}`]: payload.name,
    [`entry.${entryMap.company}`]: payload.company,
    [`entry.${entryMap.email}`]: payload.email,
    [`entry.${entryMap.budgetRange}`]: payload.budgetRange,
    [`entry.${entryMap.timeline}`]: payload.timeline,
    [`entry.${entryMap.projectDescription}`]: payload.projectDescription
  });

  const response = await fetch(responseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString()
  });

  const html = await response.text();
  const isRecorded = html.includes("Your response has been recorded");

  if (!response.ok || !isRecorded) {
    throw new Error("Google Form submission was not confirmed.");
  }

  return { accepted: true, provider: "google-forms", status: response.status };
}
