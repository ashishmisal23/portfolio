import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Sparkles, Twitter } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      nextErrors.subject = "Please add a short subject.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please include a brief message.";
    } else if (form.message.trim().length < 20) {
      nextErrors.message = "Message should be at least 20 characters long.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatus("Please correct the highlighted fields and try again.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry: ${form.subject.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`,
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus(
      "Your email client is opening. If it does not open, email me directly at ashishmisal23@gmail.com.",
    );
    setForm(initialValues);
    setErrors({});
  };

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s build something meaningful together.</h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="mb-4 text-2xl font-semibold">Get in touch</h3>
              <p className="mb-8 text-base leading-7 text-muted-foreground">
                I&apos;m always open to discussing new product ideas, engineering opportunities, and collaborations
                that bring real value to users.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-foreground transition-colors hover:text-primary">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name ? <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email ? <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                    placeholder="Project inquiry"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject ? <p id="subject-error" className="mt-1 text-xs text-red-400">{errors.subject}</p> : null}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    className={errors.message ? "min-h-[150px] border-red-500" : "min-h-[150px]"}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message ? <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
                </div>

                {status ? (
                  <div className="flex items-start gap-2 rounded-xl border border-primary/30 bg-primary/5 p-3 text-sm text-slate-200" aria-live="polite">
                    <Sparkles className="mt-0.5 text-primary" size={16} />
                    <span>{status}</span>
                  </div>
                ) : null}

                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2" size={16} />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
