import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Brightwater Family Law."
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="container-luxe max-w-4xl py-20 lg:py-28">
        <p className="eyebrow mb-7">Privacy</p>
        <h1 className="heading-display">Privacy Policy</h1>
        <div className="mt-12 grid gap-8 leading-8 text-stonewarm-700">
          <p>
            Brightwater Family Law respects your privacy. Information submitted through
            this website is used to respond to enquiries, manage consultation requests
            and provide legal services where an engagement is accepted.
          </p>
          <p>
            We may collect your name, contact details, preferred appointment information
            and a short description of your legal enquiry. Please avoid sending highly
            sensitive material until a lawyer-client relationship has been confirmed.
          </p>
          <p>
            Personal information is handled in accordance with applicable Australian
            privacy obligations. We take reasonable steps to protect information from
            misuse, interference, loss and unauthorised access.
          </p>
          <p>
            To request access to or correction of information we hold about you, contact
            the firm using the details listed on the contact page.
          </p>
        </div>
      </section>
    </main>
  );
}
