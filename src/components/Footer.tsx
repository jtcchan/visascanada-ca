import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2E735F] text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="border-t border-white/20 pt-8">
          <p className="text-sm text-white/80 leading-relaxed">
            VisasCanada.ca helps individuals seeking assistance with Canadian study and work permit 
            applications, renewals, and extensions; family sponsorship; visitor visas; and both 
            permanent and temporary residency. The personal information you provide on this website 
            is secure and collected by licensed professionals authorized by the government to assess 
            your potential for immigration to Canada. This website is not affiliated with the 
            Government of Canada. Please refer to our{' '}
            <Link href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            ,{' '}
            <Link href="/terms-of-service" className="underline hover:text-white">
              Terms of Service
            </Link>
            , and{' '}
            <Link href="/refund-policy" className="underline hover:text-white">
              Refund Policy
            </Link>{' '}
            for more information.
          </p>
        </div>
      </div>
    </footer>
  );
}
