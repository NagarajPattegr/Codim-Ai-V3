
import React, { useEffect, useMemo, useRef } from 'react';
import { X, Scale, Mail, MapPin } from 'lucide-react';

interface TermsConditionsModalProps {
    open: boolean;
    onClose: () => void;
}

const TermsConditionsModal: React.FC<TermsConditionsModalProps> = ({ open, onClose }) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    // Stable unique ids for accessibility.
    const ids = useMemo(
        () => ({
            title: `terms-modal-title-${Math.random().toString(16).slice(2)}`,
            desc: `terms-modal-desc-${Math.random().toString(16).slice(2)}`,
        }),
        []
    );

    useEffect(() => {
        if (!open) return;

        // Prevent background scroll while open.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
                return;
            }

            // Minimal focus trap.
            if (e.key === 'Tab') {
                const root = dialogRef.current;
                if (!root) return;

                const focusables = Array.from(
                    root.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                ).filter((el) => !el.hasAttribute('aria-hidden'));

                if (focusables.length === 0) return;

                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const active = document.activeElement as HTMLElement | null;

                if (e.shiftKey) {
                    if (!active || active === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
            role="presentation"
        >
            {/* Backdrop */}
            <button
                aria-label="Close terms and conditions modal"
                className="fixed inset-0 bg-wispr-dark/80 backdrop-blur-md cursor-pointer"
                onClick={onClose}
                type="button"
            />

            {/* Dialog */}
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={ids.title}
                aria-describedby={ids.desc}
                className="relative w-full max-w-4xl my-auto rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,0.5)] border border-white/10 max-h-[90vh] flex flex-col bg-white"
            >
                {/* Header */}
                {/* Header */}
                <div className="flex items-start justify-between gap-4 p-7 md:p-10 border-b border-slate-100 flex-shrink-0 bg-white relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-wispr-dark text-wispr-cream border border-white/5 shadow-xl">
                            <Scale size={14} className="text-wispr-purple" />
                            <span className="font-brand text-[10px] font-black uppercase tracking-[0.4em]">
                                Service Agreement
                            </span>
                        </div>

                        <h2
                            id={ids.title}
                            className="mt-6 font-lander text-3xl md:text-5xl font-bold tracking-tighter text-wispr-dark leading-tight"
                        >
                            Terms & Conditions
                        </h2>
                        <p id={ids.desc} className="mt-3 text-slate-500 font-brand text-[10px] uppercase tracking-widest font-black opacity-60">
                            Last updated: 1 August 2025
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-all active:scale-90 cursor-pointer z-[60]"
                        aria-label="Close"
                    >
                        <X size={20} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="p-8 md:p-12 overflow-y-auto flex-1 min-h-0 custom-scrollbar-light bg-[#fcfcfd]">
                    <div className="space-y-12 font-sodo text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto">
                        <section className="space-y-6">
                            <p>
                                These Terms & Conditions (“Terms”) govern your access to and use of the website
                                <strong> codimai.com</strong> and all related products, services, and applications
                                provided by <strong>CodimAi</strong> (“CodimAi”, “we”, “us”, or “our”).
                            </p>
                            <p className="p-8 bg-wispr-dark text-wispr-cream rounded-3xl border border-white/5 italic shadow-2xl">
                                By accessing or using our Services, you agree to be bound by these Terms.
                                <strong className="text-wispr-purple"> If you do not agree, do not use the Services.</strong>
                            </p>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Sections */}
                        {[
                            {
                                title: "1. Definitions",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                        <li><strong>Services:</strong> CodimAi website, web app, APIs, integrations, automation tools, chatbots, and related services.</li>
                                        <li><strong>User / You:</strong> Any person or entity using the Services.</li>
                                        <li><strong>Customer:</strong> A user who creates an account or pays for a CodimAi plan.</li>
                                        <li><strong>Content:</strong> Any data, text, files, or messages submitted or generated via the Services.</li>
                                        <li><strong>End-user:</strong> Any individual interacting with you through CodimAi-powered channels.</li>
                                    </ul>
                                )
                            },
                            {
                                title: "2. Eligibility",
                                content: (
                                    <p>You must be of legal age and have authority to enter into these Terms. By using the Services, you confirm that you meet these requirements.</p>
                                )
                            },
                            {
                                title: "3. Account Registration",
                                content: (
                                    <div className="space-y-4">
                                        <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                            <li>You must provide accurate and complete information.</li>
                                            <li>You are responsible for safeguarding your credentials.</li>
                                            <li>You must notify us of any unauthorized access.</li>
                                        </ul>
                                        <p>We may suspend or terminate accounts that violate these Terms or misuse the Services.</p>
                                    </div>
                                )
                            },
                            {
                                title: "4. Use of the Services",
                                content: (
                                    <div className="space-y-4">
                                        <p>You agree to comply with These Terms, Our Privacy Policy, and Applicable laws (data protection, spam, telecom, etc.)</p>
                                        <p className="font-bold text-wispr-dark">You must not:</p>
                                        <ol className="list-decimal pl-6 space-y-2 marker:text-wispr-purple marker:font-bold">
                                            <li>Use the Services for unlawful, harmful, or deceptive purposes.</li>
                                            <li>Send spam or unsolicited messages.</li>
                                            <li>Violate intellectual property or privacy rights.</li>
                                            <li>Attempt unauthorized access or security bypass.</li>
                                            <li>Reverse engineer or disrupt the platform.</li>
                                        </ol>
                                    </div>
                                )
                            },
                            {
                                title: "5. Customer Content & End-User Data",
                                content: (
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-wispr-dark">5.1 Your Responsibility</h5>
                                            <ul className="list-disc pl-6 space-y-1 marker:text-wispr-purple">
                                                <li>Ensuring lawful data collection and consent.</li>
                                                <li>Compliance with WhatsApp, marketing, and data laws.</li>
                                                <li>Ownership and legality of your Content.</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-3">
                                            <h5 className="font-bold text-wispr-dark">5.2 Our Role</h5>
                                            <p>CodimAi acts as a service provider / processor. You grant us a limited license to process your Content solely to provide the Services.</p>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "6. Plans, Fees & Payments",
                                content: (
                                    <ul className="list-disc pl-6 space-y-2 marker:text-wispr-purple">
                                        <li>Some features require paid subscriptions.</li>
                                        <li>Fees are billed in advance unless agreed otherwise.</li>
                                        <li>All fees are exclusive of applicable taxes.</li>
                                        <li>Payments are non-refundable unless explicitly stated.</li>
                                    </ul>
                                )
                            },
                            {
                                title: "9. Intellectual Property",
                                content: (
                                    <p>All rights to the Services belong to CodimAi. You receive a limited, revocable license for internal business use only.</p>
                                )
                            },
                            {
                                title: "15. Limitation of Liability",
                                content: (
                                    <p>CodimAi shall not be liable for indirect or consequential damages. Total liability is limited to fees paid in the three months preceding the claim.</p>
                                )
                            },
                            {
                                title: "18. Governing Law",
                                content: (
                                    <p>These Terms are governed by the laws of India. Courts of Mumbai, Maharashtra shall have exclusive jurisdiction.</p>
                                )
                            }
                        ].map((section, idx) => (
                            <React.Fragment key={idx}>
                                <section className="space-y-6">
                                    <h3 className="text-2xl font-lander font-bold text-wispr-dark">{section.title}</h3>
                                    {section.content}
                                </section>
                                <hr className="border-slate-200" />
                            </React.Fragment>
                        ))}

                        <section className="space-y-6">
                            <h3 className="text-2xl font-lander font-bold text-wispr-dark">20. Contact Us</h3>
                            <div className="bg-wispr-dark text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-wispr-purple/10 blur-3xl -z-10 group-hover:bg-wispr-purple/20 transition-all" />
                                <div className="space-y-4 relative z-10">
                                    <p className="flex items-center gap-3"><Mail className="text-wispr-purple" size={18} /> <strong>Email:</strong> <span className="break-all">legal@codimai.com, support@codimai.com</span></p>
                                    <div className="flex flex-col">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-wispr-purple mt-1" size={18} />
                                            <div className="flex flex-col">
                                                <strong>Address:</strong>
                                                <span className="opacity-70">CodimAi – Legal</span>
                                                <span className="opacity-70">PLT NO NANOTECHNOLOY CENTRE CTS NO 4094 G-Block, BKC, Bandra (E), Mumbai – 400055, Maharashtra, India</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsModal;
