import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import StickyBar from '../../components/StickyBar';
import BookDemoModal from '../../components/BookDemoModal';
import BlogList from '../../components/Articles/BlogList';
import BlogPostComponent from '../../components/Articles/BlogPost';
import { BLOG_POSTS } from '../../components/Articles/data';
import type { BlogPost } from '../../types';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PrivacyPolicyModal from '../../components/PrivacyPolicyModal';
import TermsConditionsModal from '../../components/TermsConditionsModal';

const Article: React.FC = () => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openBookModal = () => setIsBookModalOpen(true);
    const closeBookModal = () => setIsBookModalOpen(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    useEffect(() => {
        const slug = searchParams.get('p');
        if (slug) {
            const post = BLOG_POSTS.find(p => p.slug === slug);
            if (post) {
                setSelectedPost(post);
            } else {
                setSearchParams({});
            }
        } else {
            setSelectedPost(null);
        }
    }, [searchParams]);

    const handleReadMore = (slug: string) => {
        setSearchParams({ p: slug });
    };

    const handleBackToList = () => {
        setSearchParams({});
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-wispr-cream selection:bg-wispr-purple selection:text-white flex flex-col">
            <Navbar onBookDemo={openBookModal} />

            <main className="flex-grow pt-28">
                {selectedPost ? (
                    <BlogPostComponent
                        post={selectedPost}
                        onBack={handleBackToHome}
                        onBackToList={handleBackToList}
                    />
                ) : (
                    <BlogList
                        posts={BLOG_POSTS}
                        onReadMore={handleReadMore}
                        onBack={handleBackToHome}
                    />
                )}
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

export default Article;
