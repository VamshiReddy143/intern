import React from 'react';
import { Helmet } from 'react-helmet';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoPeople, IoSearchSharp } from 'react-icons/io5';
import { SiGoogleanalytics } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';

// Error Boundary for Icons
const IconWrapper = ({ children }) => {
    try {
        return children;
    } catch (error) {
        console.error('Icon rendering error:', error);
        return <span aria-hidden="true">⚠️</span>;
    }
};

// Analytics Header Component
const AnalyticsHeader = () => (
    <header className="p-3 border-b border-gray-300">
        <h2 className="font-semibold text-xl text-gray-900">Analytics</h2>
        <div className="flex items-center gap-1">
            <IconWrapper>
                <MdRemoveRedEye className="text-gray-600" size={16} />
            </IconWrapper>
            <p className="text-gray-500 text-xs">Private to you</p>
        </div>
    </header>
);

// Analytics Metric Component
const AnalyticsMetric = ({ icon: Icon, title, description, extra }) => (
    <article className="flex items-start gap-2">
        <IconWrapper>
            <Icon size={22} className="text-gray-600" />
        </IconWrapper>
        <div>
            <h3 className="font-semibold text-base text-gray-900">{title}</h3>
            <p className="text-sm text-gray-700">{description}</p>
            {extra && <p className="text-xs text-gray-500">{extra}</p>}
        </div>
    </article>
);

// Analytics Footer Component
const AnalyticsFooter = () => (
    <footer className="hover:bg-gray-200 cursor-pointer">
        <hr className="m-2 border-gray-300" />
        <div className="flex items-center justify-center gap-2 p-3">
            <p className="font-semibold text-base text-gray-900 text-center">Show all analytics</p>
            <IconWrapper>
                <FaArrowRightLong className="text-gray-600" size={16} />
            </IconWrapper>
        </div>
    </footer>
);

const Analytics = () => {
    const metrics = [
        {
            icon: IoPeople,
            title: '21 profile views',
            description: "Discover who's viewed your profile.",
        },
        {
            icon: SiGoogleanalytics,
            title: '500 post impressions',
            description: "Check out who's engaging with your posts.",
            extra: 'Past 10 days',
        },
        {
            icon: IoSearchSharp,
            title: '70 search appearances',
            description: 'See how often you appear in search results.',
        },
    ];

    return (
        <section className="font-sans shadow-lg mt-3 border border-gray-300 bg-white md:rounded-lg">
            <Helmet>
                <title>Profile Analytics | Professional Insights</title>
                <meta
                    name="description"
                    content="View analytics for profile views, post impressions, and search appearances to understand your professional reach."
                />
                <meta name="keywords" content="profile analytics, social media insights, professional metrics" />
            </Helmet>
            <AnalyticsHeader />
            <div className="p-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {metrics.map((metric, index) => (
                    <React.Fragment key={metric.title}>
                        <AnalyticsMetric
                            icon={metric.icon}
                            title={metric.title}
                            description={metric.description}
                            extra={metric.extra}
                        />
                        {index < metrics.length - 1 && (
                            <hr className="my-2 border-gray-300 md:hidden" />
                        )}
                    </React.Fragment>
                ))}
            </div>
            <AnalyticsFooter />
        </section>
    );
};

export default Analytics;