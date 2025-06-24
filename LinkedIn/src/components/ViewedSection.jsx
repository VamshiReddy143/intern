import React from 'react';
import { Helmet } from 'react-helmet';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Header Component
const Header = () => (
    <header>
        <h2 className="font-semibold text-lg text-gray-900">Who your viewers also viewed</h2>
        <div className="flex gap-2 items-center">
            <IconWrapper>
                <MdRemoveRedEye fill="#666666" size={20} aria-label="Visibility" />
            </IconWrapper>
            <p className="text-gray-500 text-xs">Private to you</p>
        </div>
    </header>
);

// Viewer Item Component
const ViewerItem = ({ avatar, name, degree, role, buttonText, buttonStyle, isPremium }) => (
    <article className="flex items-start gap-2">
        <img
            src={avatar}
            className={`h-10 w-10 rounded-full mt-1 ${isPremium ? 'pb-2' : ''}`}
            alt={`${name} avatar`}
        />
        <div className="flex flex-col ">
            <div className="flex gap-2= items-center">
                <h3 className="text-black font-semibold text-base">{name}</h3>
                {degree && <p className="text-gray-500 text-sm">{degree}</p>}
            </div>
            <p className="text-sm w-[90%]">{role}</p>
            <button
                className={`py-1 px-4 rounded-full w-fit flex items-center gap-2 mt-3 font-semibold ${
                    isPremium ? 'bg-[#F8C77E]' : 'border border-gray-300'
                }`}
                aria-label={isPremium ? 'Try Premium' : `Message ${name}`}
            >
                {!isPremium && (
                    <IconWrapper>
                        <IoIosSend size={20} className="text-gray-600" />
                    </IconWrapper>
                )}
                {buttonText}
            </button>
        </div>
    </article>
);

const ViewedSection = () => {
    const viewers = [
        {
            avatar: '/images/avatar1.png',
            name: 'Annkur Vaghasis',
            degree: '1st',
            role: 'MERN Stack Developer',
            buttonText: 'Message',
            isPremium: false,
        },
        {
            avatar: '/images/avatar2.jpg',
            name: 'Eshwar Uppudi',
            degree: '2nd',
            role: 'Frontend developer at AppMinds',
            buttonText: 'Message',
            isPremium: false,
        },
        {
            avatar: '/Icons/key.svg',
            name: 'Unlock the full list',
            degree: null,
            role: 'See who else is often viewed alongside you',
            buttonText: 'Try Premium for $0',
            isPremium: true,
        },
    ];

    return (
        <section className="font-sans rounded-lg shadow-lg bg-white p-3 mt-5">
            <Helmet>
                <title>Viewers Also Viewed | Professional Network</title>
                <meta
                    name="description"
                    content="Discover professionals often viewed alongside you, including MERN stack and frontend developers."
                />
                <meta name="keywords" content="professional network, viewers also viewed, MERN stack, frontend developer" />
            </Helmet>
            <Header />
            <div className="pt-4 flex flex-col gap-5">
                {viewers.map((viewer) => (
                    <ViewerItem
                        key={viewer.name}
                        avatar={viewer.avatar}
                        name={viewer.name}
                        degree={viewer.degree}
                        role={viewer.role}
                        buttonText={viewer.buttonText}
                        isPremium={viewer.isPremium}
                    />
                ))}
            </div>
        </section>
    );
};

export default ViewedSection;