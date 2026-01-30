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
          <nav className="nav-menu">
            <span className="nav-link">ENG</span>
            <span className="nav-divider">|</span>
            <span className="nav-link">中文</span>
            <span className="nav-divider">|</span>
            <span className="nav-link">日本語</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
