import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-[#050507] border-t border-white/[0.05] pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-[#6C63FF]/05 blur-[100px] rounded-t-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">

          <div className="text-center md:text-left">
            <h3 className="font-bebas text-4xl text-[#F0F1F5] tracking-widest mb-2" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>QUOREX <span className="text-[#FF6B6B]">STUDIO</span></h3>
            <p className="text-[#F0F1F5]/50 font-mono text-xs tracking-wider uppercase">{t('hero.tagline')}</p>
          </div>

          <div className="flex gap-4" role="list" aria-label="Redes sociales">
            {contactInfo.social.github && (
              <a href={contactInfo.social.github} aria-label="GitHub Profile de Quorex Studio" target="_blank" rel="noopener noreferrer" role="listitem" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#F0F1F5]/60 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.1] transition-all hoverable">
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
            {contactInfo.social.twitter && (
              <a href={contactInfo.social.twitter} aria-label="Twitter Profile de Quorex Studio" target="_blank" rel="noopener noreferrer" role="listitem" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#F0F1F5]/60 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 transition-all hoverable">
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
            {contactInfo.social.linkedin && (
              <a href={contactInfo.social.linkedin} aria-label="LinkedIn Profile de Quorex Studio" target="_blank" rel="noopener noreferrer" role="listitem" className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-[#F0F1F5]/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all hoverable">
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#F0F1F5]/40" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
          <div>&copy; {currentYear} Quorex Studio. {t('footer.rights')}</div>
          <div className="flex gap-6">
            <a href="#privacy" aria-label="Política de privacidad" className="hover:text-white transition-colors hoverable">Privacy Policy</a>
            <a href="#terms" aria-label="Términos de servicio" className="hover:text-white transition-colors hoverable">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
