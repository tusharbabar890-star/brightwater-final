import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="container-luxe grid min-h-[70vh] place-items-center py-20 text-center">
      <div className="max-w-2xl">
        <p className="eyebrow mb-7">404</p>
        <h1 className="heading-display">This page cannot be found.</h1>
        <p className="body-large mt-8">
          The page may have moved, or the address may be incorrect. Return to the
          homepage or explore our family law services.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/services" tone="secondary">
            View Services
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
