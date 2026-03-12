import { NextRequest, NextResponse } from "next/server";
import {
  ContactPayload,
  normalizeContactPayload,
  validateContactPayload
} from "@/lib/contact";
import { submitToGoogleForm } from "@/lib/server/googleFormService";
import { sendContactNotification } from "@/lib/server/mailService";

export const runtime = "nodejs";

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    return originUrl.host === request.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, message: "Invalid request origin." },
      { status: 403 }
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { success: false, message: "Unsupported content type." },
      { status: 415 }
    );
  }

  let payload: Partial<Record<keyof ContactPayload, unknown>>;

  try {
    payload = (await request.json()) as Partial<Record<keyof ContactPayload, unknown>>;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const normalizedPayload = normalizeContactPayload(payload);
  const errors = validateContactPayload(normalizedPayload);

  if (Object.keys(errors).length > 0) {
    const firstError = Object.values(errors)[0];
    return NextResponse.json(
      {
        success: false,
        message: firstError || "All fields are required for enterprise inquiry intake.",
        errors
      },
      { status: 400 }
    );
  }

  try {
    const submissionPayload = {
      ...normalizedPayload,
      submittedAt: new Date().toISOString()
    };

    const googleSubmission = await submitToGoogleForm(normalizedPayload);
    const notification = await sendContactNotification(submissionPayload);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received. Our architecture team will respond within one business day.",
        delivery: {
          googleForm: googleSubmission,
          notification
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to process contact inquiry:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your inquiry right now. Please try again shortly."
      },
      { status: 500 }
    );
  }
}
