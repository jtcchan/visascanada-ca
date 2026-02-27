import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="hr-divider" />
        <p className="disclaimer">
          VisasCanada.ca helps individuals seeking assistance with Canadian study and work permit
          applications, renewals, and extensions; family sponsorship; visitor visas; and both
          permanent and temporary residency. The personal information you provide on this website
          is secure and collected by licensed professionals authorized by the government to assess
          your potential for immigration to Canada. This website is not affiliated with the
          Government of Canada. Please refer to our{' '}
          <Link href="/privacy-policy" className="link">
            Privacy Policy
          </Link>
          ,{' '}
          <Link href="/terms-of-service" className="link">
            Terms of Service
          </Link>
          , and{' '}
          <Link href="/refund-policy" className="link">
            Refund Policy
          </Link>{' '}
          for more information.
        </p>
      </div>
    </footer>
  );
}
