import { Router } from "express";
import { sendContactNotification } from "../services/mailService.js";
import { submitToGoogleForm } from "../services/googleFormService.js";

const router = Router();

const allowedBudgets = [
  "Under $25K",
  "$25K-$75K",
  "$75K-$150K",
  "$150K-$300K",
  "$300K+"
];

const allowedTimelines = ["0-3 months", "3-6 months", "6-12 months", "12+ months"];

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

router.post("/contact", async (req, res) => {
  const { name, company, email, projectDescription, budgetRange, timeline } = req.body;

  if (!name || !company || !email || !projectDescription || !budgetRange || !timeline) {
    return res.status(400).json({
      success: false,
      message: "All fields are required for enterprise inquiry intake."
    });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ success: false, message: "Please provide a valid work email address." });
  }

  if (!allowedBudgets.includes(budgetRange)) {
    return res.status(400).json({ success: false, message: "Invalid budget range selected." });
  }

  if (!allowedTimelines.includes(timeline)) {
    return res.status(400).json({ success: false, message: "Invalid timeline selected." });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({ success: false, message: "Name must be at least 2 characters." });
  }

  if (company.trim().length < 2) {
    return res.status(400).json({ success: false, message: "Company must be at least 2 characters." });
  }

  if (projectDescription.trim().length < 30) {
    return res.status(400).json({
      success: false,
      message: "Project description must be at least 30 characters."
    });
  }

  try {
    const submissionPayload = {
      name,
      company,
      email,
      projectDescription,
      budgetRange,
      timeline,
      submittedAt: new Date().toISOString()
    };

    const googleSubmission = await submitToGoogleForm(submissionPayload);
    console.log("[Google Form Submit]", googleSubmission);
    const notification = await sendContactNotification(submissionPayload);

    return res.status(201).json({
      success: true,
      message: "Your inquiry has been received. Our architecture team will respond within one business day.",
      delivery: {
        googleForm: googleSubmission,
        notification
      }
    });
  } catch (error) {
    console.error("Failed to process contact inquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to process your inquiry right now. Please try again shortly."
    });
  }
});

export default router;
