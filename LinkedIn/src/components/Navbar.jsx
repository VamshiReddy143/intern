import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { GiSuitcase } from "react-icons/gi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const profileRef = useRef(null);
    const navbarRef = useRef(null);
    const searchRef = useRef(null);
    const searchInputRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleProfileClick = () => {
        setIsProfileModalOpen(true);
    };

    const handleSearchClick = () => {
        setIsSearchActive(true);
    };

    const handleCloseModal = () => {
        setIsProfileModalOpen(false);
    };

    const handleViewProfileClick = () => {
        navigate('/');
        setIsProfileModalOpen(false);
    };

    const handleClickOutside = (e) => {
        if (
            searchRef.current && !searchRef.current.contains(e.target) &&
            searchInputRef.current && !searchInputRef.current.contains(e.target)
        ) {
            setIsSearchActive(false);
        }
    };

    useEffect(() => {
        if (isSearchActive) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isSearchActive]);

    // Calculate modal position based on profileRef and navbarRef
    const [modalStyle, setModalStyle] = useState({});
    useEffect(() => {
        if (isProfileModalOpen && profileRef.current && navbarRef.current) {
            const rect = profileRef.current.getBoundingClientRect();
            const navbarRect = navbarRef.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setModalStyle({
                position: 'absolute',
                top: rect.bottom + scrollTop + 5 + 'px',
                left: rect.left + 'px',
                minWidth: '250px',
                maxWidth: '250px',
                zIndex: 51,
            });
        }
    }, [isProfileModalOpen]);

    // Calculate search input position below navbar
    const [searchStyle, setSearchStyle] = useState({});
    useEffect(() => {
        if (isSearchActive && navbarRef.current) {
            const navbarRect = navbarRef.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setSearchStyle({
                position: 'absolute',
                top: navbarRect.bottom + scrollTop + 'px',
                left: navbarRect.left + 'px',
                width: navbarRect.width + 'px',
                zIndex: 50,
            });
        }
    }, [isSearchActive]);

    const navItems = [
        { name: 'Home', icon: <IoHomeSharp size={20} />, path: '/home' },
        { name: 'My Network', icon: <MdPeopleAlt size={20} />, path: '/network' },
        { name: 'Jobs', icon: <GiSuitcase size={20} />, path: '/jobs' },
        { name: 'Messaging', icon: <BiSolidMessageRoundedDots size={20} className='hover:rotate-[360deg]' />, path: '/messaging' },
        { name: 'Notifications', icon: <FaBell size={20} />, path: '/notifications' },
        { 
            name: 'Me', 
            icon: (
                <div className='flex flex-col items-center'>
                    <img src='/images/profile.jpg' className='h-5 w-5 rounded-full' />
                    <div className='flex items-center'>
                        <p className='text-[12px]'>Me</p>
                        <img src='/Icons/arrowdown.svg' className='h-4 w-4' />
                    </div>
                </div>
            ), 
            path: '/' 
        },
    ];

    return (
        <div>
            {/* Small devices: Show search and settings icons */}
            <div className='flex md:hidden items-center justify-between bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] px-4 py-2 fixed top-0 left-0 right-0 z-50'>
                <div className='relative'>
                    <IoSearchSharp 
                        size={20} 
                        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className='w-full border rounded-full pl-10 pr-4 py-1 focus:outline-none'
                    />
                </div>
                <IoIosSettings size={24} className='text-black cursor-pointer hover:text-black' />
            </div>

            {/* Search input for small devices */}
            {isSearchActive && (
                <div className='md:hidden fixed top-[50px] left-0 right-0 bg-white px-4 py-2 z-50' ref={searchInputRef}>
                    <div className='relative'>
                        <IoSearchSharp 
                            size={20} 
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className='w-full border rounded-full pl-10 pr-4 py-1 focus:outline-none'
                        />
                    </div>
                </div>
            )}

            {/* Medium and larger devices: Full navbar */}
            <div ref={navbarRef} className='hidden md:flex items-center justify-between bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] pl-2 pr-2 relative'>
                <div className='flex items-center'>
                    <img src='/Icons/linkedinicon.svg' className='h-10 w-10' />
                    <div ref={searchRef} className='relative md:w-auto lg:w-full lg:max-w-xs'>
                        <IoSearchSharp 
                            size={20} 
                            className={`text-gray-400 cursor-pointer ${isSearchActive ? 'md:hidden' : 'md:ml-1'} lg:absolute lg:left-3 lg:top-1/2 lg:transform lg:-translate-y-1/2`}
                            onClick={handleSearchClick}
                        />
                        {!isSearchActive && (
                            <input
                                type="text"
                                placeholder="Search"
                                className='hidden lg:block w-full border rounded-full pl-10 pr-4 py-1 focus:outline-none'
                            />
                        )}
                    </div>
                </div>

                <div className={`flex items-center justify-between gap-3 ${isSearchActive ? 'md:hidden' : 'flex'}`}>
                    <div className='flex gap-7'>
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className='flex flex-col items-center cursor-pointer'
                                onClick={() => {
                                    if (item.name === 'Me') {
                                        handleProfileClick();
                                    } else {
                                        navigate(item.path);
                                    }
                                }}
                                ref={item.name === 'Me' ? profileRef : null}
                            >
                                <div className={`flex flex-col items-center ${location.pathname === item.path ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
                                    {item.icon}
                                    {item.name !== 'Me' && (
                                        <p className='text-[12px]'>{item.name}</p>
                                    )}
                                </div>
                                {location.pathname === item.path && item.name !== 'Me' && (
                                    <div className='h-[2px] w-full bg-black mt-1' />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className='h-[50px] w-[1px] bg-gray-300' />

                    <div className='flex gap-3 items-center'>
                        <div className='flex flex-col items-center'>
                            <TbGridDots size={20} className='cursor-pointer hover:text-black' />
                            <div className='flex items-center'>
                                <p className='text-[12px] cursor-pointer hover:text-black'>For Business</p>
                                <img src='/Icons/arrowdown.svg' className='h-4 w-4 cursor-pointer hover:text-black' />
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <img src='/Icons/premium.svg' className='h-7 w-7 cursor-pointer hover:text-black' />
                            <p className='text-[12px] cursor-pointer hover:text-black'>Try Premium for $0</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search input below navbar for medium devices */}
            {isSearchActive && (
                <div style={searchStyle} className='md:block hidden lg:hidden' ref={searchInputRef}>
                    <div className='relative'>
                        <IoSearchSharp 
                            size={20} 
                            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className='w-full border rounded-full pl-10 pr-4 py-1 focus:outline-none bg-white'
                        />
                    </div>
                </div>
            )}

            {isProfileModalOpen && (
                <div className="fixed inset-0 bg-black/30 flex items-start justify-center z-50" onClick={handleCloseModal}>
                    <div style={modalStyle} className="p-2 bg-white rounded-lg shadow-lg">
                        <div className='flex gap-2'>
                            <img src='/images/profile1.jpg' className='h-16 w-16 rounded-full' />
                            <div>
                                <h1 className='font-semibold'>Vamshi Reddy</h1>
                                <p className='text-[14px] text-gray-900 leading-[20px]'>
                                    Aspiring MERN Stack Developer | Building Scalable Web Applications | Open to Full-Stack Opportunities
                                </p>
                            </div>     
                        </div>

                        <div className='flex gap-2 mt-3'>
                            <div
                                className='border-2 px-3 rounded-full hover:bg-gray-300 border-[#0B66C2] text-[#0B66C2] font-semibold cursor-pointer'
                                onClick={handleViewProfileClick}
                            >
                                <p>View Profile</p>
                            </div>
                            <div className='border-2 px-3 rounded-full border-[#0B66C2] bg-[#0B66C2] text-white hover:bg-[#0B66C2] font-semibold cursor-pointer'>
                                <p>Verify</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;