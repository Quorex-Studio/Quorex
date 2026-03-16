import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { contactInfo } from '../data/mock';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    console.log('Formulario:', form); // TODO: conectar a Supabase
    setSent(true);
    toast.success('¡Mensaje enviado! Te respondemos en menos de 24 horas.');
    setTimeout(() => { setForm({ name:'', email:'', service:'', message:'' }); setSent(false); }, 3500);
  };

  const services = ['E-Commerce','Sistema Administrativo','Landing Page','Página Corporativa','Catálogo Digital','API & Automatizaciones','Sistema de Reservas','Plataforma SaaS','Hosting & Soporte','Otro / Consultoría'];

  return (
    <section id="contacto" className="py-24 px-6 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{fontFamily:"'JetBrains Mono',monospace"}}>{'// 06 — Contacto'}</div>
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{fontFamily:"'Bebas Neue',sans-serif"}}>¿EMPEZAMOS?</h2>
          <p className="text-[#F0F1F5]/55 mt-3 max-w-md" style={{fontFamily:"'Outfit',sans-serif"}}>Cuéntanos tu idea. Respondemos en menos de 24 horas.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
          {/* Form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[{n:'name',t:'text',label:'Nombre',ph:'Tu nombre'},{n:'email',t:'email',label:'Email',ph:'tu@email.com'}].map(f=>(
                <div key={f.n} className="flex flex-col gap-1.5">
                  <label className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#F0F1F5]/45" style={{fontFamily:"'JetBrains Mono',monospace"}}>{f.label}</label>
                  <input name={f.n} type={f.t} required value={form[f.n]} onChange={onChange} placeholder={f.ph}
                    className="bg-[#0a0a0c] border border-[#F0F1F5]/10 text-[#F0F1F5] px-4 py-3 text-sm outline-none focus:border-[#6C63FF] transition-colors" style={{fontFamily:"'Outfit',sans-serif"}} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#F0F1F5]/45" style={{fontFamily:"'JetBrains Mono',monospace"}}>Tipo de proyecto</label>
              <select name="service" value={form.service} onChange={onChange}
                className="bg-[#0a0a0c] border border-[#F0F1F5]/10 text-[#F0F1F5]/80 px-4 py-3 text-sm outline-none focus:border-[#6C63FF] transition-colors appearance-none" style={{fontFamily:"'Outfit',sans-serif"}}>
                <option value="">Selecciona un servicio...</option>
                {services.map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[#F0F1F5]/45" style={{fontFamily:"'JetBrains Mono',monospace"}}>Mensaje</label>
              <textarea name="message" required rows={5} value={form.message} onChange={onChange} placeholder="Cuéntanos sobre tu proyecto..."
                className="bg-[#0a0a0c] border border-[#F0F1F5]/10 text-[#F0F1F5] px-4 py-3 text-sm outline-none focus:border-[#6C63FF] transition-colors resize-none" style={{fontFamily:"'Outfit',sans-serif"}} />
            </div>
            <button type="submit" disabled={sent}
              className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white font-semibold hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(108,99,255,0.4)] transition-all duration-300 disabled:opacity-60 hoverable" style={{fontFamily:"'Outfit',sans-serif"}}>
              {sent ? <><CheckCircle2 className="w-5 h-5" /> Enviado</> : <><Send className="w-4 h-4" /> Enviar mensaje</>}
            </button>
          </form>

          {/* Info */}
          <div className="flex flex-col gap-7">
            {[
              { label:'Email', icon:<Mail className="w-5 h-5 text-[#6C63FF]" />, value:contactInfo.email,  sub:'Respondemos en < 24 horas', color:'#6C63FF' },
              { label:'Teléfono', icon:<Phone className="w-5 h-5 text-[#FF6B6B]" />, value:contactInfo.phone, sub:'Lun–Vie · 9am – 7pm', color:'#FF6B6B' },
            ].map(i => (
              <div key={i.label} className="flex items-center gap-4 p-4 bg-[#0a0a0c] border border-[#F0F1F5]/08 hover:border-opacity-50 transition-colors group" style={{'--hc':i.color}}>
                <div className="w-11 h-11 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform" style={{background:`${i.color}18`}}>{i.icon}</div>
                <div>
                  <div className="text-xs text-[#F0F1F5]/40 mb-0.5" style={{fontFamily:"'JetBrains Mono',monospace"}}>{i.label}</div>
                  <div className="font-medium text-[#F0F1F5]" style={{fontFamily:"'Outfit',sans-serif"}}>{i.value}</div>
                  <div className="text-xs text-[#F0F1F5]/40 mt-0.5" style={{fontFamily:"'Outfit',sans-serif"}}>{i.sub}</div>
                </div>
              </div>
            ))}

            <div>
              <div className="text-xs font-mono tracking-[0.1em] uppercase text-[#F0F1F5]/40 mb-3" style={{fontFamily:"'JetBrains Mono',monospace"}}>Redes sociales</div>
              <div className="flex gap-2">
                {[
                  { href:contactInfo.social.github,   icon:<Github className="w-4 h-4" />,   c:'#6C63FF' },
                  { href:contactInfo.social.linkedin,  icon:<Linkedin className="w-4 h-4" />,  c:'#FF6B6B' },
                  { href:contactInfo.social.twitter,   icon:<Twitter className="w-4 h-4" />,   c:'#00E5A0' },
                ].map((s,i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 border border-[#F0F1F5]/10 flex items-center justify-center text-[#F0F1F5]/60 hover:text-white hover:border-opacity-60 hover:bg-opacity-10 transition-all duration-200 hoverable"
                    style={{'--sc':s.c}}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm" style={{fontFamily:"'Outfit',sans-serif"}}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5A0]"></span>
              </span>
              <span className="text-[#00E5A0] font-medium">Disponible para proyectos</span>
              <span className="text-[#F0F1F5]/40">— Freelance · Full time · Colaboración</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
