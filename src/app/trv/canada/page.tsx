import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'TRV Canada Assistance | Expert Visa Consultation | VisasCanada.ca',
  description: 'Get expert help with your TRV Canada application at VisasCanada.ca. Trusted by thousands for successful visa applications since 2015.',
};

export default function TRVCanada() {
  return (
    <PermitLandingPage
      headline="Looking to apply for a Temporary Resident Visa (TRV) for Canada? We can help."
      subheadline="Secure your Temporary Resident Visa (TRV) for Canada. Let our team guide you through the TRV application process."
    />
  );
}
