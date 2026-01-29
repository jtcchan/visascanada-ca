import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Temporary Resident Visa Application Assistance | VisasCanada.ca',
  description: 'Get expert help with your Temporary Resident Visa application at VisasCanada.ca. Trusted by thousands for successful visa applications since 2015.',
};

export default function TemporaryResidentVisaApply() {
  return (
    <PermitLandingPage
      headline="Looking to apply for a Temporary Resident Visa? We can help."
      subheadline="Secure your Temporary Resident Visa for Canada. Let our team guide you through the TRV application process."
    />
  );
}
