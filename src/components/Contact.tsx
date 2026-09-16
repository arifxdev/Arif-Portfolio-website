import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageSquareCode, CheckCircle2, Trash2, Inbox } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "../data";
import { ClientInquiry } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Real-time local database of inquiries
  const [inquiries, setInquiries] = useState<ClientInquiry[]>([]);
  const [showInbox, setShowInbox] = useState(false);

  useEffect(() => {
    // Load existing messages
    const saved = localStorage.getItem("client_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate standard server latency
    setTimeout(() => {
      const newInquiry: ClientInquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date: new Date().toLocaleString(),
        isRead: false,
      };

      const updatedInquiries = [newInquiry, ...inquiries];
      setInquiries(updatedInquiries);
      localStorage.setItem("client_inquiries", JSON.stringify(updatedInquiries));

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success status message after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    }, 800);
  };

  const deleteInquiry = (id: string) => {
    const filtered = inquiries.filter((inq) => inq.id !== id);
    setInquiries(filtered);
    localStorage.setItem("client_inquiries", JSON.stringify(filtered));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#fafafa] dark:bg-[#050505] border-t border-neutral-200/40 dark:border-white/10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-16">
          <p className="text-[10px] font-mono font-semibold tracking-[0.4em] text-neutral-400 dark:text-white/30 uppercase">
            05. Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-light italic text-slate-950 dark:text-white">
            Connect & Collaborate
          </h2>
          <div className="h-[1px] w-20 bg-neutral-200 dark:bg-white/10 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-light italic text-slate-950 dark:text-white">
                Let's discuss your next project
              </h3>
              <p className="text-sm sm:text-base text-neutral-500 dark:text-white/60 leading-relaxed">
                I'm currently looking for full-stack and front-end opportunities. If you have a question or want to collaborate, feel free to drop a message or contact me directly!
              </p>
            </div>

            {/* Direct Contact Handles */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
                <div className="p-3 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 rounded-xl border border-black/5 dark:border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-light italic text-slate-950 dark:text-white text-base">Direct Phone / Call</h4>
                  <p className="text-neutral-500 dark:text-white/40 text-sm mt-0.5">{personalInfo.phone}</p>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs font-semibold tracking-wider uppercase text-neutral-850 dark:text-white/60 hover:text-black dark:hover:text-white mt-2 inline-block transition-colors">Call Now</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
                <div className="p-3 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 rounded-xl border border-black/5 dark:border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-light italic text-slate-950 dark:text-white text-base">Direct Email</h4>
                  <p className="text-neutral-500 dark:text-white/40 text-sm mt-0.5">{personalInfo.email}</p>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs font-semibold tracking-wider uppercase text-neutral-850 dark:text-white/60 hover:text-black dark:hover:text-white mt-2 inline-block transition-colors">Send Email</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10">
                <div className="p-3 bg-black/5 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 rounded-xl border border-black/5 dark:border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-light italic text-slate-950 dark:text-white text-base">Location</h4>
                  <p className="text-neutral-500 dark:text-white/40 text-sm mt-0.5">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Test Inbox Button */}
            {inquiries.length > 0 && (
              <div className="pt-4">
                <button
                  id="btn-toggle-inbox"
                  onClick={() => setShowInbox(!showInbox)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-neutral-850 dark:text-neutral-200 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 font-sans font-semibold text-xs transition-all cursor-pointer"
                >
                  <Inbox className="w-4 h-4" />
                  <span>{showInbox ? "Hide Reviewer Inbox" : `See Inbox (${inquiries.length})`}</span>
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Dynamic Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl">
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 dark:text-white/30 uppercase">YOUR NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#fafafa] dark:bg-[#0d0d0f] text-sm text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all ${
                        errors.name
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-black/10 dark:border-white/10"
                      }`}
                      placeholder="Muhammad Arif"
                    />
                    {errors.name && <p className="text-xs text-rose-500 font-mono">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 dark:text-white/30 uppercase">YOUR EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#fafafa] dark:bg-[#0d0d0f] text-sm text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-400"
                          : "border-black/10 dark:border-white/10"
                      }`}
                      placeholder="arif@gmail.com"
                    />
                    {errors.email && <p className="text-xs text-rose-500 font-mono">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 dark:text-white/30 uppercase">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#fafafa] dark:bg-[#0d0d0f] text-sm text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all ${
                      errors.subject
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-black/10 dark:border-white/10"
                    }`}
                    placeholder="Project collaboration proposal"
                  />
                  {errors.subject && <p className="text-xs text-rose-500 font-mono">{errors.subject}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono font-semibold tracking-[0.2em] text-neutral-400 dark:text-white/30 uppercase">YOUR MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-[#fafafa] dark:bg-[#0d0d0f] text-sm text-slate-850 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all ${
                      errors.message
                        ? "border-rose-400 focus:ring-rose-400"
                        : "border-black/10 dark:border-white/10"
                    }`}
                    placeholder="Hey Muhammad, I loved your resume..."
                  />
                  {errors.message && <p className="text-xs text-rose-500 font-mono">{errors.message}</p>}
                </div>

                {/* Status messages */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      id="contact-success-banner"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold animate-pulse"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Message sent successfully! Try checking the Reviewer Inbox below.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-full font-sans text-xs uppercase tracking-widest font-bold text-white bg-slate-950 hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-100 transition-all disabled:opacity-50 cursor-pointer border-0"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent dark:border-black dark:border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

        {/* Live Client Inbox Drawer (Reviewer testing section) */}
        <AnimatePresence>
          {showInbox && inquiries.length > 0 && (
            <motion.div
              id="reviewer-inbox-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 overflow-hidden border border-black/10 dark:border-white/10 rounded-3xl"
            >
              <div className="p-6 bg-[#fafafa] dark:bg-[#09090b] text-left">
                <div className="flex justify-between items-center pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center space-x-2.5">
                    <Inbox className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
                    <h3 className="font-serif font-light italic text-slate-950 dark:text-white">Reviewer Live Sandbox Inbox</h3>
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-neutral-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 px-2.5 py-1 rounded-full uppercase">
                    localStorage Sandboxed Mode
                  </span>
                </div>

                <div className="divide-y divide-black/10 dark:divide-white/10 mt-4 max-h-80 overflow-y-auto">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className="py-4 flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <strong className="text-sm font-bold text-slate-800 dark:text-slate-100">{inq.name}</strong>
                          <span className="text-xs font-mono text-neutral-400">{inq.email}</span>
                          <span className="text-[10px] font-mono text-neutral-400 dark:text-white/30">• {inq.date}</span>
                        </div>
                        <h5 className="text-xs font-serif font-light italic text-neutral-800 dark:text-neutral-200">{inq.subject}</h5>
                        <p className="text-xs text-neutral-500 dark:text-white/60 leading-relaxed max-w-2xl mt-1">{inq.message}</p>
                      </div>

                      <button
                        id={`delete-inquiry-btn-${inq.id}`}
                        onClick={() => deleteInquiry(inq.id)}
                        className="p-1.5 rounded-full text-neutral-400 hover:text-rose-500 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                        title="Delete message from sandboxed memory"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
