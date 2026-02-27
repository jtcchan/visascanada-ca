import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-content">
          <Link href="/" className="brand-link">
            <Image
              src="/images/logo.png"
              alt="VisasCanada.ca"
              width={60}
              height={60}
              className="brand-logo"
            />
            <span className="brand-text font-bitter">
              VisasCanada.ca
            </span>
          </Link>
          <div className="lang">ENG | 中文 | 日本語</div>
        </div>
      </div>
    </header>
  );
}
