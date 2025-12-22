import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, summary } from "@/data/portfolioData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-center">
            <span className="text-primary">&lt;</span> About Me <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Get to know me better</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">{personalInfo.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground text-sm">1+ Years Professional</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-mono font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground text-sm">B.Tech in CS</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card border border-border rounded-lg p-8 glow-border"
          >
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {summary}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
