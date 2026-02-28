import Link from 'next/link';

const services = [
  'Work Permits',
  'Study Permits',
  'Visitor Visas',
  'Sponsorships',
  'Permanent Residency',
  'Renewals & Extensions',
];

export default function ServiceCards() {
  return (
    <div className="service-cards-grid">
      {services.map((service) => (
        <Link
          key={service}
          href="/start-your-application"
          className="service-card-link"
        >
          <div className="service-card">
            <p className="service-title">{service}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
