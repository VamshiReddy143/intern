import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TiUserAdd } from 'react-icons/ti';
import { IoTimeOutline } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';

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
        <h2 className="font-semibold text-lg text-gray-900">People you may know</h2>
        <p className="text-gray-500 text-xs">From your industry</p>
    </header>
);

// Person Item Component
const PersonItem = ({ person, index, connectionStatus, handleConnectClick }) => (
    <article className="flex items-start gap-2">
        <img
            src={person.avatar}
            className="h-10 w-10 rounded-full mt-1"
            alt={`${person.name} avatar`}
        />
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <h3 className="text-black font-semibold text-base">{person.name}</h3>
                <img src="/Icons/verified.svg" className="h-4 w-4" alt="Verified badge" />
            </div>
            <p className="text-sm w-[90%] line-clamp-2">{person.description}</p>
            <button
                className="border py-1 px-4 rounded-full flex items-center gap-2 w-fit mt-3"
                onClick={() => handleConnectClick(index)}
                disabled={connectionStatus[index]}
                aria-label={connectionStatus[index] ? `Connection pending with ${person.name}` : `Connect with ${person.name}`}
            >
                {connectionStatus[index] ? (
                    <>
                        <IconWrapper>
                            <IoTimeOutline size={20} className="text-gray-600" />
                        </IconWrapper>
                        Pending
                    </>
                ) : (
                    <>
                        <IconWrapper>
                            <TiUserAdd size={20} className="text-gray-600 " />
                        </IconWrapper>
                        Connect
                    </>
                )}
            </button>
        </div>
    </article>
);

const PeopleYoumayKnow = () => {
    const [connectionStatus, setConnectionStatus] = useState({});

    const playNotificationSound = () => {
        const audio = new Audio('/notifications/notification.mp3');
        audio.play().catch((error) => {
            console.error('Audio playback error:', error);
            toast.error('Failed to play notification sound', {
                position: 'top-right',
                duration: 3000,
                style: {
                    background: '#EF4444',
                    color: '#fff',
                    fontSize: '14px',
                    padding: '10px 20px',
                    borderRadius: '8px',
                },
            });
        });
    };

    const handleConnectClick = (index) => {
        setConnectionStatus((prev) => ({ ...prev, [index]: true }));
        toast.success('Connection sent', {
            position: 'top-right',
            duration: 3000,
            style: {
                background: '#4CAF50',
                color: '#fff',
                fontSize: '14px',
                padding: '10px 20px',
                borderRadius: '8px',
            },
        });
        playNotificationSound();
    };

    const people = [
        {
            name: 'Annkur Vaghasis',
            avatar: '/images/avatar3.jpg',
            description: 'Software Developer | passonate about Crafting new Technologies and many',
        },
        {
            name: 'Venkateshwarlu Doddi',
            avatar: '/images/avatar7.png',
            description: 'Angular | Frontend Developer',
        },
        {
            name: 'Nagavolu Ravi',
            avatar: '/images/avatar5.jpg',
            description: 'UI Developer @ the intersection of Design & Development',
        },
        {
            name: 'Tirupathi Reddy',
            avatar: '/images/avatar6.jpg',
            description: 'HTML 5 | CSS | Bootstrap | Java Script | Core Java | ReactJS',
        },
        {
            name: 'Ram Ydav',
            avatar: '/images/avatar4.jpg',
            description: 'Software Developer | passonate about Crafting new Technologies and many',
        },
    ];

    return (
        <section className="font-sans rounded-lg shadow-lg bg-white p-3 mt-5">
            <Helmet>
                <title>People You May Know | Professional Network</title>
                <meta
                    name="description"
                    content="Connect with professionals in your industry, including software developers, frontend developers, and UI designers."
                />
                <meta
                    name="keywords"
                    content="professional network, connect, software developer, frontend developer, UI designer"
                />
            </Helmet>
            <Toaster />
            <Header />
            <div className="pt-4 flex flex-col gap-5">
                {people.map((person, index) => (
                    <PersonItem
                        key={person.name}
                        person={person}
                        index={index}
                        connectionStatus={connectionStatus}
                        handleConnectClick={handleConnectClick}
                    />
                ))}
            </div>
        </section>
    );
};

export default PeopleYoumayKnow;