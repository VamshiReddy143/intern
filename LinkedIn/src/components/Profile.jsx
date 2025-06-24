import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ImPencil } from 'react-icons/im';
import { MdOutlineSecurity } from 'react-icons/md';
import { RiExternalLinkFill } from 'react-icons/ri'; // Fixed: Changed RiExternalLink to RiExternalLinkFill
import { IoCloseSharp } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import { IoCameraSharp } from 'react-icons/io5';
import { FaRegImage } from 'react-icons/fa6';
import { RiDeleteBin6Fill } from 'react-icons/ri';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Reusable Modal Component
const Modal = ({ isOpen, onClose, title, children, maxWidth = 'lg:max-w-3xl' }) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className={`p-5 bg-white rounded-lg shadow-lg w-full ${maxWidth} mx-4`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full">
                        <IconWrapper>
                            <IoCloseSharp size={24} />
                        </IconWrapper>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

// Profile Header Component
const ProfileHeader = ({ profileData, backgroundImage, handleImageClick, handleBgPencilClick }) => (
    <header className="relative w-full">
        <div className="relative">
            <img
                src={backgroundImage}
                alt={`${profileData.name} ${profileData.lastname}'s background`}
                className="w-full md:h-40 h-24 lg:rounded-t-md object-cover"
            />
            <button
                onClick={handleBgPencilClick}
                className="absolute right-4 top-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                aria-label="Edit background image"
            >
                <IconWrapper>
                    <ImPencil size={16} className="text-[#004182]" />
                </IconWrapper>
            </button>
        </div>
        <img
            src={profileData.profileImage}
            alt={`${profileData.name} ${profileData.lastname}'s profile`}
            onClick={handleImageClick}
            className="rounded-full lg:h-36 lg:w-36 h-24 w-24 border-4 border-white absolute lg:left-10 left-6 lg:-bottom-16 -bottom-12 shadow-md object-cover cursor-pointer"
        />
    </header>
);

// Profile Info Component
const ProfileInfo = ({ profileData, handleEditClick, handleConnectionsClick }) => (
    <section className="md:pt-20 pt-16 px-4 relative">
        <button
            onClick={handleEditClick}
            className="absolute top-3 right-3 p-1 hover:bg-gray-200 rounded-full"
            aria-label="Edit profile"
        >
            <IconWrapper>
                <ImPencil size={20} />
            </IconWrapper>
        </button>
        <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-black font-semibold lg:text-2xl text-xl">
                    {profileData.name} {profileData.lastname}
                </h1>
                <span className="text-gray-500 text-sm">{profileData.pronouns}</span>
                <button
                    className="flex items-center gap-1 px-2 py-1 rounded-full border border-dashed border-[#0B66C2] text-[#0B66C2] text-sm hover:bg-blue-50"
                    aria-label="Add verification badge"
                >
                    <IconWrapper>
                        <MdOutlineSecurity size={16} />
                    </IconWrapper>
                    Add verification badge
                </button>
            </div>
            <p className="text-gray-800 text-base lg:w-2/3 line-clamp-2">{profileData.headline}</p>
            <div className="flex items-center gap-1 text-sm">
                <span className="text-gray-500">
                    {profileData.city}, {profileData.country}
                </span>
                <span className="text-gray-500">•</span>
                <button className="text-[#0B66C2] hover:underline">Contact info</button>
            </div>
            <a
                href="https://portfolio.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#0B66C2] text-sm font-semibold hover:underline"
            >
                MY PORTFOLIO
                <IconWrapper>
                    <RiExternalLinkFill size={16} />
                </IconWrapper>
            </a>
            <button
                onClick={handleConnectionsClick}
                className="text-[#0B66C2] text-sm font-semibold hover:underline"
            >
                500+ connections
            </button>
        </div>
    </section>
);

// Profile Actions Component
const ProfileActions = () => (
    <div className="px-4 pt-4 flex flex-wrap gap-2">
        <button className="rounded-full py-1 px-4 text-white bg-[#0B66C2] font-semibold border border-[#0B66C2] hover:bg-[#0B4A90]">
            Open to
        </button>
        <button className="rounded-full py-1 px-4 text-[#0B66C2] font-semibold border border-[#0B66C2] hover:bg-blue-50 hidden md:block">
            Add profile section
        </button>
        <button className="rounded-full py-1 px-4 text-[#0B66C2] font-semibold border border-[#0B66C2] hover:bg-blue-50">
            Enhance profile
        </button>
        <button className="rounded-full py-1 px-4 text-gray-700 font-semibold border border-gray-700 hover:bg-gray-100 hidden lg:block">
            Resources
        </button>
    </div>
);

// Profile Modals Component
const ProfileModals = ({
    isProfileModalOpen,
    isBgModalOpen,
    profileData,
    newBgImage,
    backgroundImage,
    handleCloseProfileModal,
    handleCloseBgModal,
    handleAddPhotoClick,
    handleAddBgClick,
    handleApplyBg,
    handleDeleteClick,
}) => (
    <>
        <Modal
            isOpen={isProfileModalOpen}
            onClose={handleCloseProfileModal}
            title="Profile Photo"
            maxWidth="max-w-4xl"
        >
            <div className="bg-[#1b1f23] text-white p-6 rounded-lg">
                <div className="flex justify-center">
                    <img
                        src={profileData.profileImage}
                        alt={`${profileData.name} ${profileData.lastname}'s profile photo`}
                        className="rounded-full h-60 w-60 object-cover"
                    />
                </div>
                <div className="flex items-center gap-2 border-2 border-gray-400 hover:border-gray-100 cursor-pointer w-fit px-3 py-1 rounded-full mt-4">
                    <IconWrapper>
                        <IoEye className="text-gray-300" />
                    </IconWrapper>
                    <span className="text-gray-300">Anyone</span>
                </div>
                <hr className="border-gray-800 my-3" />
                <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                        <button className="flex flex-col items-center gap-1 hover:bg-gray-600 p-2 rounded">
                            <IconWrapper>
                                <ImPencil size={20} />
                            </IconWrapper>
                            Edit
                        </button>
                        <button
                            onClick={handleAddPhotoClick}
                            className="flex flex-col items-center gap-1 hover:bg-gray-600 p-2 rounded"
                        >
                            <IconWrapper>
                                <IoCameraSharp size={20} />
                            </IconWrapper>
                            Add photo
                        </button>
                        <button className="flex flex-col items-center gap-1 hover:bg-gray-600 p-2 rounded">
                            <IconWrapper>
                                <FaRegImage size={20} />
                            </IconWrapper>
                            Frames
                        </button>
                    </div>
                    <button
                        onClick={handleDeleteClick}
                        className="flex flex-col items-center gap-1 hover:bg-gray-600 p-2 rounded"
                    >
                        <IconWrapper>
                            <RiDeleteBin6Fill size={20} />
                        </IconWrapper>
                        Delete
                    </button>
                </div>
                <input
                    id="profileFileInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => profileData.setProfileImage(reader.result);
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="hidden"
                />
            </div>
        </Modal>
        <Modal
            isOpen={isBgModalOpen}
            onClose={handleCloseBgModal}
            title="Cover Image"
            maxWidth="max-w-4xl"
        >
            <div className="bg-gray-200 text-black p-6 rounded-lg">
                <div className="flex justify-center bg-black py-6">
                    <img
                        src={newBgImage || backgroundImage}
                        alt={`${profileData.name} ${profileData.lastname}'s background image`}
                        className="w-full h-40 object-cover"
                    />
                </div>
                <hr className="border-gray-800 my-6" />
                <div className="flex justify-end gap-4">
                    <button
                        onClick={handleAddBgClick}
                        className="border-2 px-4 py-1 rounded-full hover:bg-gray-300 border-[#0B66C2] text-[#0B66C2] font-semibold"
                    >
                        Change photo
                    </button>
                    <button
                        onClick={handleApplyBg}
                        className="border-2 px-4 py-1 rounded-full bg-[#0B66C2] text-white hover:bg-[#0B4A90] font-semibold"
                    >
                        Apply
                    </button>
                </div>
                <input
                    id="bgFileInput"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => profileData.setNewBgImage(reader.result);
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="hidden"
                />
            </div>
        </Modal>
    </>
);

// Edit Modal Component
const EditModal = ({ isOpen, onClose, profileData, handleSaveEdit }) => (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Intro" maxWidth="max-w-2xl">
        <div className="space-y-4">
            <p className="text-xs text-gray-400">* Indicates required</p>
            <div>
                <label className="block text-sm text-gray-500">First name*</label>
                <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => profileData.setName(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                    required
                />
            </div>
            <div>
                <label className="block text-sm text-gray-500">Last name*</label>
                <input
                    type="text"
                    value={profileData.lastname}
                    onChange={(e) => profileData.setLastname(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                    required
                />
            </div>
            <div>
                <label className="block text-sm text-gray-500">Pronouns*</label>
                <select
                    value={profileData.pronouns}
                    onChange={(e) => profileData.setPronouns(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                >
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="They/Them">They/Them</option>
                </select>
            </div>
            <div>
                <label className="block text-sm text-gray-500">Headline*</label>
                <textarea
                    value={profileData.headline}
                    onChange={(e) => profileData.setHeadline(e.target.value)}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                    rows={3}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold">Location</h2>
                <div className="mt-2">
                    <label className="block text-sm text-gray-500">Country/Region*</label>
                    <input
                        type="text"
                        value={profileData.country}
                        onChange={(e) => profileData.setCountry(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                        required
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-500">City*</label>
                    <input
                        type="text"
                        value={profileData.city}
                        onChange={(e) => profileData.setCity(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                        required
                    />
                </div>
            </div>
            <div className="flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-[#0B66C2] font-semibold rounded-md hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSaveEdit}
                    className="px-4 py-2 bg-[#0B66C2] text-white font-semibold rounded-full hover:bg-[#0B4A90]"
                >
                    Save
                </button>
            </div>
        </div>
    </Modal>
);

// Toast Component
const Toast = ({ show, message }) => (
    show && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-slideIn">
            {message}
        </div>
    )
);

const Profile = () => {
    const [profileData, setProfileData] = useState({
        profileImage: '/images/profile1.jpg',
        backgroundImage: '/images/bg.png',
        newBgImage: null,
        name: 'Vamshi',
        lastname: 'Reddy',
        pronouns: 'He/Him',
        headline: 'Aspiring MERN Stack Developer | Building Scalable Web Applications | Open to Full-Stack Opportunities',
        country: 'India',
        city: 'Hyderabad',
    });
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isBgModalOpen, setIsBgModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();

    const updateProfileData = (updates) => {
        setProfileData((prev) => ({ ...prev, ...updates }));
    };

    const handleImageClick = () => setIsProfileModalOpen(true);
    const handleBgPencilClick = () => setIsBgModalOpen(true);
    const handleEditClick = () => setIsEditModalOpen(true);
    const handleConnectionsClick = () => navigate('/network');
    const handleCloseProfileModal = () => setIsProfileModalOpen(false);
    const handleCloseBgModal = () => {
        setIsBgModalOpen(false);
        updateProfileData({ newBgImage: null });
    };
    const handleCloseEditModal = () => setIsEditModalOpen(false);
    const handleAddPhotoClick = () =>
        document.getElementById('profileFileInput').click();
    const handleAddBgClick = () => document.getElementById('bgFileInput').click();
    const handleApplyBg = () => {
        if (profileData.newBgImage) {
            updateProfileData({ backgroundImage: profileData.newBgImage, newBgImage: null });
            setShowToast(true);
            setTimeout(() => {
                setIsBgModalOpen(false);
                setShowToast(false);
            }, 2000);
        }
    };
    const handleDeleteClick = () => {
        updateProfileData({ profileImage: '/images/placeholder.jpg' });
        setShowToast(true);
        setTimeout(() => {
            setIsProfileModalOpen(false);
            setShowToast(false);
        }, 2000);
    };
    const handleSaveEdit = () => {
        setShowToast(true);
        setTimeout(() => {
            setIsEditModalOpen(false);
            setShowToast(false);
        }, 2000);
    };

    return (
        <article className="font-sans bg-white border border-gray-300 rounded-lg">
            <Helmet>
                <title>{`${profileData.name} ${profileData.lastname} | Professional Profile`}</title>
                <meta
                    name="description"
                    content={`${profileData.headline} | Based in ${profileData.city}, ${profileData.country}`}
                />
                <meta name="keywords" content="MERN stack developer, web developer, full-stack developer, software engineer" />
                {/* Uncomment JSON-LD after confirming icons work */}
                {/* <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: `${profileData.name} ${profileData.lastname}`,
                        jobTitle: profileData.headline.split('|')[0].trim(),
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: profileData.city,
                            addressCountry: profileData.country,
                        },
                        url: 'https://portfolio.example.com',
                    })}
                </script> */}
            </Helmet>
            <ProfileHeader
                profileData={profileData}
                backgroundImage={profileData.backgroundImage}
                handleImageClick={handleImageClick}
                handleBgPencilClick={handleBgPencilClick}
            />
            <ProfileInfo
                profileData={{
                    ...profileData,
                    setName: (value) => updateProfileData({ name: value }),
                    setLastname: (value) => updateProfileData({ lastname: value }),
                    setPronouns: (value) => updateProfileData({ pronouns: value }),
                    setHeadline: (value) => updateProfileData({ headline: value }),
                    setCountry: (value) => updateProfileData({ country: value }),
                    setCity: (value) => updateProfileData({ city: value }),
                }}
                handleEditClick={handleEditClick}
                handleConnectionsClick={handleConnectionsClick}
            />
            <ProfileActions />
            <section className="px-4 pt-6 pb-4">
                <div className="md:grid md:grid-cols-2 gap-4">
                    <article className="relative bg-[#DDE7F1] p-4 rounded-xl">
                        <h2 className="font-semibold text-lg">Open to work</h2>
                        <p className="line-clamp-1 text-gray-800">
                            Software Engineer, Web Developer, Frontend Developer
                        </p>
                        <button className="text-[#0B66C2] font-semibold hover:underline">
                            Show details
                        </button>
                        <button
                            className="absolute right-3 top-3 p-1 hover:bg-gray-200 rounded"
                            aria-label="Edit open to work"
                        >
                            <IconWrapper>
                                <ImPencil size={15} />
                            </IconWrapper>
                        </button>
                    </article>
                    <article className="relative mt-4 md:mt-0 border border-gray-300 p-4 rounded-xl hidden lg:block">
                        <h2 className="font-semibold text-lg inline mr-1">
                            Tell non-profit
                        </h2>
                        <span className="text-gray-800">
                            you're interested in getting involved with your time and skills
                        </span>
                        <button className="text-[#0B66C2] font-semibold hover:underline block mt-1">
                            Get started
                        </button>
                        <button
                            className="absolute right-3 top-3 p-1 hover:bg-gray-200 rounded"
                            aria-label="Edit non-profit interest"
                        >
                            <IconWrapper>
                                <ImPencil size={15} />
                            </IconWrapper>
                        </button>
                    </article>
                </div>
            </section>
            <ProfileModals
                isProfileModalOpen={isProfileModalOpen}
                isBgModalOpen={isBgModalOpen}
                profileData={{
                    ...profileData,
                    setProfileImage: (value) => updateProfileData({ profileImage: value }),
                    setNewBgImage: (value) => updateProfileData({ newBgImage: value }),
                }}
                newBgImage={profileData.newBgImage}
                backgroundImage={profileData.backgroundImage}
                handleCloseProfileModal={handleCloseProfileModal}
                handleCloseBgModal={handleCloseBgModal}
                handleAddPhotoClick={handleAddPhotoClick}
                handleAddBgClick={handleAddBgClick}
                handleApplyBg={handleApplyBg}
                handleDeleteClick={handleDeleteClick}
            />
            <EditModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                profileData={{
                    ...profileData,
                    setName: (value) => updateProfileData({ name: value }),
                    setLastname: (value) => updateProfileData({ lastname: value }),
                    setPronouns: (value) => updateProfileData({ pronouns: value }),
                    setHeadline: (value) => updateProfileData({ headline: value }),
                    setCountry: (value) => updateProfileData({ country: value }),
                    setCity: (value) => updateProfileData({ city: value }),
                }}
                handleSaveEdit={handleSaveEdit}
            />
            <Toast
                show={showToast}
                message={isEditModalOpen ? 'Profile updated successfully!' : 'Image updated successfully!'}
            />
        </article>
    );
};

export default Profile;