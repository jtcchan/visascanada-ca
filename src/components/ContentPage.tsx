interface ContentPageProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentPage({ title, children }: ContentPageProps) {
  return (
    <section className="content-section">
      <div className="container-content">
        <h1 className="heading" style={{ textAlign: 'center' }}>
          {title}
        </h1>
        <div className="hr-divider" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <div className="content-body">{children}</div>
      </div>
    </section>
  );
}
