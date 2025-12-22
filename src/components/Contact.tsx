import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter, Instagram, Send, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GOOGLE_SHEET_API } from "@/config/api-constants";

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            mobile: formData.get("mobile"),
            subject: formData.get("subject"),
            message: formData.get("message"),
            source: "Portfolio Website",
        };

        try {
            const response = await fetch(GOOGLE_SHEET_API, {
                method: "POST",
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Message Sent!",
                    description: "Thanks for reaching out. I’ll contact you soon.",
                });
                form.reset();
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    const socialLinks = [
        { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
        { icon: Github, href: personalInfo.github, label: "GitHub" },
        { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
        { icon: Instagram, href: personalInfo.instagram, label: "Instagram" },
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
                    <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2 text-center">
                        <span className="text-primary">&lt;</span> Contact <span className="text-primary">/&gt;</span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12">Let's work together</p>

                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-mono font-bold mb-4">Get in touch</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Mail className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <a href={`mailto:${personalInfo.email}`} className="text-foreground hover:text-primary transition-colors">
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-primary" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Location</p>
                                        <p className="text-foreground">{personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" name="company" className="hidden" tabIndex={-1} />

                                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                                            Name
                                        </label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            className="bg-secondary border-border"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                            className="bg-secondary border-border"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="text-sm font-medium mb-2 block">
                                        Mobile Number
                                    </label>
                                    <Input
                                        id="mobile"
                                        name="mobile"
                                        type="tel"
                                        placeholder="+91 9876543210"
                                        className="bg-secondary border-border"
                                        pattern="[0-9+ ]{8,15}"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                                        Subject
                                    </label>
                                    <select
                                        name="subject"
                                        required
                                        className="w-full bg-secondary border border-border rounded-md px-3 py-2"
                                    >
                                        <option value="">Select enquiry type</option>
                                        <option value="Project Inquiry">Project Inquiry</option>
                                        <option value="Job Opportunity">Job Opportunity</option>
                                        <option value="Freelance Work">Freelance Work</option>
                                        <option value="General Question">General Question</option>
                                    </select>

                                </div>
                                <div>
                                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message..."
                                        rows={5}
                                        required
                                        className="bg-secondary border-border resize-none"
                                    />
                                </div>
                                <Button type="submit" size="lg" className="w-full glow-primary" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="mr-2" size={18} />
                                            Send Message
                                        </>
                                    )}
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
