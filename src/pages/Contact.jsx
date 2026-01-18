export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-6">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-dark">Send Message</button>
        </div>
      </form>
    </div>
  );
}
