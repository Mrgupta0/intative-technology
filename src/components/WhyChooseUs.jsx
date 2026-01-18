import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 }
  })
};

function WhyChooseUs() {
  const points = [
    "⚡Focus on performance and scalability",
    "🧼Clean, maintainable code",
    "📊Business-driven development approach",
    "💬Transparent communication",
    "🔧Long-term support mindset"
  ];

  return (
    <section className="why-choose-us py-5">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Intative Technology
        </motion.h2>

        <ul className="list-unstyled why-list" >
          {points.map((text, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               {text}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
