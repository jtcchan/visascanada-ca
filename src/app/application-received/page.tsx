import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Application Received | VisasCanada.ca',
  description: 'Thank you for your application. Our team will be in touch soon.',
};

export default function ApplicationReceived() {
  return (
    <section className="content-section" style={{ textAlign: 'center' }}>
      <div className="container-content">
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: '#b40000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
          }}
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="heading" style={{ textAlign: 'center' }}>
          Application Received!
        </h1>
        <div className="hr-divider" style={{ marginLeft: 'auto', marginRight: 'auto' }} />

        <p className="explainer" style={{ textAlign: 'center' }}>
          Thank you for reaching out. One of our immigration experts will review your information
          and contact you within 1–2 business days.
        </p>
        <p className="explainer" style={{ textAlign: 'center', color: '#6b7094' }}>
          In the meantime, feel free to browse our site or learn more about the immigration process.
        </p>

        <Link href="/" className="btn-primary" style={{ display: 'inline-block', marginTop: '16px' }}>
          Return to Home
        </Link>
      </div>
    </section>
  );
}
