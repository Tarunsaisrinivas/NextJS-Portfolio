"use client";
import { useState } from "react";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = async (formData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        return { success: true };
      } else {
        return { success: false, error: "Error submitting message" };
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: "Network error submitting message" };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSubmitted,
    submitForm,
    setIsSubmitted,
  };
}
