import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaCircleQuestion } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Link Column Component
const LinkColumn = ({ links, hasDropdown, dropdownIndex }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        if (hasDropdown) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <nav className="flex flex-col gap-2">
            {links.map((link, index) => (
                <div key={link.text} className={hasDropdown && index === dropdownIndex ? 'flex items-end gap-1' : ''}>
                    <a
                        href={link.href}
                        className="text-[12px] text-gray-600 cursor-pointer hover:text-[#0B66C2] hover:underline"
                        aria-label={link.ariaLabel}
                        onClick={hasDropdown && index === dropdownIndex ? handleDropdownClick : undefined}
                    >
                        {link.text}
                    </a>
                    {hasDropdown && index === dropdownIndex && (
                        <img
                            src="/Icons/arrowdown.svg"
                            className="h-4 w-4"
                            alt=""
                            aria-hidden="true"
                        />
                    )}
                </div>
            ))}
            {hasDropdown && isDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded p-2">
                    {/* Placeholder for dropdown content */}
                    <a href="#" className="text-[12px] text-gray-600 hover:text-[#0B66C2] hover:underline" aria-label="Privacy Policy">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-[12px] text-gray-600 hover:text-[#0B66C2] hover:underline mt-1" aria-label="Terms of Service">
                        Terms of Service
                    </a>
                </div>
            )}
        </nav>
    );
};

// Icon Link Component
const IconLink = ({ icon, title, text, href, ariaLabel }) => (
    <div className="flex items-start gap-1">
        <IconWrapper>
            {icon}
        </IconWrapper>
        <div>
            <h2 className="text-gray-600 text-[14px]">{title}</h2>
            <a
                href={href}
                className="text-[12px] text-gray-600 cursor-pointer hover:text-[#0B66C2] hover:underline"
                aria-label={ariaLabel}
            >
                {text}
            </a>
        </div>
    </div>
);

// Language Selector Component
const LanguageSelector = () => (
    <div>
        <label htmlFor="language-select" className="text-[12px] text-gray-600">Select language</label>
        <select
            id="language-select"
            className="text-[12px] border rounded-sm py-1 w-full focus:outline-black"
            aria-label="Select language"
        >
            <option value="en">English (English)</option>
            <option value="es">Spanish (Español)</option>
            <option value="fr">French (Français)</option>
            <option value="de">German (Deutsch)</option>
            <option value="zh">Chinese (中文)</option>
            <option value="ar">Arabic (العربية)</option>
            <option value="ja">Japanese (日本語)</option>
            <option value="ru">Russian (Русский)</option>
            <option value="pt">Portuguese (Português)</option>
            <option value="hi">Hindi (हिन्दी)</option>
            <option value="bn">Bengali (বাংলা)</option>
            <option value="ko">Korean (한국어)</option>
            <option value="it">Italian (Italiano)</option>
            <option value="nl">Dutch (Nederlands)</option>
            <option value="sv">Swedish (Svenska)</option>
            <option value="tr">Turkish (Türkçe)</option>
            <option value="pl">Polish (Polski)</option>
            <option value="th">Thai (ไทย)</option>
            <option value="vi">Vietnamese (Tiếng Việt)</option>
            <option value="he">Hebrew (עברית)</option>
        </select>
    </div>
);

const Footer = () => {
    const generalLinks = [
        { text: 'About', href: '#', ariaLabel: 'About LinkedIn' },
        { text: 'Professional Community Policies', href: '#', ariaLabel: 'Professional Community Policies' },
        { text: 'Privacy & Terms', href: '#', ariaLabel: 'Privacy and Terms' },
        { text: 'Sales Solutions', href: '#', ariaLabel: 'Sales Solutions' },
        { text: 'Safety Center', href: '#', ariaLabel: 'Safety Center' },
    ];

    const communityLinks = [
        { text: 'Accessibility', href: '#', ariaLabel: 'Accessibility information' },
        { text: 'Careers', href: '#', ariaLabel: 'Careers at LinkedIn' },
        { text: 'Ad Choices', href: '#', ariaLabel: 'Advertising choices' },
        { text: 'Mobile', href: '#', ariaLabel: 'LinkedIn mobile app' },
    ];

    const productLinks = [
        { text: 'Talent Solutions', href: '#', ariaLabel: 'Talent Solutions' },
        { text: 'Marketing Solutions', href: '#', ariaLabel: 'Marketing Solutions' },
        { text: 'Advertising', href: '#', ariaLabel: 'Advertising on LinkedIn' },
        { text: 'Small Business', href: '#', ariaLabel: 'Small Business solutions' },
    ];

    const iconLinks = [
        {
            icon: <FaCircleQuestion size={20} fill="#3D3D3C" />,
            title: 'Questions?',
            text: 'Visit our Help Center',
            href: '#',
            ariaLabel: 'Visit Help Center',
        },
        {
            icon: <IoMdSettings size={20} fill="#3D3D3C" />,
            title: 'Manage your account and privacy',
            text: 'Go to your settings',
            href: '#',
            ariaLabel: 'Go to account settings',
        },
        {
            icon: <MdOutlineSecurity size={20} fill="#3D3D3C" />,
            title: 'Recommendation transparency',
            text: 'Learn more about Recommended Content',
            href: '#',
            ariaLabel: 'Learn about recommendation transparency',
        },
    ];

    return (
        <footer className="font-sans md:flex hidden flex-wrap justify-between mt-5 p-3 gap-4">
            <Helmet>
                <title>LinkedIn Footer | Professional Network</title>
                <meta
                    name="description"
                    content="Access LinkedIn resources, including About, Privacy & Terms, Sales Solutions, Accessibility, Careers, and more."
                />
                <meta
                    name="keywords"
                    content="LinkedIn footer, professional network, privacy, accessibility, careers"
                />
            </Helmet>
            <LinkColumn links={generalLinks} hasDropdown={true} dropdownIndex={2} />
            <LinkColumn links={communityLinks} />
            <LinkColumn links={productLinks} />
            <div className="flex flex-col gap-2">
                {iconLinks.map((link) => (
                    <IconLink
                        key={link.title}
                        icon={link.icon}
                        title={link.title}
                        text={link.text}
                        href={link.href}
                        ariaLabel={link.ariaLabel}
                    />
                ))}
            </div>
            <LanguageSelector />
        </footer>
    );
};

export default Footer;