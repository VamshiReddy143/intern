import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoDiamondOutline } from 'react-icons/io5';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// About Header Component
const AboutHeader = () => (
    <header className="border-b border-gray-300 pb-2">
        <h2 className="font-semibold text-xl text-gray-900">About</h2>
    </header>
);

// About Content Component
const AboutContent = ({ bio, showMore, toggleParagraph }) => (
    <article className="mt-2">
        <p
            className={`text-sm md:text-base text-gray-800 transition-all duration-300 ease-in-out ${
                showMore ? '' : 'line-clamp-4'
            } md:leading-[20px]`}
        >
            {bio}
        </p>
        <button
            onClick={toggleParagraph}
            className="mt-2 text-gray-400 text-sm font-medium hover:text-gray-600 focus:outline-none"
            aria-label={showMore ? 'Show less about information' : 'Show more about information'}
        >
            {showMore ? 'Show less' : 'Show more'}
        </button>
    </article>
);

// About Skills Component
const AboutSkills = ({ skills }) => (
    <article className="mt-2 border border-gray-300 rounded-lg p-2">
        <div className="flex items-start gap-2">
            <IconWrapper>
                <IoDiamondOutline size={20} className="mt-1 text-gray-700" />
            </IconWrapper>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h3 className="font-semibold text-base text-gray-900">Top skills</h3>
                    <p className="text-sm text-gray-700">{skills.join(' • ')}</p>
                </div>
                <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer">
                    <IconWrapper>
                        <FaArrowRightLong className="h-4 w-4 text-gray-600" />
                    </IconWrapper>
                </div>
            </div>
        </div>
    </article>
);

const About = () => {
    const [showMore, setShowMore] = useState(false);
    const [data] = useState({
        bio: `As a dedicated and innovative software developer with expertise in full-stack web development, I have a strong focus on crafting impactful applications using modern technologies. My passion lies in building user-friendly and secure solutions that blend aesthetic design with powerful functionality. With hands-on experience in MERN stack, Node.js, Express, and MongoDB, I excel in developing robust back-end systems and dynamic front-end interfaces, coupled with internal CSS and EJS templating.
I take pride in my project-based learning approach, where I have led the development of unique applications such as e-commerce platforms, social media apps, and real-time chatting systems. Additionally, I am skilled in managing authentication systems using Passport.js and JWT with role-based access control, ensuring user data security and seamless user experiences.
With a keen eye for detail and a commitment to writing clean, maintainable code, I am continually enhancing my skills in backend development, caching strategies, and session management. My journey is driven by a desire to turn innovative ideas into high-quality applications that solve real-world problems. I am now seeking to contribute my expertise and collaborative spirit to ambitious tech teams where I can grow and make a meaningful impact.`,
        skills: ['JavaScript', 'ReactJS', 'NodeJS', 'NextJS', 'MongoDB'],
    });

    const toggleParagraph = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="font-sans shadow-lg mt-3 border border-gray-300 bg-white rounded-lg p-3">
            <Helmet>
                <title>About | Professional Background</title>
                <meta
                    name="description"
                    content="Learn about my expertise in full-stack web development, including MERN stack, Node.js, and secure authentication systems."
                />
                <meta
                    name="keywords"
                    content="full-stack developer, MERN stack, JavaScript, ReactJS, NodeJS, MongoDB"
                />
            </Helmet>
            <AboutHeader />
            <AboutContent
                bio={data.bio}
                showMore={showMore}
                toggleParagraph={toggleParagraph}
            />
            <AboutSkills skills={data.skills} />
        </section>
    );
};

export default About;