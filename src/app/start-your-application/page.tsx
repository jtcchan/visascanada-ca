import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Your Application | VisasCanada.ca',
  description: 'Get a free assessment to determine your eligibility for Canadian work permits, study permits, visitor visas, and immigration applications.',
};

export default function StartYourApplication() {
  return (
    <>
      <section className="min-h-[80vh] bg-gray-50">
        {/* Typeform Embed */}
        <div 
          data-tf-live="01HRG7MC65CZ3KFA96EEFE47F1"
          className="w-full min-h-[80vh]"
        />
        <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />
      </section>
    </>
  );
}
