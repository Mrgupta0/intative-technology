export default function Services() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Our Services</h2>
      <div className="row g-4">
        {[
          "Website Development",
          "Custom Software",
          "UI/UX Design",
          "Business Automation"
        ].map((service, i) => (
          <div className="col-md-3" key={i}>
            <div className="service-card">
              <div className="card-body">
                <h5 >{service}</h5>
                <p className="card-text text-muted">
                  Scalable, secure, and optimized solutions designed for growth.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
