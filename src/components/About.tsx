import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
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
          className="mx-auto max-w-5xl"
        >
          <div className="mb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">About Me</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Software engineer focused on building what users rely on.</h2>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="text-primary" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Location</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Briefcase className="text-primary" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Experience</h3>
              <p className="text-sm text-muted-foreground">2+ years of software development experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Education</h3>
              <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm"
          >
            <p className="text-base leading-8 text-muted-foreground md:text-lg">{summary}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
