import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for Brightwater Family Law."
};

export default function TermsPage() {
  return (
    <main>
      <section className="container-luxe max-w-4xl py-20 lg:py-28">
        <p className="eyebrow mb-7">Terms</p>
        <h1 className="heading-display">Website Terms</h1>
        <div className="mt-12 grid gap-8 leading-8 text-stonewarm-700">
          <p>
            The information on this website is general information only. It is not
            legal advice and should not be relied on as a substitute for advice about
            your specific circumstances.
          </p>
          <p>
            Submitting an enquiry or appointment request does not create a lawyer-client
            relationship. A formal engagement will only begin once Brightwater Family
            Law confirms it can act and engagement terms are agreed.
          </p>
          <p>
            While we aim to keep website information accurate and current, family law
            can change and individual outcomes depend on specific facts.
          </p>
          <p>
            You may use this website for personal, lawful purposes. Content must not be
            copied or republished without permission.
          </p>
        </div>
      </section>
    </main>
  );
}
