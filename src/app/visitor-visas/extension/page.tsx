import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Expert Assistance for Canada Visitor Visa Extension | VisasCanada.ca',
  description: 'Extend your visitor visa with ease. Our team of RCIC-certified experts will guide you through the visitor visa extension process.',
};

export default function VisitorVisaExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Visitor Visa in Canada? We can help."
      subheadline="Extend your visitor visa with ease."
    />
  );
}
