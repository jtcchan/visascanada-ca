import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | VisasCanada.ca',
  description: 'Privacy Policy for VisasCanada.ca immigration services.',
};

export default function PrivacyPolicy() {
  return (
    <ContentPage title="Privacy Policy">
      <p>
        This Privacy Policy describes how VisasCanada.ca (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, and shares information about you when you use our website
        and services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you fill out a form,
        request an assessment, or contact us for services. This may include your name, email
        address, phone number, citizenship status, and other information relevant to your
        immigration application.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our services; process
        your applications and requests; communicate with you about our services; and comply with
        legal obligations.
      </p>

      <h2>Information Sharing</h2>
      <p>
        We do not sell your personal information. We may share your information with licensed
        immigration professionals who assist with your application, and as required by law.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please{' '}
        <Link href="/start-your-application" className="link">
          contact us through our website
        </Link>
        .
      </p>
    </ContentPage>
  );
}
