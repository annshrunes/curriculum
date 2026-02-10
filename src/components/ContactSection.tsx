import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-foreground/90">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Have questions about the platform or need custom features? We'd love to hear from you!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-foreground/90">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/70"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-foreground/90">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              placeholder="your@email.com"
              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/70"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-foreground/90">Subject</label>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
              placeholder="What can we help you with?"
              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 hover:bg-secondary/70"
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2 text-foreground/90">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              placeholder="Tell us more details..."
              className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/50 hover:bg-secondary/70"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Send size={20} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
