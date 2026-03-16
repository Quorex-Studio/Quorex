import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // 'loading' | 'unveiling' | 'done'
    const { t } = useLanguage();

    useEffect(() => {
        // Escala orgánica de progress hasta 100
        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setPhase('unveiling'), 500); // Pausa en 100%
                    return 100;
                }
                return Math.min(p + Math.random() * 25, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (phase === 'unveiling') {
            setTimeout(() => {
                setPhase('done');
                onComplete();
            }, 1000); // Desvanece la pantalla en 1s
        }
    }, [phase, onComplete]);

    if (phase === 'done') return null;

    return (
        <div
            className={`fixed inset-0 z-[99999] bg-[#050507] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${phase === 'unveiling' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
                }`}
        >
            {/* Mesh gradients sutiles en las esquinas */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6C63FF]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FF6B6B]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            {/* Marca de agua GIGANTE rellenándose junto con el progreso */}
            <div
                className="absolute inset-0 flex items-center justify-center text-[50vw] font-black leading-none bg-gradient-to-t from-[#6C63FF]/20 to-[#FF6B6B]/5 bg-clip-text text-transparent pointer-events-none select-none transition-all duration-300"
                style={{
                    fontFamily: "'Bebas Neue',sans-serif",
                    clipPath: `inset(${100 - progress}% 0 0 0)`,
                }}
            >
                Q
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Typographic Counter */}
                <div className="text-[clamp(5rem,15vw,12rem)] font-black text-[#F0F1F5] leading-none drop-shadow-[0_0_25px_rgba(240,241,245,0.15)] tabular-nums" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
                    {Math.floor(progress)}<span className="text-[#6C63FF]">.</span>
                </div>

                {/* Loading text with animated dots */}
                <div className="flex items-center gap-3">
                    <div className="text-xs uppercase tracking-[0.4em] font-bold text-[#F0F1F5]/60" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                        {t('preloader.connecting')}
                    </div>
                    <div className="flex gap-1.5">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-[#FF6B6B]' : 'bg-[#00E5A0]'} animate-bounce`}
                                style={{ animationDelay: `${i * 150}ms`, animationDuration: '1s' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
