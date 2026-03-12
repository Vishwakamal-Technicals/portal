import "server-only";
import { ContactPayload } from "@/lib/contact";

export async function sendContactNotification(payload: ContactPayload & { submittedAt: string }) {
  const provider = process.env.EMAIL_PROVIDER || "console";

  if (provider === "ses") {
    return { accepted: true, provider: "ses", queued: true };
  }

  if (provider === "resend") {
    return { accepted: true, provider: "resend", queued: true };
  }

  console.log("[Contact Intake]", JSON.stringify(payload, null, 2));
  return { accepted: true, provider: "console", queued: false };
}
