const FORM_ID = process.env.GOOGLE_FORM_ID || "1FAIpQLSdXlOlYkmmXnfGSoFZ_j-ecZ7Ik1zg8vp_fmeA1vLnpr034aw";
const FORM_RESPONSE_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

const ENTRY_MAP = {
  name: process.env.GOOGLE_FORM_ENTRY_NAME || "1854352414",
  company: process.env.GOOGLE_FORM_ENTRY_COMPANY || "1551622700",
  email: process.env.GOOGLE_FORM_ENTRY_EMAIL || "2003448452",
  budgetRange: process.env.GOOGLE_FORM_ENTRY_BUDGET || "1445698442",
  timeline: process.env.GOOGLE_FORM_ENTRY_TIMELINE || "1304834734",
  projectDescription: process.env.GOOGLE_FORM_ENTRY_PROJECT_DESCRIPTION || "1242231391"
};

export async function submitToGoogleForm(payload) {
  const body = new URLSearchParams({
    [`entry.${ENTRY_MAP.name}`]: payload.name,
    [`entry.${ENTRY_MAP.company}`]: payload.company,
    [`entry.${ENTRY_MAP.email}`]: payload.email,
    [`entry.${ENTRY_MAP.budgetRange}`]: payload.budgetRange,
    [`entry.${ENTRY_MAP.timeline}`]: payload.timeline,
    [`entry.${ENTRY_MAP.projectDescription}`]: payload.projectDescription
  });

  const response = await fetch(FORM_RESPONSE_URL, {
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
