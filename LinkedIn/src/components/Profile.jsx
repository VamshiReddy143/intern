
// import React, { useState } from 'react';
// import { ImPencil } from "react-icons/im";
// import { MdOutlineSecurity } from "react-icons/md";
// import { RiExternalLinkFill } from "react-icons/ri";
// import { IoCloseSharp } from "react-icons/io5";
// import { IoEye } from "react-icons/io5";
// import { IoCameraSharp } from "react-icons/io5";
// import { FaRegImage } from "react-icons/fa6";
// import { RiDeleteBin6Fill } from "react-icons/ri";

// const Profile = () => {
//     const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
//     const [isBgModalOpen, setIsBgModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [profileImage, setProfileImage] = useState("/images/profile1.jpg");
//     const [backgroundImage, setBackgroundImage] = useState("/images/bg.png");
//     const [newBgImage, setNewBgImage] = useState(null); // Temporary state for new background image
//     const [showToast, setShowToast] = useState(false);
//     const [name, setName] = useState("Vamshi");
//     const [lastname, setLastname] = useState("Reddy");
//     const [pronouns, setPronouns] = useState("He/Him");
//     const [headline, setHeadline] = useState("Aspiring MERN Stack Developer | Building Scalable Web Applications | Open to Full-Stack Opportunities");
//     const [country, setCountry] = useState("India");
//     const [city, setCity] = useState("Hyderabad");

//     const handleImageClick = () => {
//         setIsProfileModalOpen(true);
//     };

//     const handleBgPencilClick = () => {
//         setIsBgModalOpen(true);
//     };

//     const handleEditClick = () => {
//         setIsEditModalOpen(true);
//     };

//     const handleCloseProfileModal = () => {
//         setIsProfileModalOpen(false);
//     };

//     const handleCloseBgModal = () => {
//         setIsBgModalOpen(false);
//         setNewBgImage(null); // Reset new image when closing
//     };

//     const handleCloseEditModal = () => {
//         setIsEditModalOpen(false);
//     };

//     const handleAddPhotoClick = () => {
//         document.getElementById('profileFileInput').click();
//     };

//     const handleAddBgClick = () => {
//         document.getElementById('bgFileInput').click();
//     };

//     const handleProfileFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setProfileImage(reader.result);
//                 setShowToast(true);
//                 setTimeout(() => {
//                     setIsProfileModalOpen(false);
//                     setShowToast(false);
//                 }, 2000);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleBgFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setNewBgImage(reader.result); // Store new image temporarily
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleApplyBg = () => {
//         if (newBgImage) {
//             setBackgroundImage(newBgImage);
//             setShowToast(true);
//             setTimeout(() => {
//                 setIsBgModalOpen(false);
//                 setShowToast(false);
//                 setNewBgImage(null); // Reset after applying
//             }, 2000);
//         }
//     };

//     const handleDeleteClick = () => {
//         setProfileImage("/images/placeholder.jpg"); // Replace with your placeholder image path
//         setShowToast(true);
//         setTimeout(() => {
//             setIsProfileModalOpen(false);
//             setShowToast(false);
//         }, 2000);
//     };

//     const handleSaveEdit = () => {
//         setShowToast(true);
//         setTimeout(() => {
//             setIsEditModalOpen(false);
//             setShowToast(false);
//         }, 2000);
//     };

//     const handleOverlayClick = (e) => {
//         if (e.target === e.currentTarget) {
//             setIsProfileModalOpen(false);
//             setIsBgModalOpen(false);
//             setIsEditModalOpen(false);
//             setNewBgImage(null); // Reset new image on overlay click
//         }
//     };

//     return (
//         <div className='font-sans border-1 bg-white border-gray-300 pt-10 md:pt-0 rounded-lg'>
//             <div className="relative w-full">
//                 <div className='relative'>
//                     <img src={backgroundImage} className="w-full  md:h-40 h-30  lg:rounded-t-md" />
//                     <div className=''>
//                         <ImPencil size={5} fill='#004182' onClick={handleBgPencilClick} className="absolute right-5 top-5 bg-white p-1 rounded-full text-gray-700 shadow-md h-8 w-8 cursor-pointer" />
//                     </div>
//                 </div>
//                 <img
//                     src={profileImage}
//                     onClick={handleImageClick}
//                     className="rounded-full lg:h-40 lg:w-40 h-30 w-30 border-4 border-white absolute lg:left-1/9 left-1/5  lg:top-40 top-30 transform -translate-x-1/2 -translate-y-1/2 shadow-md object-cover cursor-pointer"
//                 />
//             </div>

//             <div className='md:pt-[5em] pt-[4em] relative flex items-start'>
//                 <div className="absolute top-3 right-3 cursor-pointer" onClick={handleEditClick}>

//                     <ImPencil size={20} />
//                 </div>
//                 <div className='p-3'>
//                     <div className=' relative'>
//                         <div className='flex items-center gap-1'>
//                             <h1 className='text-black font-semibold lg:text-[28px] text-[20px]'>{name} {lastname}</h1>
//                             <p className='text-gray-500 lg:text-[15px] text-[10px]'>{pronouns}</p>
//                             <div className='flex items-center p-1 rounded-full border border-dashed border-[#0B66C2] pl-2 pr-3 cursor-pointer'>
//                                 <MdOutlineSecurity size={20} fill='#0B66C2' />
//                                 <p className='text-[#0B66C2] lg:text-[15px] text-[12px]'>Add verification badge</p>
//                             </div>
//                         </div>
//                         <p className='text-black font-sans lg:text-[16px] text-[14px] line-clamp-2 lg:w-[70%]'>
//                             {headline}
//                         </p>
//                         <div className='flex items-center gap-1'>
//                             <p className='text-gray-500 lg:text-[15px] text-[13px]'>{city}, {country}</p>
//                             <h1 className='mb-2'>.</h1>
//                             <p className='lg:text-[16px] text-[13px] text-[#0B66C2] cursor-pointer'>Contact info</p>
//                         </div>
//                         <div className='flex items-center gap-2 pt-1 cursor-pointer'>
//                             <h3 className='text-[#0B66C2] lg:text-[15px] text-[13px] font-semibold'>MY PORTFOLIO</h3>
//                             <RiExternalLinkFill fill='#0B66C2' />
//                         </div>
//                         <p className='lg:text-[15px] text-[13px] text-[#0B66C2] font-semibold py-1 cursor-pointer'>500+ connections</p>
//                         <div className='pt-4 flex items-center gap-3'>
//                             <button className='rounded-full py-1 px-3 text-[16px] text-white bg-[#0B66C2] cursor-pointer font-semibold border border-[#0B66C2]'>Open to</button>
//                             <button className='rounded-full py-1 px-3 text-[16px] text-[#0B66C2] cursor-pointer font-semibold border border-[#0B66C2] hidden md:block'>Add profile section</button>
//                             <button className='rounded-full py-1 px-3 text-[16px] text-[#0B66C2] cursor-pointer font-semibold border border-[#0B66C2]'>Enhance profile</button>
//                             <button className='rounded-full py-1 px-3 text-[16px] text-gray-700 cursor-pointer font-semibold border border-gray-700 hidden lg:block'>Resources</button>
//                         </div>
//                     </div>
//                     <div className='md:flex gap-4 pt-6 lg:p-3 '>
//                         <div className='relative bg-[#DDE7F1] p-3 rounded-xl md:w-full lg:w-[50%] leading-[20px]'>
//                             <h1 className='font-semibold'>Open to work</h1>
//                             <h3 className='line-clamp-1'>Software Engineer,Web Developer,Frontend Developer</h3>
//                             <h3 className='text-[#0B66C2] font-semibold cursor-pointer'>Show details</h3>
//                             <ImPencil size={15} className='absolute right-3 top-4' />
//                         </div>
//                         <div className='relative md:hidden lg:block mt-2 lg:mt-0 border border-1 border p-3 rounded-xl border-gray-300 md:w-[50%] leading-[20px]'>
//                             <span className='w-[20%]'><h3 className='font-semibold inline mr-1'>Tell non-profit</h3>you're interested in getting involved with your time and skills</span>
//                             <h3 className='text-[#0B66C2] font-semibold cursor-pointer'>Get started</h3>
//                             <ImPencil size={15} className='absolute right-3 top-4' />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {isProfileModalOpen && (
//                 <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
//                     <div className="p-3 bg-[#1b1f23] text-white h-[550px] w-[700px] rounded-lg">
//                         <div className='flex items-center justify-between'>
//                             <h1 className='text-gray-100 text-[22px] font-400'>Profile photo</h1>
//                             <div onClick={handleCloseProfileModal} className='hover:bg-gray-700 rounded-full p-1 cursor-pointer'>
//                                 <IoCloseSharp size={30} />
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-center'>
//                             <img
//                                 src={profileImage}
//                                 alt="Profile"
//                                 className="rounded-full h-60 w-60 mt-7 flex justify-center items-center object-cover"
//                             />
//                         </div>
//                         <div className='flex items-center gap-2 border-2 border-gray-400 hover:border-gray-100 cursor-pointer w-fit px-3 py-1 rounded-full mt-4'>
//                             <IoEye className='text-gray-300' />
//                             <p className='text-gray-300'>Anyone</p>
//                         </div>
//                         <div className='w-full h-[1px] bg-gray-800 mt-3' />
//                         <div className='mt-3 flex items-center justify-between p-3'>
//                             <div className='flex items-center gap-7'>
//                                 <div className='flex flex-col gap-1 hover:bg-gray-600 cursor-pointer p-2 items-center'>
//                                     <ImPencil size={20} />
//                                     <p>Edit</p>
//                                 </div>
//                                 <div className='flex flex-col gap-1 hover:bg-gray-600 p-2 cursor-pointer items-center' onClick={handleAddPhotoClick}>
//                                     <IoCameraSharp size={20} />
//                                     <p>Add photo</p>
//                                 </div>
//                                 <div className='flex flex-col gap-1 hover:bg-gray-600 p-2 cursor-pointer items-center'>
//                                     <FaRegImage size={20} />
//                                     <p>Frames</p>
//                                 </div>
//                             </div>
//                             <div className='flex flex-col gap-1 hover:bg-gray-600 p-2 cursor-pointer items-center' onClick={handleDeleteClick}>
//                                 <RiDeleteBin6Fill size={20} />
//                                 <p>Delete</p>
//                             </div>
//                         </div>
//                         <input
//                             id="profileFileInput"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleProfileFileChange}
//                             className="hidden"
//                         />
//                     </div>
//                 </div>
//             )}

//             {isBgModalOpen && (
//                 <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
//                     <div className="p-3 bg-gray-200 text-black h-[550px] w-[700px] rounded-lg">
//                         <div className='flex items-center justify-between'>
//                             <h1 className='text-gray-900 text-[22px] font-semibold'>Cover image</h1>
//                             <div onClick={handleCloseBgModal} className='bg-gray-300 rounded-full p-1 cursor-pointer'>
//                                 <IoCloseSharp size={30} />
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-center bg-black pt-6 pb-10 mt-10'>
//                             <img
//                                 src={newBgImage || backgroundImage}
//                                 alt="Background"
//                                 className="w-full h-40 mt-7 object-cover"
//                             />
//                         </div>
//                         <div className='w-full h-[1px] bg-gray-800 mt-10' />
//                         <div className='mt-3 flex items-center justify-end p-3 gap-4'>
//                             <div className='border-2 px-3 py-1 rounded-full hover:bg-gray-300 border-[#0B66C2] text-[#0B66C2] font-semibold cursor-pointer' onClick={handleAddBgClick}>
//                                 <p>Change photo</p>
//                             </div>
//                             <div className='border-2 px-3 py-1 rounded-full border-[#0B66C2] bg-[#0B66C2] text-white hover:bg-[#0B66C2] font-semibold cursor-pointer' onClick={handleApplyBg}>
//                                 <p>Apply</p>
//                             </div>
//                         </div>
//                         <input
//                             id="bgFileInput"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleBgFileChange}
//                             className="hidden"
//                         />
//                     </div>
//                 </div>
//             )}

//             {isEditModalOpen && (
//                 <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
//                     <div className="p-4 bg-white w-[700px] rounded-lg shadow-lg" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
//                         <div className='flex items-center justify-between border-b pb-2'>
//                             <h1 className='text-[18px] font-semibold text-gray-900'>Edit intro</h1>
//                             <div onClick={handleCloseEditModal} className='cursor-pointer'>
//                                 <IoCloseSharp size={24} />
//                             </div>
//                         </div>
//                         <div className='mt-4'>
//                             <p className='text-[12px] text-gray-400'>*Indicates required</p>
//                             <div className='mt-2'>
//                                 <label className='block text-[13px] text-gray-500'>First name*</label>
//                                 <input
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className='p-1 w-full text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                                 />
//                             </div>
//                             <div className='mt-3'>
//                                 <label className='block text-[13px] text-gray-500'>Last name*</label>
//                                 <input
//                                     type="text"
//                                     value={lastname}
//                                     onChange={(e) => setLastname(e.target.value)}
//                                     className='p-1 w-full text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                                 />
//                             </div>
//                         </div>
//                         <div className='mt-4'>
//                             <div>
//                                 <p className='text-[12px] text-gray-400'>Name pronunciation</p>
//                             </div>
//                             <label className='block text-[13px] text-gray-500'>Pronouns*</label>
//                             <select
//                                 value={pronouns}
//                                 onChange={(e) => setPronouns(e.target.value)}
//                                 className='p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                             >
//                                 <option value="He/Him">He/Him</option>
//                                 <option value="She/Her">She/Her</option>
//                                 <option value="They/Them">They/Them</option>
//                             </select>
//                         </div>
//                         <div className='mt-4'>
//                             <label className='block text-[13px] text-gray-500'>Headline*</label>
//                             <textarea
//                                 value={headline}
//                                 onChange={(e) => setHeadline(e.target.value)}
//                                 className='p-2 w-full border border-gray-300 rounded-md  text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                             />
//                         </div>
//                         <div className='mt-4'>
//                             <h1 className="font-semibold text-[20px]">Location</h1>
//                             <div className='mt-4'>
//                                 <label className='block text-[13px] text-gray-500'>Country/Region*</label>
//                                 <input
//                                     type="text"
//                                     value={country}
//                                     onChange={(e) => setCountry(e.target.value)}
//                                     className='p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                                 />
//                             </div>
//                             <div className='mt-4'>
//                                 <label className='block text-[13px] text-gray-500'>City*</label>
//                                 <input
//                                     type="text"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                     className='p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]'
//                                 />
//                             </div>
//                         </div>
//                         <div className='mt-6 flex justify-end gap-2'>
//                             <button
//                                 onClick={handleCloseEditModal}
//                                 className='px-4 py-2 text-[#0B66C2] font-semibold rounded-md hover:bg-gray-100'
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 onClick={handleSaveEdit}
//                                 className='px-4 py-2 bg-[#0B66C2] text-white font-semibold rounded-full hover:bg-[#0B4A90]'
//                             >
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {showToast && (
//                 <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-slideIn">
//                     {isEditModalOpen ? "Profile updated successfully!" : "Image updated successfully!"}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Profile;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ImPencil } from 'react-icons/im';
import { MdOutlineSecurity } from 'react-icons/md';
import { RiExternalLinkFill } from 'react-icons/ri';
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
const Modal = ({ isOpen, onClose, children, maxWidth = 'max-w-3xl' }) => {
    if (!isOpen) return null;
    return (
        <div
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className={`w-full ${maxWidth} mx-4 rounded-lg`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

// Profile Header Component
const ProfileHeader = ({ profileData, backgroundImage, handleImageClick, handleBgPencilClick }) => (
    <header className="relative w-full md:mt-0 mt-13">
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
                href="https://3d-portfolio-vamshi.vercel.app/"
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
    handleShowToast,
}) => (
    <>
        <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} maxWidth="max-w-4xl">
            <div className="p-3 bg-[#1b1f23] text-white h-[550px] rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-gray-100 text-[22px] font-normal">Profile photo</h1>
                    <button
                        onClick={handleCloseProfileModal}
                        className="hover:bg-gray-700 rounded-full p-1"
                    >
                        <IconWrapper>
                            <IoCloseSharp size={30} />
                        </IconWrapper>
                    </button>
                </div>
                <div className="flex items-center justify-center mt-7">
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
                <hr className="w-full h-[1px] bg-gray-800 mt-3" />
                <div className="mt-3 flex items-center justify-between p-3">
                    <div className="flex items-center gap-7">
                        <button className="flex flex-col gap-1 hover:bg-gray-600 p-2 items-center rounded">
                            <IconWrapper>
                                <ImPencil size={20} />
                            </IconWrapper>
                            <span>Edit</span>
                        </button>
                        <button
                            onClick={handleAddPhotoClick}
                            className="flex flex-col gap-1 hover:bg-gray-600 p-2 items-center rounded"
                        >
                            <IconWrapper>
                                <IoCameraSharp size={20} />
                            </IconWrapper>
                            <span>Add photo</span>
                        </button>
                        <button className="flex flex-col gap-1 hover:bg-gray-600 p-2 items-center rounded">
                            <IconWrapper>
                                <FaRegImage size={20} />
                            </IconWrapper>
                            <span>Frames</span>
                        </button>
                    </div>
                    <button
                        onClick={() => {
                            handleDeleteClick();
                            handleShowToast();
                        }}
                        className="flex flex-col gap-1 hover:bg-gray-600 p-2 items-center rounded"
                    >
                        <IconWrapper>
                            <RiDeleteBin6Fill size={20} />
                        </IconWrapper>
                        <span>Delete</span>
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
                            reader.onloadend = () => {
                                profileData.setProfileImage(reader.result);
                                handleShowToast();
                            };
                            reader.readAsDataURL(file);
                        }
                    }}
                    className="hidden"
                />
            </div>
        </Modal>
        <Modal isOpen={isBgModalOpen} onClose={handleCloseBgModal} maxWidth="max-w-4xl">
            <div className="p-3 bg-gray-200 text-black h-[550px] rounded-lg">
                <div className="flex items-center justify-between">
                    <h1 className="text-gray-900 text-[22px] font-semibold">Cover image</h1>
                    <button
                        onClick={handleCloseBgModal}
                        className="bg-gray-300 rounded-full p-1"
                    >
                        <IconWrapper>
                            <IoCloseSharp size={30} />
                        </IconWrapper>
                    </button>
                </div>
                <div className="flex items-center justify-center bg-black pt-6 pb-10 mt-10">
                    <img
                        src={newBgImage || backgroundImage}
                        alt={`${profileData.name} ${profileData.lastname}'s background image`}
                        className="w-full h-40 object-cover"
                    />
                </div>
                <hr className="w-full h-[1px] bg-gray-800 mt-10" />
                <div className="mt-3 flex items-center justify-end p-3 gap-4">
                    <button
                        onClick={handleAddBgClick}
                        className="border-2 px-3 py-1 rounded-full hover:bg-gray-300 border-[#0B66C2] text-[#0B66C2] font-semibold"
                    >
                        Change photo
                    </button>
                    <button
                        onClick={() => {
                            handleApplyBg();
                            handleShowToast();
                        }}
                        className="border-2 px-3 py-1 rounded-full border-[#0B66C2] bg-[#0B66C2] text-white hover:bg-[#0B4A90] font-semibold"
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
const EditModal = ({ isOpen, onClose, profileData, handleSaveEdit, handleShowToast }) => (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
        <div className="p-4 bg-white rounded-lg shadow-lg" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="flex items-center justify-between border-b pb-2">
                <h1 className="text-[18px] font-semibold text-gray-900">Edit intro</h1>
                <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded">
                    <IconWrapper>
                        <IoCloseSharp size={24} />
                    </IconWrapper>
                </button>
            </div>
            <div className="mt-4 space-y-4">
                <p className="text-[12px] text-gray-400">* Indicates required</p>
                <div>
                    <label className="block text-[13px] text-gray-500">First name*</label>
                    <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => profileData.setName(e.target.value)}
                        className="p-1 w-full text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                        required
                    />
                </div>
                <div>
                    <label className="block text-[13px] text-gray-500">Last name*</label>
                    <input
                        type="text"
                        value={profileData.lastname}
                        onChange={(e) => profileData.setLastname(e.target.value)}
                        className="p-1 w-full text-[13px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                        required
                    />
                </div>
                <div>
                    <p className="text-[12px] text-gray-400">Name pronunciation</p>
                    <label className="block text-[13px] text-gray-500 mt-2">Pronouns*</label>
                    <select
                        value={profileData.pronouns}
                        onChange={(e) => profileData.setPronouns(e.target.value)}
                        className="p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                    >
                        <option value="He/Him">He/Him</option>
                        <option value="She/Her">She/Her</option>
                        <option value="They/Them">They/Them</option>
                    </select>
                </div>
                <div>
                    <label className="block text-[13px] text-gray-500">Headline*</label>
                    <textarea
                        value={profileData.headline}
                        onChange={(e) => profileData.setHeadline(e.target.value)}
                        className="p-2 w-full border border-gray-300 rounded-md text-[13px] focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                        rows={3}
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-[20px]">Location</h1>
                    <div className="mt-4">
                        <label className="block text-[13px] text-gray-500">Country/Region*</label>
                        <input
                            type="text"
                            value={profileData.country}
                            onChange={(e) => profileData.setCountry(e.target.value)}
                            className="p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-[13px] text-gray-500">City*</label>
                        <input
                            type="text"
                            value={profileData.city}
                            onChange={(e) => profileData.setCity(e.target.value)}
                            className="p-2 w-full border border-gray-300 text-[13px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B66C2]"
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
                        onClick={() => {
                            handleSaveEdit();
                            handleShowToast();
                        }}
                        className="px-4 py-2 bg-[#0B66C2] text-white font-semibold rounded-full hover:bg-[#0B4A90]"
                    >
                        Save
                    </button>
                </div>
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
        }
    };
    const handleDeleteClick = () => {
        updateProfileData({ profileImage: '/images/placeholder.jpg' });
    };
    const handleSaveEdit = () => {
        setIsEditModalOpen(false);
    };
    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
            setIsProfileModalOpen(false);
            setIsBgModalOpen(false);
            setIsEditModalOpen(false);
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
                <script type="application/ld+json">
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
                        url: 'https://3d-portfolio-vamshi.vercel.app/',
                    })}
                </script>
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
                    <article className="relative bg-[#DDE7F1] p-4 rounded-xl leading-[20px]">
                        <h2 className="font-semibold text-[15px]">Open to work</h2>
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
                    <article className="relative mt-4 md:mt-0 border border-gray-300 p-4 leading-[20px] rounded-xl hidden lg:block">
                        <h2 className="font-semibold text-[15px] inline mr-1">
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
                handleShowToast={handleShowToast}
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
                handleShowToast={handleShowToast}
            />
            <Toast
                show={showToast}
                message={isEditModalOpen ? 'Profile updated successfully!' : 'Image updated successfully!'}
            />
        </article>
    );
};

export default Profile;