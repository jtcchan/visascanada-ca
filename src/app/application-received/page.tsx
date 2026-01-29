import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Received | VisasCanada.ca',
  description: 'Thank you for your application. Our team will be in touch soon.',
};

export default function ApplicationReceived() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-[#2E735F] flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold font-bitter text-gray-900 mb-4">
          Application Received!
        </h1>
        
        <div className="hr-divider" />
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for reaching out. One of our immigration experts will review your 
          information and contact you within 1-2 business days.
        </p>
        
        <p className="text-gray-500 mb-8">
          In the meantime, feel free to browse our site or learn more about the immigration process.
        </p>
        
        <Link href="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
