import type { Metadata } from 'next';
import PermitLandingPage from '@/components/PermitLandingPage';

export const metadata: Metadata = {
  title: 'Stream A Immigration Application Assistance | VisasCanada.ca',
  description: 'Get expert help with your Stream A immigration application at VisasCanada.ca. Trusted by thousands for successful applications since 2015.',
};

export default function StreamAApply() {
  return (
    <PermitLandingPage
      headline="Looking to apply through Stream A? We can help."
      subheadline="Navigate the Stream A pathway with ease. Let our team guide you through the application process."
    />
  );
}
