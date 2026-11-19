"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type FormFields = {
  name: string;
  email: string;
  phone: string;
  details: string;
};

const emptyForm: FormFields = {
  name: "",
  email: "",
  phone: "",
  details: "",
};

export default function GetQuote() {
  const [formData, setFormData] = useState<FormFields>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setFormData((current) => ({ ...current, name: value }));
        break;
      case "email":
        setFormData((current) => ({ ...current, email: value }));
        break;
      case "phone":
        setFormData((current) => ({ ...current, phone: value }));
        break;
      case "details":
        setFormData((current) => ({ ...current, details: value }));
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const payload: unknown = await response.json();
      const message =
        typeof payload === "object" &&
        payload !== null &&
        "message" in payload &&
        typeof payload.message === "string"
          ? payload.message
          : undefined;

      if (!response.ok) {
        throw new Error(message || "Your message couldn’t be sent. Please try again.");
      }

      setStatus({
        type: "success",
        message: message || "Thanks — your message has been sent.",
      });
      setFormData(emptyForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-intro">
        <p className="contact-overline">A project in mind?</p>
        <p>Share a little context and I&apos;ll get back to you.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-field">
          <label htmlFor="contact-name">Name</label>
          <input
            autoComplete="name"
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-email-address">Email</label>
          <input
            autoComplete="email"
            id="contact-email-address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-field">
          <label htmlFor="contact-phone">Phone</label>
          <input
            autoComplete="tel"
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-field contact-field-wide">
          <label htmlFor="contact-details">What are you looking to build?</label>
          <textarea
            id="contact-details"
            name="details"
            rows={4}
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-actions">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send inquiry"}
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>
          {status && (
            <p
              className={`contact-form-status contact-form-status-${status.type}`}
              role={status.type === "error" ? "alert" : "status"}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
