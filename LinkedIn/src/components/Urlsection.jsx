import React from 'react';
import { Helmet } from 'react-helmet';
import { ImPencil } from 'react-icons/im';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// UrlSection Item Component
const UrlSectionItem = ({ title, content }) => (
    <article className="relative">
        <div className="flex flex-col">
            <h2 className="font-sans text-black text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{content}</p>
        </div>
        <button aria-label={`Edit ${title}`}>
            <IconWrapper>
                <ImPencil size={19} className="absolute right-2 top-2 text-gray-600" />
            </IconWrapper>
        </button>
    </article>
);

const Urlsection = () => {
    const sections = [
        {
            title: 'Profile language',
            content: 'English',
        },
        {
            title: 'Public profile & URL',
            content: 'www.linkedin.com/in/vamshi-r3ddyy',
        },
    ];

    return (
        <section className="font-sans md:flex hidden flex-col gap-5 bg-white rounded-lg shadow-lg p-3">
            <Helmet>
                <title>Profile Settings | Language & URL</title>
                <meta
                    name="description"
                    content="Manage your profile language and public profile URL for your professional presence."
                />
                <meta name="keywords" content="profile language, public profile URL, professional settings" />
            </Helmet>
            {sections.map((section) => (
                <UrlSectionItem
                    key={section.title}
                    title={section.title}
                    content={section.content}
                />
            ))}
        </section>
    );
};

export default Urlsection;