const provider = process.env.EMAIL_PROVIDER || "console";

export async function sendContactNotification(payload) {
  if (provider === "ses") {
    // Future integration hook for AWS SES.
    // TODO: Wire AWS SDK SESv2 client and template-based dispatch.
    return { accepted: true, provider: "ses", queued: true };
  }

  if (provider === "resend") {
    // Future integration hook for Resend.
    // TODO: Wire Resend SDK and domain-verified sender identity.
    return { accepted: true, provider: "resend", queued: true };
  }

  // Default local fallback for development and demo environments.
  console.log("[Contact Intake]", JSON.stringify(payload, null, 2));
  return { accepted: true, provider: "console", queued: false };
}
