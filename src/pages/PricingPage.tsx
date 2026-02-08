import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import Pricing from '../../components/Pricing';
import BookDemoModal from '../../components/BookDemoModal';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';
import TermsConditionsModal from '../../components/TermsConditionsModal';

const PricingPage: React.FC = () => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);



    return (
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white flex flex-col">
            <Navbar onBookDemo={openBookModal} />

            <main className="flex-grow pt-28">
                {/* We use the existing Pricing component but wrapped in a page layout */}
                <Pricing theme="light" onBookDemo={openBookModal} />

                {/* Additional context for the pricing page if needed */}
                <section className="bg-wispr-dark py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center reveal-advanced active">
                        <h2 className="font-lander text-4xl md:text-6xl text-white mb-8">Ready to automate?</h2>
                        <p className="text-slate-400 text-xl font-sodo mb-12">
                            Join 50+ high-growth teams using CodimAI to scale their outbound infrastructure without adding headcount.
                        </p>
                        <button
                            onClick={openBookModal}
                            className="bg-wispr-purple text-wispr-dark px-10 py-5 rounded-2xl font-brand font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            Book a Strategy Call
                        </button>
                    </div>
                </section>
            </main>

            <div id="contact">
                <Footer onPrivacyClick={openPrivacyModal} onTermsClick={openTermsModal} />
            </div>
            <StickyBar onBookDemo={openBookModal} />
            <BookDemoModal open={isBookModalOpen} onClose={closeBookModal} />
            <PrivacyPolicyModal open={isPrivacyModalOpen} onClose={closePrivacyModal} />
            <TermsConditionsModal open={isTermsModalOpen} onClose={closeTermsModal} />
        </div>
    );
};

export default PricingPage;
