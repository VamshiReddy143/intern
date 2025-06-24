import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { IoAddSharp } from 'react-icons/io5';
import { ImPencil } from 'react-icons/im';
import { FaThumbsUp, FaHandsClapping, FaHeart } from 'react-icons/fa6';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Featured Header Component
const FeaturedHeader = () => (
    <header className="flex justify-between p-3">
        <h2 className="font-semibold text-xl text-gray-900">Featured</h2>
        <div className="flex items-center gap-5">
            <button aria-label="Add new featured post">
                <IconWrapper>
                    <IoAddSharp size={25} className="text-gray-600" />
                </IconWrapper>
            </button>
            <button aria-label="Edit featured posts">
                <IconWrapper>
                    <ImPencil size={20} className="text-gray-600" />
                </IconWrapper>
            </button>
        </div>
    </header>
);

// Featured Post Component
const FeaturedPost = ({ type, description, image, title, likes, comments }) => (
    <article className="w-[250px] shrink-0 border border-gray-300 rounded-lg p-2 snap-start">
        <p className="text-gray-500 text-xs">{type}</p>
        <p className="text-sm leading-4 line-clamp-2">{description}</p>
        <figure>
            <img
                src={image}
                alt={title}
                className="h-30 w-[250px] py-1 object-cover"
            />
            <figcaption className="font-semibold text-xs leading-4">{title}</figcaption>
        </figure>
        <div className="flex items-center gap-1 pt-1">
            <div className="flex items-center">
                <div className="flex items-center -space-x-2">
                    <div className="bg-blue-100 rounded-full p-1 border-2 border-white">
                        <IconWrapper>
                            <FaThumbsUp
                                className="text-blue-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                title="Like"
                            />
                        </IconWrapper>
                    </div>
                    <div className="bg-green-100 rounded-full p-1 border-2 border-white">
                        <IconWrapper>
                            <FaHandsClapping
                                className="text-green-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                title="Celebrate"
                            />
                        </IconWrapper>
                    </div>
                    <div className="bg-red-100 rounded-full p-1 border-2 border-white">
                        <IconWrapper>
                            <FaHeart
                                className="text-red-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                title="Love"
                            />
                        </IconWrapper>
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-600">{likes}</p>
            <p className="text-xs text-gray-600">•</p>
            <p className="text-sm text-gray-600">{comments} comments</p>
        </div>
    </article>
);

// Featured Carousel Component
const FeaturedCarousel = ({ posts, scrollRef, showLeftArrow, showRightArrow, scrollLeft, scrollRight }) => (
    <div className="relative">
        {showLeftArrow && (
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-2 text-white z-10 cursor-pointer"
                aria-label="Scroll left"
            >
                <IconWrapper>
                    <MdArrowBackIos size={16} />
                </IconWrapper>
            </button>
        )}
        <div
            ref={scrollRef}
            className="p-2 flex gap-4 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
        >
            {posts.map((post) => (
                <FeaturedPost
                    key={post.title}
                    type={post.type}
                    description={post.description}
                    image={post.image}
                    title={post.title}
                    likes={post.likes}
                    comments={post.comments}
                />
            ))}
        </div>
        {showRightArrow && (
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-2 text-white z-10 cursor-pointer"
                aria-label="Scroll right"
            >
                <IconWrapper>
                    <MdArrowForwardIos size={16} />
                </IconWrapper>
            </button>
        )}
    </div>
);

const Featured = () => {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollRef = useRef(null);
    const posts = [
        {
            type: 'Post',
            description:
                'A web app that checks if your email or password has been part of a public data breach. It uses the HaveIBeenPwned API to return real-time results. Includes a dashboard, live notifications, and optional email alerts.',
            image: '/images/post1.jpg',
            title: '100 Must do Leetcode questions',
            likes: 600,
            comments: 45,
        },
        {
            type: 'Post',
            description:
                'An end-to-end shopping platform with features like product listing, cart management, orders, and user sessions (without login). Supports category-based product browsing and a simple order placement animation.',
            image: '/images/post2.jpg',
            title: 'FileDrop – Simple File Sharing App',
            likes: 800,
            comments: 30,
        },
        {
            type: 'Post',
            description:
                'An interactive platform where users can practice aptitude topics like Time & Work, Pipes & Cisterns, Blood Relations, etc. Includes a “Next Level” button to gamify learning and track progress topic-wise.',
            image: '/images/post3.jpg',
            title: 'Aptitude Trainer Web App',
            likes: 100,
            comments: 20,
        },
        {
            type: 'Post',
            description:
                'A minimalist file-sharing app that lets users upload and download files with unique links. Includes file size restrictions and a dashboard to view shared files.',
            image: '/images/post4.jpg',
            title: 'VamshiKart – E-commerce App',
            likes: 400,
            comments: 40,
        },
        {
            type: 'Post',
            description:
                'A clone of Pinterest where users can create boards, upload pins (images), comment on posts, and view profiles. It includes flash messages, session-based login, and a clean UI.',
            image: '/images/post5.png',
            title: 'Data Breach Checker',
            likes: 900,
            comments: 10,
        },
    ];

    const checkScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollPosition();
        const handleScroll = () => checkScrollPosition();
        scrollRef.current?.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            scrollRef.current?.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -266, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 266, behavior: 'smooth' });
        }
    };

    return (
        <section className="font-sans shadow-lg mt-3 border border-gray-300 bg-white rounded-lg relative">
            <Helmet>
                <title>Featured Projects | Portfolio</title>
                <meta
                    name="description"
                    content="Explore my featured projects, including web apps for data breach checking, e-commerce, file sharing, and more."
                />
                <meta
                    name="keywords"
                    content="web development projects, MERN stack, e-commerce app, file sharing app, aptitude trainer"
                />
            </Helmet>
            <FeaturedHeader />
            <FeaturedCarousel
                posts={posts}
                scrollRef={scrollRef}
                showLeftArrow={showLeftArrow}
                showRightArrow={showRightArrow}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
            />
        </section>
    );
};

export default Featured;