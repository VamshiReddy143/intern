import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaThumbsUp, FaHandsClapping, FaArrowRightLong, FaHeart, FaRegCommentDots } from 'react-icons/fa6';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Divider Component
const Divider = () => <div className="bg-gray-200 w-full h-[2px] mt-4 mb-6" />;

// Post Component
const Post = ({ post }) => (
    <article className="p-3">
        <header className="flex items-center gap-1">
            <p className="text-sm font-semibold text-gray-600">
                {post.author} <span className="text-xs text-gray-500">posted this</span>
            </p>
            <span className="text-sm">•</span>
            <p className="text-sm text-gray-600">{post.time}</p>
        </header>
        <div className="mt-2 flex gap-3">
            <img src={post.image} className="h-20 w-20 rounded-xl" alt={post.alt} />
            <p className="text-sm line-clamp-2">{post.content}</p>
        </div>
        <footer className="flex items-center justify-between mt-2">
            <div className="flex items-center">
                <div className="flex items-center -space-x-2">
                    <div className="bg-blue-100 rounded-full p-1">
                        <IconWrapper>
                            <FaThumbsUp
                                className="text-blue-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                aria-label="Like"
                            />
                        </IconWrapper>
                    </div>
                    <div className="bg-green-100 rounded-full p-1">
                        <IconWrapper>
                            <FaHandsClapping
                                className="text-green-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                aria-label="Celebrate"
                            />
                        </IconWrapper>
                    </div>
                </div>
                <p className="ml-2 text-sm text-gray-500">{post.likes}</p>
            </div>
            <p className="text-sm text-gray-600 hover:underline hover:text-blue-600 cursor-pointer">
                {post.comments} comment{post.comments !== 1 ? 's' : ''}
            </p>
        </footer>
    </article>
);

// Comment Component
const Comment = ({ data }) => (
    <article className="p-3">
        <header className="flex items-center gap-1">
            <p className="text-sm font-semibold text-gray-600">
                {data.author} <span className="text-xs text-gray-500">commented on a post</span>
            </p>
            <span className="text-sm">•</span>
            <p className="text-sm text-gray-600">{data.time}</p>
        </header>
        <p className="mt-2 text-sm text-gray-700">{data.content}</p>
    </article>
);

// Video Component
const Video = ({ video }) => (
    <article>
        <figure className="relative bg-black w-44 h-24 flex items-center justify-center rounded-xl">
            <img
                src={video.thumbnail}
                className="object-cover h-24 w-full"
                alt={video.alt}
            />
            <figcaption className="absolute top-3 right-3 text-white text-xs">{video.duration}</figcaption>
        </figure>
        <p className="text-xs line-clamp-2 leading-4 pt-1">{video.content}</p>
        <footer className="mt-1 flex items-center justify-between mr-10">
            <div className="flex items-center">
                <div className="flex items-center -space-x-2">
                    <div className="bg-green-100 rounded-full p-1">
                        <IconWrapper>
                            <FaHandsClapping
                                className="text-green-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                aria-label="Celebrate"
                            />
                        </IconWrapper>
                    </div>
                    <div className="bg-red-100 rounded-full p-1">
                        <IconWrapper>
                            <FaHeart
                                className="text-red-600 hover:scale-110 transition-transform cursor-pointer"
                                size={14}
                                aria-label="Like"
                            />
                        </IconWrapper>
                    </div>
                </div>
                <p className="ml-2 text-xs text-gray-500">{video.like}</p>
            </div>
            <div className="flex gap-1 items-center">
                <IconWrapper>
                    <FaRegCommentDots aria-label="Comments" size={14} className="text-gray-500" />
                </IconWrapper>
                <p className="text-xs text-gray-500">{video.comment}</p>
            </div>
        </footer>
    </article>
);

// Activity Header Component
const ActivityHeader = () => (
    <header className="p-3">
        <h2 className="font-semibold text-xl text-gray-900">Activity</h2>
        <p className="text-gray-500 text-xs">223,997 followers</p>
    </header>
);

// Activity Tabs Component
const ActivityTabs = ({ tabs, active, setActive }) => (
    <nav className="flex gap-2 items-center p-3" role="tablist">
        {tabs.map((tab) => (
            <button
                key={tab}
                className={`border rounded-full px-3 py-1 cursor-pointer text-sm ${
                    active === tab
                        ? 'border-green-700 bg-green-700 text-white hover:bg-green-800'
                        : 'border-gray-400 bg-white text-gray-800 hover:border-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setActive(tab)}
                role="tab"
                aria-selected={active === tab}
                aria-controls={`${tab.toLowerCase()}-panel`}
            >
                {tab}
            </button>
        ))}
    </nav>
);

// Activity Footer Component
const ActivityFooter = ({ type, onClick }) => (
    <footer className="hover:bg-gray-200 cursor-pointer w-full flex flex-col justify-center" onClick={onClick}>
        <div className="w-full h-[1px] bg-gray-300" />
        <div className="text-base flex items-center justify-center gap-2 w-full py-2">
            <p className="font-semibold text-center">Show all {type.toLowerCase()}</p>
            <IconWrapper>
                <FaArrowRightLong className="text-gray-600" aria-hidden="true" />
            </IconWrapper>
        </div>
    </footer>
);

const Activity = () => {
    const [active, setActive] = useState('Posts');
    const tabs = ['Posts', 'Comments', 'Videos', 'Images'];
    const data = {
        posts: [
            {
                id: 1,
                author: 'Vamshi Reddy',
                time: '2d',
                image: '/images/post1.jpg',
                alt: 'Post 1 image',
                content:
                    '🚀 A web app that checks if your email or password has been part of a public data breach. It uses the HaveIBeenPwned API to return real-time results. Includes a dashboard, live notifications, and optional email alerts.',
                likes: 20,
                comments: 1,
            },
            {
                id: 2,
                author: 'Vamshi Reddy',
                time: '3d',
                image: '/images/post2.jpg',
                alt: 'Post 2 image',
                content:
                    'A clone of Pinterest where users can create boards, upload pins (images), comment on posts, and view profiles. It includes a flash messages, session-based login, and a clean UI.',
                likes: 90,
                comments: 100,
            },
            {
                id: 3,
                author: 'Vamshi Reddy',
                time: '3d',
                image: '/images/post3.jpg',
                alt: 'Post 3 image',
                content:
                    'An interactive platform where users can practice aptitude topics like Time & Work, Pipes & Cisterns, Blood Relations, etc. Includes a “Next Level” button to gamify learning and track progress topic-wise.',
                likes: 200,
                comments: 50,
            },
        ],
        comments: [
            {
                id: 1,
                author: 'Vamshi Reddy',
                time: '3mo',
                content: 'Use Tips',
                likes: 5,
            },
            {
                id: 2,
                author: 'Vamshi Reddy',
                time: '4mo',
                content: 'Very helpful',
                likes: 10,
            },
        ],
        videos: [
            {
                id: 1,
                thumbnail: '/images/post1.jpg',
                alt: 'Video 1 thumbnail',
                duration: '1:26',
                content:
                    '🚀 A web app that checks if your email or password has been part of a public data breach. It uses the HaveIBeenPwned API to return real-time results. Includes a dashboard, live notifications, and optional email alerts.',
                like: 50,
                comment: 25,
            },
            {
                id: 2,
                thumbnail: '/images/post2.jpg',
                alt: 'Video 2 thumbnail',
                duration: '2:00',
                content:
                    'Excited to share my latest project that solves a real-world problem using modern tech. It’s been a journey of learning, failing, and improving — but the result was worth it!',
                like: 20,
                comment: 10,
            },
            {
                id: 3,
                thumbnail: '/images/post3.jpg',
                alt: 'Video 3 thumbnail',
                duration: '0:56',
                content:
                    'Thrilled to announce I’ve started a new role as [Role] at [Company]! Grateful for the support from my mentors and peers who helped make this happen.',
                like: 100,
                comment: 29,
            },
            {
                id: 4,
                thumbnail: '/images/post4.jpg',
                alt: 'Video 4 thumbnail',
                duration: '1:26',
                content:
                    'After weeks of deep-diving, I’ve finally wrapped up learning [Tech/Tool]! Built a complete project with it and learned a lot about scalability and performance.',
                like: 50,
                comment: 20,
            },
            {
                id: 5,
                thumbnail: '/images/post5.png',
                alt: 'Video 5 thumbnail',
                duration: '1:00',
                content:
                    'Hit 1000+ users on my app today! Thanks to everyone who supported, tested, and gave feedback. Now aiming for the next 10k!',
                like: 60,
                comment: 10,
            },
            {
                id: 6,
                thumbnail: '/images/post6.jpg',
                alt: 'Video 6 thumbnail',
                duration: '1:26',
                content:
                    'What started as a simple idea is now a working product — built with sleepless nights, debugging marathons, and pure love for building.',
                like: 200,
                comment: 5,
            },
            {
                id: 7,
                thumbnail: '/images/post7.jpg',
                alt: 'Video 7 thumbnail',
                duration: '1:26',
                content:
                    'Did you know you can speed up your web app using [Optimization Technique]? Just applied it and saw a 45% performance boost. Details in comments.',
                like: 77,
                comment: 99,
            },
            {
                id: 8,
                thumbnail: '/images/post8.jpg',
                alt: 'Video 8 thumbnail',
                duration: '1:26',
                content:
                    'While many were chilling, I spent my weekend building a full-stack feature from scratch. Here’s a sneak peek of what I did. Feedback welcome!',
                like: 50,
                comment: 20,
            },
        ],
    };

    const renderTabContent = () => {
        switch (active) {
            case 'Posts':
                return (
                    <div className="mt-4">
                        {data.posts.map((post) => (
                            <React.Fragment key={post.id}>
                                <Post post={post} />
                                <Divider />
                            </React.Fragment>
                        ))}
                        <ActivityFooter type="posts" onClick={() => console.log('Show all posts clicked')} />
                    </div>
                );
            case 'Comments':
                return (
                    <div className="mt-4">
                        {data.comments.map((comment) => (
                            <React.Fragment key={comment.id}>
                                <Comment data={comment} />
                                <Divider />
                            </React.Fragment>
                        ))}
                        <ActivityFooter type="comments" onClick={() => console.log('Show all comments clicked')} />
                    </div>
                );
            case 'Videos':
                return (
                    <div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-3">
                            {data.videos.map((video) => (
                                <Video key={video.id} video={video} />
                            ))}
                        </div>
                        <ActivityFooter type="videos" onClick={() => console.log('Show all videos clicked')} />
                    </div>
                );
            case 'Images':
                return <div className="mt-4 p-3">Images content coming soon</div>;
            default:
                return null;
        }
    };

    return (
        <section className="font-sans shadow-lg mt-3 border border-gray-300 bg-white rounded-lg">
            <Helmet>
                <title>Activity | {active}</title>
                <meta
                    name="description"
                    content={`View my ${active.toLowerCase()} including recent posts, comments, and videos showcasing projects and updates.`}
                />
                <meta
                    name="keywords"
                    content={`social media activity, ${active.toLowerCase()}, web development projects, professional updates`}
                />
            </Helmet>
            <ActivityHeader />
            <ActivityTabs tabs={tabs} active={active} setActive={setActive} />
            <div id={`${active.toLowerCase()}-panel`} role="tabpanel">
                {renderTabContent()}
            </div>
        </section>
    );
};

export default Activity;