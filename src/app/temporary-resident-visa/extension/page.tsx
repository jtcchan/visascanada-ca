import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Temporary Resident Visa Extension Assistance | VisasCanada.ca',
  description: 'Extend your Temporary Resident Visa with expert help from VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function TemporaryResidentVisaExtension() {
  return (
    <PermitLandingPage
      headline="Looking to extend your Temporary Resident Visa? We can help."
      subheadline="Extend your Temporary Resident Visa with ease."
    />
  );
}
