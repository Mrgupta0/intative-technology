import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
import WhyChooseUs from "../components/WhyChooseUs";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-light">
      <section className="hero">
        <div className="container text-center">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Custom Websites & Software <br />
            That Scale Your Business
          </motion.h1>
          <p className="hero-subtitle">
            We design and develop high-performance digital products
            for startups and growing companies.
          </p>

          <button
            className="btn btn-primary btn-lg mt-3"
            onClick={() => navigate("/Contact")}
          >
            Get Started
          </button>
          <hr></hr>
          <div className="container py-5">
            <h2 className="fw-bold mb-3">About Intative Technology</h2>
            <p className="text-muted">
              We are a technology-driven company specializing in custom websites, web applications,
              and software solutions tailored to business needs.
            </p>
            <p>
              Our focus is performance, security, and long-term scalability — not shortcuts.
            </p>
          </div>
          <hr></hr>
          <WhyChooseUs />
          <hr></hr>
          <div>{<Services />}</div>
          <hr></hr>
          <div>{<Contact />}</div>

        </div>
      </section>
    </div >
  );
}
