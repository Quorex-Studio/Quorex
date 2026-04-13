import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', budget: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', service: '', budget: '', details: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" aria-labelledby="contact-heading" className="py-32 relative bg-[#050507]">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-[#6C63FF]/05 to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Header & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#FF6B6B]"></div>
              <span className="font-mono text-[#FF6B6B] text-sm tracking-widest uppercase">{t('contact.tag')}</span>
            </div>

            <h2 id="contact-heading" className="font-bebas text-5xl md:text-7xl text-[#F0F1F5] tracking-wide mb-8 leading-[0.9]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {t('contact.title')}
            </h2>

            <p className="text-[#F0F1F5]/60 text-lg leading-relaxed mb-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#FF6B6B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F0F1F5]/40 tracking-widest uppercase mb-1">{t('contact.direct')}</div>
                  <a href="mailto:michael.rafael03@gmail.com" className="text-[#F0F1F5] font-semibold tracking-wide hover:text-[#FF6B6B] transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>michael.rafael03@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[#00E5A0]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#F0F1F5]/40 tracking-widest uppercase mb-1">{t('contact.location')}</div>
                  <div className="text-[#F0F1F5] font-semibold tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>{t('contact.location')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#0a0a0c] p-8 md:p-12 rounded-3xl border border-white/[0.04] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C63FF]/10 blur-[100px] pointer-events-none rounded-full" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-mono tracking-widest text-[#F0F1F5]/50 uppercase">Nombre</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      aria-required="true"
                      placeholder={t('contact.name_placeholder')}
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#050507] border border-white/[0.06] rounded-xl px-5 py-4 text-[#F0F1F5] placeholder:text-[#F0F1F5]/30 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-outfit"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-mono tracking-widest text-[#F0F1F5]/50 uppercase">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-required="true"
                      placeholder={t('contact.email_placeholder')}
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#050507] border border-white/[0.06] rounded-xl px-5 py-4 text-[#F0F1F5] placeholder:text-[#F0F1F5]/30 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-outfit"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-xs font-mono tracking-widest text-[#F0F1F5]/50 uppercase">Servicio</label>
                    <select
                      id="contact-service"
                      required
                      value={formState.service}
                      onChange={e => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-[#050507] border border-white/[0.06] rounded-xl px-5 py-4 text-[#F0F1F5] focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-outfit appearance-none"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      <option value="" disabled className="text-[#F0F1F5]/30">{t('contact.service_placeholder')}</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="dashboard">Dashboard / Admin</option>
                      <option value="landing">Landing Page</option>
                      <option value="saas">SaaS Development</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-budget" className="text-xs font-mono tracking-widest text-[#F0F1F5]/50 uppercase">Presupuesto</label>
                    <select
                      id="contact-budget"
                      required
                      value={formState.budget}
                      onChange={e => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-[#050507] border border-white/[0.06] rounded-xl px-5 py-4 text-[#F0F1F5] focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-outfit appearance-none"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      <option value="" disabled className="text-[#F0F1F5]/30">{t('contact.budget_placeholder')}</option>
                      <option value="<1k">Menos de $1k</option>
                      <option value="1k-3k">$1k - $3k</option>
                      <option value="3k-10k">$3k - $10k</option>
                      <option value=">10k">Más de $10k</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-details" className="text-xs font-mono tracking-widest text-[#F0F1F5]/50 uppercase">Detalles</label>
                  <textarea
                    id="contact-details"
                    required
                    rows="4"
                    placeholder={t('contact.details_placeholder')}
                    value={formState.details}
                    onChange={e => setFormState({ ...formState, details: e.target.value })}
                    className="w-full bg-[#050507] border border-white/[0.06] rounded-xl px-5 py-4 text-[#F0F1F5] placeholder:text-[#F0F1F5]/30 focus:outline-none focus:border-[#6C63FF]/50 transition-colors font-outfit resize-none"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting || submitted ? 'bg-[#232328] text-[#F0F1F5]/50 cursor-not-allowed border outline-transparent' : 'bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white hover:shadow-[0_10px_30px_rgba(108,99,255,0.4)] hover:-translate-y-1 hoverable'}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {isSubmitting ? 'Enviando...' : submitted ? 'Mensaje Enviado ✓' : t('contact.submit')}
                  {!isSubmitting && !submitted && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
