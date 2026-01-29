import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Work Permit Extension | VisasCanada.ca',
  description: 'Extend your work permit with ease. Our team of RCIC-certified experts will guide you through the work permit extension process.',
};

export default function WorkPermitExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Work Permit in Canada? We can help."
      subheadline="Extend your work permit with ease."
    />
  );
}
