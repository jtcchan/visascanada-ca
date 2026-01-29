import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="VisasCanada.ca"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-xl font-semibold text-gray-800 font-bitter">
              VisasCanada.ca
            </span>
          </Link>
          <div className="text-sm text-gray-600">
            ENG | 中文 | 日本語
          </div>
        </div>
      </div>
    </header>
  );
}
