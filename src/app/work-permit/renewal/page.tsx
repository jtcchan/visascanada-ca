import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Work Permit Renewal | VisasCanada.ca',
  description: 'Renew your work permit with ease. Our team of RCIC-certified experts will guide you through the work permit renewal process.',
};

export default function WorkPermitRenewal() {
  return (
    <PermitLandingPage
      headline="Looking to renew your Work Permit in Canada? We can help."
      subheadline="Renew your work permit with ease."
    />
  );
}
