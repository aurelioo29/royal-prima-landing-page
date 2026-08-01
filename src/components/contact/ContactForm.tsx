"use client";

import { type FormEvent, useState } from "react";

import { useTranslations } from "next-intl";

import { contactData } from "./contact.data";
import ContactIcon from "./ContactIcon";

export default function ContactForm() {
  const t = useTranslations("ContactPage.form");

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();

    const email = String(formData.get("email") ?? "").trim();

    const phone = String(formData.get("phone") ?? "").trim();

    const subject = String(formData.get("subject") ?? "").trim();

    const message = String(formData.get("message") ?? "").trim();

    const emailSubject =
      subject || "Permintaan Informasi RSU Royal Prima Medan";

    const emailBody = [
      `${t("emailBody.name")}: ${name}`,
      `${t("emailBody.email")}: ${email}`,
      `${t("emailBody.phone")}: ${phone || "-"}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl = [
      contactData.email.href,
      `?subject=${encodeURIComponent(emailSubject)}`,
      `&body=${encodeURIComponent(emailBody)}`,
    ].join("");

    setSubmitted(true);

    window.location.href = mailtoUrl;
  }

  return (
    <div>
      <p className="m-0! text-xs font-bold uppercase tracking-[0.18em] text-[#0077B6]">
        {t("eyebrow")}
      </p>

      <h2 className="mt-4 mb-0! max-w-[620px] text-[34px] leading-[1.15] font-bold tracking-[-0.03em] text-[#123B56] sm:text-[42px]">
        {t("title")}
      </h2>

      <p className="mt-5 mb-0! max-w-[620px] text-[15px] leading-8 text-[#57778C]">
        {t("description")}
      </p>

      <form onSubmit={handleSubmit} className="mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2">
          <FormField
            id="contact-name"
            name="name"
            type="text"
            label={t("fields.name.label")}
            placeholder={t("fields.name.placeholder")}
            autoComplete="name"
            required
          />

          <FormField
            id="contact-email"
            name="email"
            type="email"
            label={t("fields.email.label")}
            placeholder={t("fields.email.placeholder")}
            autoComplete="email"
            required
          />

          <FormField
            id="contact-phone"
            name="phone"
            type="tel"
            label={t("fields.phone.label")}
            placeholder={t("fields.phone.placeholder")}
            autoComplete="tel"
          />

          <FormField
            id="contact-subject"
            name="subject"
            type="text"
            label={t("fields.subject.label")}
            placeholder={t("fields.subject.placeholder")}
            required
          />

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-[#123B56]"
            >
              {t("fields.message.label")}
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder={t("fields.message.placeholder")}
              className="mt-3 min-h-[150px] w-full resize-y border-0 border-b border-[#BCD6E2] bg-transparent px-0 py-3 text-[15px] leading-7 text-[#123B56] outline-none transition-colors placeholder:text-[#8AA1AF] focus:border-[#0077B6] focus:ring-0"
            />
          </div>
        </div>

        <div className="mt-9 flex flex-col items-start justify-between gap-6 border-t border-[#E2EDF2] pt-7 sm:flex-row sm:items-center">
          <p className="m-0! max-w-[520px] text-xs leading-6 text-[#708998]">
            {t("privacyNote")}
          </p>

          <button
            type="submit"
            className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center gap-3 border-0 bg-[#0077B6] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#005F92] hover:shadow-[0_14px_30px_rgba(0,119,182,0.2)]"
          >
            {t("submit")}

            <ContactIcon name="arrow" className="size-[18px]" />
          </button>
        </div>

        <p
          aria-live="polite"
          className={`mt-4 mb-0! text-sm text-[#0077B6] transition-opacity ${
            submitted ? "opacity-100" : "opacity-0"
          }`}
        >
          {submitted ? t("emailClientNotice") : ""}
        </p>
      </form>
    </div>
  );
}

type FormFieldProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
};

function FormField({
  id,
  name,
  type,
  label,
  placeholder,
  autoComplete,
  required = false,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[#123B56]"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className="mt-3 h-12 w-full border-0 border-b border-[#BCD6E2] bg-transparent px-0 text-[15px] text-[#123B56] outline-none transition-colors placeholder:text-[#8AA1AF] focus:border-[#0077B6] focus:ring-0"
      />
    </div>
  );
}
