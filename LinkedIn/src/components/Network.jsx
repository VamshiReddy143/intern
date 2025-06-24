import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { IoSearchSharp } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
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
const Header = ({ connectionCount, sortOption, handleSortChange, searchQuery, handleSearchChange }) => (
    <header>
        <h1 className="text-gray-800 text-xl font-semibold">{connectionCount} Connections</h1>
        <div className="lg:flex items-center justify-between w-full">
            <div className="flex items-center mt-2 md:mt-0">
                <p className="text-gray-500 text-sm">Sort by:</p>
                <select
                    className="text-gray-600 text-sm font-semibold ml-2 focus:outline-none"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option>Recently added</option>
                    <option>First name</option>
                    <option>Last name</option>
                </select>
            </div>
            <div className="flex items-center gap-4 md:mt-2 lg:mt-0">
                <div className="relative">
                    <IconWrapper>
                        <IoSearchSharp
                            size={20}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            aria-label="Search icon"
                        />
                    </IconWrapper>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="w-full border pl-10 pr-4 py-1 focus:outline-none rounded"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        aria-label="Search connections by name"
                    />
                </div>
                <button className="text-[#0B66C2] text-sm hover:underline cursor-pointer">
                    Search with filters
                </button>
            </div>
        </div>
    </header>
);

// Connection Item Component
const ConnectionItem = ({ connection, handleDotsClick, openModalId, modalStyle, handleRemoveConnection, dotsRefs }) => (
    <article className="pt-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <img
                    src={connection.image}
                    className="h-20 w-20 rounded-full object-cover"
                    alt={`${connection.firstName} ${connection.lastName} profile picture`}
                />
                <div className="flex flex-col leading-5">
                    <h2 className="text-black md:text-[17px] font-semibold">
                        {connection.firstName} {connection.lastName}
                    </h2>
                    <h3 className="text-gray-500 md:text-base text-sm font-semibold line-clamp-2">
                        {connection.jobTitle} at {connection.company}
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Connected {connection.connectedTime}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button
                    className="text-[#0b66c2] cursor-pointer px-4 py-1 rounded-full border border-[#0b66c2] hover:bg-gray-200 font-semibold hover:border-blue-600"
                    aria-label={`Message ${connection.firstName} ${connection.lastName}`}
                >
                    Message
                </button>
                <div
                    className="relative h-10 w-10 rounded-full hover:bg-gray-300 flex items-center justify-center cursor-pointer"
                    onClick={(e) => handleDotsClick(connection.id, e)}
                    ref={(el) => (dotsRefs.current[connection.id] = el)}
                    aria-label="More options"
                >
                    <IconWrapper>
                        <BsThreeDots size={20} />
                    </IconWrapper>
                </div>
            </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mt-2 mb-2" />
        {openModalId === connection.id && (
            <div
                style={modalStyle}
                className="bg-white rounded-lg shadow-lg p-2"
            >
                <button
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded w-full"
                    onClick={() => handleRemoveConnection(connection.id)}
                    aria-label={`Remove connection with ${connection.firstName} ${connection.lastName}`}
                >
                    <IconWrapper>
                        <FaTrash size={16} className="text-gray-500" />
                    </IconWrapper>
                    <span className="text-sm">Remove Connection</span>
                </button>
            </div>
        )}
    </article>
);

// Footer Component
const Footer = () => (
    <footer className="lg:w-[30%] md:w-[40%] p-5 text-center flex flex-col items-center">
        <div className="flex gap-2">
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">About</a>
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Accessibility</a>
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Help center</a>
        </div>
        <div className="flex gap-2 mt-2">
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Privacy & Terms</a>
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Ad Choices</a>
        </div>
        <div className="flex gap-2 mt-2">
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Advertising</a>
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Business Services</a>
        </div>
        <div className="flex gap-2 mt-2">
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">Get the LinkedIn App</a>
            <a href="#" className="text-gray-500 text-xs hover:underline hover:text-[#0b66c2] cursor-pointer">More</a>
        </div>
        <div className="flex items-center mt-2">
            <div className="flex items-center">
                <h2 className="text-sm font-bold text-[#0b66c2]">LINKED</h2>
                <img src="/Icons/linkedinicon.svg" className="h-5 w-5" alt="LinkedIn logo" />
            </div>
            <div className="text-xs ml-2">LinkedIn Corporation © 2025</div>
        </div>
    </footer>
);

const Network = () => {
    const [sortOption, setSortOption] = useState('Recently added');
    const [searchQuery, setSearchQuery] = useState('');
    const [removedConnections, setRemovedConnections] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);
    const [modalStyle, setModalStyle] = useState({});
    const dotsRefs = useRef({});

    const connectionsData = [
        {
            id: '1',
            firstName: 'Peeyush',
            lastName: 'Verma',
            jobTitle: 'Product Manager',
            company: 'Amazon',
            connectedTime: '13 minutes ago',
            image: '/connections/c1.jpg',
        },
        {
            id: '2',
            firstName: 'Sharath',
            lastName: 'Reddy',
            jobTitle: 'UX Designer',
            company: 'Microsoft',
            connectedTime: '1 hour ago',
            image: '/connections/c2.jpg',
        },
        {
            id: '3',
            firstName: 'Paul',
            lastName: 'Heymen',
            jobTitle: 'Frontend Developer',
            company: 'Zoho',
            connectedTime: '2 hours ago',
            image: '/connections/c3.jpg',
        },
        {
            id: '4',
            firstName: 'Rohan',
            lastName: 'Gupta',
            jobTitle: 'Software Engineer',
            company: 'Infosys',
            connectedTime: '1 day ago',
            image: '/connections/c4.jpg',
        },
        {
            id: '5',
            firstName: 'Neha',
            lastName: 'Desai',
            jobTitle: 'Data Scientist',
            company: 'Google',
            connectedTime: '2 days ago',
            image: '/connections/c5.jpg',
        },
        {
            id: '6',
            firstName: 'Arjun',
            lastName: 'Malhotra',
            jobTitle: 'DevOps Engineer',
            company: 'TCS',
            connectedTime: '3 days ago',
            image: '/connections/c6.jpg',
        },
        {
            id: '7',
            firstName: 'Karan',
            lastName: 'Mehta',
            jobTitle: 'Backend Developer',
            company: 'Wipro',
            connectedTime: '5 days ago',
            image: '/connections/c7.png',
        },
        {
            id: '8',
            firstName: 'Deepika',
            lastName: 'Joshi',
            jobTitle: 'AI Researcher',
            company: 'IBM',
            connectedTime: '1 week ago',
            image: '/connections/c8.jpg',
        },
    ];

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDotsClick = (id, e) => {
        setOpenModalId(openModalId === id ? null : id);
        const rect = e.currentTarget.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setModalStyle({
            position: 'absolute',
            top: `${rect.bottom + scrollTop + 5}px`,
            left: `${rect.left}px`,
            minWidth: '150px',
            zIndex: 50,
        });
    };

    const handleRemoveConnection = (id) => {
        setRemovedConnections([...removedConnections, id]);
        setOpenModalId(null);
        toast.success('Connection removed', {
            position: 'bottom-left',
            duration: 3000,
            style: {
                background: '#FFFFFF',
                color: '#666666',
                fontSize: '14px',
                padding: '10px 20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            },
        });
    };

    const sortedConnections = [...connectionsData].sort((a, b) => {
        if (sortOption === 'First name') {
            return a.firstName.localeCompare(b.firstName);
        } else if (sortOption === 'Last name') {
            return a.lastName.localeCompare(b.lastName);
        } else {
            // Recently added (default)
            const timeA = new Date(a.connectedTime);
            const timeB = new Date(b.connectedTime);
            return timeB - timeA; // Newest first
        }
    });

    const filteredConnections = sortedConnections
        .filter((connection) => !removedConnections.includes(connection.id))
        .filter((connection) =>
            `${connection.firstName} ${connection.lastName}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );

    return (
        <section className="font-sans md:flex gap-2 min-h-screen md:p-4 mt-10">
            <Helmet>
                <title>My Network | Connections</title>
                <meta
                    name="description"
                    content="Manage your professional connections, including product managers, UX designers, software engineers, and more."
                />
                <meta
                    name="keywords"
                    content="professional network, connections, product manager, UX designer, software engineer"
                />
            </Helmet>
            <Toaster />
            <div className="bg-white border-gray-500 lg:w-[70%] md:w-[60%] p-3">
                <Header
                    connectionCount={filteredConnections.length}
                    sortOption={sortOption}
                    handleSortChange={handleSortChange}
                    searchQuery={searchQuery}
                    handleSearchChange={handleSearchChange}
                />
                {filteredConnections.map((connection) => (
                    <ConnectionItem
                        key={connection.id}
                        connection={connection}
                        handleDotsClick={handleDotsClick}
                        openModalId={openModalId}
                        modalStyle={modalStyle}
                        handleRemoveConnection={handleRemoveConnection}
                        dotsRefs={dotsRefs}
                    />
                ))}
            </div>
            <Footer />
        </section>
    );
};

export default Network;