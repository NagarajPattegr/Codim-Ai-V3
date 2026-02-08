import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import BookDemoModal from '../../components/BookDemoModal';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';
import TermsConditionsModal from '../../components/TermsConditionsModal';
import Hero from '../../components/OurTech/Hero';
import ToolSection from '../../components/OurTech/ToolSection';
import { TOOLS } from '../../constants';

const OurTech: React.FC = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -10% 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-advanced').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white flex flex-col overflow-x-hidden">
            <Navbar onBookDemo={openBookModal} />

            <main className="flex-grow">
                <Hero />

                {/* Tool Sections */}
                <div className="relative">
                    {TOOLS.map((tool, index) => (
                        <ToolSection key={tool.id} tool={tool} index={index} onBookDemo={openBookModal} />
                    ))}
                </div>
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

export default OurTech;
