import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Study Permit Extension | VisasCanada',
  description: 'Extend your study permit with ease. Our team of RCIC-certified experts will guide you through the study permit extension process.',
};

export default function StudyPermitExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Study Permit in Canada? We can help."
      subheadline="Extend your study permit with ease."
    />
  );
}
