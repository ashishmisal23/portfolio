import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot-optimized.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden section-padding pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,1))]" />
      <div className="absolute left-10 top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-8 bottom-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Available for opportunities
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-primary">Hello, I&apos;m</p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>

            <h2 className="mt-4 text-xl font-medium text-slate-200 md:text-2xl">
              {personalInfo.role}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              {personalInfo.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2">
                <MapPin size={14} className="text-primary" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-2 transition-colors hover:border-primary/60 hover:text-primary">
                <Mail size={14} className="text-primary" />
                {personalInfo.email}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="glow-primary">
                <a href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalInfo.resume} download>
                  <Download className="mr-2" size={18} />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="secondary" size="sm">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2" size={17} />
                  Visit GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2" size={17} />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-primary/20 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-3 shadow-[0_30px_80px_rgba(14,165,233,0.18)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.4rem] border border-border bg-slate-900">
                <img
                  src={headshot}
                  alt="Ashish Misal - Software Engineer"
                  width={675}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-[520px] w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a href="#about" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/70 text-slate-200 transition-colors hover:border-primary hover:text-primary" aria-label="Scroll to about section">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
