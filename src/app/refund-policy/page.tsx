import type { Metadata } from 'next';
import ContentPage from '@/components/ContentPage';

export const metadata: Metadata = {
  title: 'Refund Policy | VisasCanada.ca',
  description: 'Refund Policy for VisasCanada.ca immigration services.',
};

export default function RefundPolicy() {
  return (
    <ContentPage title="Refund Policy">
      <p>
        This Refund Policy outlines the terms under which refunds may be issued for services
        provided by VisasCanada.ca.
      </p>

      <h2>Assessment Fees</h2>
      <p>
        Initial assessments are provided free of charge. No refund is applicable as no payment is
        required for this service.
      </p>

      <h2>Service Fees</h2>
      <p>
        Service fees are generally non-refundable once work has commenced on your application. This
        includes time spent on document review, preparation, and submission.
      </p>

      <h2>Government Fees</h2>
      <p>
        Government fees paid to IRCC or other authorities are non-refundable by VisasCanada.ca.
        Refund policies for government fees are determined by the respective government agencies.
      </p>

      <h2>Cancellation</h2>
      <p>
        If you wish to cancel services before work has begun, please contact us immediately.
        Partial refunds may be available depending on the stage of service delivery.
      </p>

      <h2>Contact Us</h2>
      <p>For refund inquiries, please contact us through our website with your service details.</p>
    </ContentPage>
  );
}
