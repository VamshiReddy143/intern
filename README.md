LinkedIn Clone
A professional, scalable, and SEO-friendly React application mimicking LinkedIn’s user interface and functionality. This project includes components for managing connections, displaying a footer with navigation links, and other LinkedIn-inspired features such as profile management, analytics, and networking tools. Built with modern web technologies, it ensures accessibility, responsiveness, and a polished user experience.
Table of Contents

Features
Technologies
Installation
Usage
Project Structure
Components
Testing
Troubleshooting
Contributing
License

Features

Connection Management: View, sort, search, and remove connections with a LinkedIn-style bottom-left toast notification (Network.jsx).
Footer Navigation: Semantic, accessible footer with categorized links and a language selector, styled like LinkedIn’s footer (Footer.jsx).
Scalability: Modular components (Network, Ascending, Footer, etc.) with dynamic data structures for easy extensibility.
SEO-Friendly: Uses react-helmet for meta tags and semantic HTML (<section>, <article>, <nav>, <footer>) for better search engine crawling.
Accessibility: Includes aria-label, alt attributes, and proper HTML semantics for screen reader compatibility.
Responsive Design: Tailwind CSS ensures layouts adapt across devices (e.g., md:flex hidden for mobile visibility).
Error Handling: IconWrapper component catches icon rendering issues for robust UI.
Placeholder Components: Support for profile, analytics, jobs, messaging, and more, designed for future expansion.

Technologies

React: 18.x for building component-based UI.
React Router DOM: 6.x for client-side routing.
Tailwind CSS: For responsive and utility-first styling.
React Icons: 5.x for icons (IoSearchSharp, BsThreeDots, FaTrash, FaCircleQuestion, IoMdSettings, MdOutlineSecurity).
React Hot Toast: 2.x for LinkedIn-style toast notifications.
React Helmet: 6.x for SEO meta tags.
Vite: For fast development and production builds.

Installation

Clone the repository:
git clone https://github.com/your-username/linkedin-clone.git
cd linkedin-clone


Install dependencies:
npm install

Required packages:
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-icons": "^5.0.0",
    "react-helmet": "^6.0.0",
    "react-hot-toast": "^2.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}


Ensure assets are in the public directory:

/Icons/linkedinicon.svg
/Icons/arrowdown.svg
/connections/*.jpg (e.g., c1.jpg, c2.jpg, ..., c8.jpg)


Run the development server:
npm run dev



Usage

Open the application in your browser (default: http://localhost:5173).
Navigate to:
/ for the Profile page.
/network for the Network page (connection management).
Other routes (e.g., /jobs, /messaging, /notifications) are placeholders.


Network Page:
View connections, sort by "Recently added", "First name", or "Last name".
Search connections by name.
Remove connections with a bottom-left toast notification ("Connection removed").


Footer:
Access links (e.g., "About", "Privacy & Terms", "Sales Solutions") with hover effects.
Click "Privacy & Terms" to toggle a dropdown (placeholder content).
Select a language from the dropdown (20+ languages supported).


Verify responsiveness (mobile hides footer, adjusts layout).

Project Structure
linkedin-clone/
├── public/
│   ├── Icons/
│   │   ├── linkedinicon.svg
│   │   ├── arrowdown.svg
│   ├── connections/
│   │   ├── c1.jpg
│   │   ├── c2.jpg
│   │   ├── ...
├── src/
│   ├── components/
│   │   ├── Network.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Analytics.jsx
│   │   ├── About.jsx
│   │   ├── Featured.jsx
│   │   ├── Activity.jsx
│   │   ├── Urlsection.jsx
│   │   ├── ViewedSection.jsx
│   │   ├── PeopleYoumayKnow.jsx
│   │   ├── Jobs.jsx
│   │   ├── Messaging.jsx
│   │   ├── Notifications.jsx
│   ├── sections/
│   │   ├── Leftsidebar.jsx
│   │   ├── Rightsidebar.jsx
│   ├── App.jsx
│   ├── index.jsx
├── package.json
├── vite.config.js
├── README.md

Components

Network.jsx (e40cad4f-53e8-42dd-b6ba-e2bae5d2e4cb):
Displays a list of connections with avatars, names, job titles, companies, and connection times.
Features sorting, searching, and removing connections with a bottom-left toast notification.
Uses react-hot-toast for notifications and react-helmet for SEO.
Includes IconWrapper for robust icon rendering (IoSearchSharp, BsThreeDots, FaTrash).


Footer.jsx (eb90e8e4-8310-41b6-92a2-14605beaba61):
Renders a LinkedIn-style footer with four link columns and a language selector.
Supports a Privacy & Terms dropdown (stubbed for future content).
Uses react-helmet for SEO and IconWrapper for icons (FaCircleQuestion, IoMdSettings, MdOutlineSecurity).


Other Components (placeholders):
App.jsx: Main entry point with routing (react-router-dom).
Navbar.jsx: Navigation bar with tabs (no "Me" underline) and "View Profile".
Profile.jsx: User profile display.
Analytics.jsx: User analytics dashboard.
About.jsx: Profile about section.
Featured.jsx: Featured content section.
Activity.jsx: User activity feed.
Urlsection.jsx: URL links section.
ViewedSection.jsx: Profile views section.
PeopleYoumayKnow.jsx: Suggested connections with notification sound on connect.
Leftsidebar.jsx: Left sidebar navigation.
Rightsidebar.jsx: Right sidebar content.
Jobs.jsx: Job listings (placeholder).
Messaging.jsx: Messaging interface (placeholder).
Notifications.jsx: Notifications feed (placeholder).



Testing

Network Page:
Navigate to /network.
Test sorting, searching, and removing connections.
Verify the toast notification appears in the bottom-left corner (react-hot-toast).
Check icons (IoSearchSharp, BsThreeDots, FaTrash) render correctly.


Footer:
Verify footer is hidden on mobile (<md breakpoint).
Check links hover in blue (#0B66C2) with underlines.
Test Privacy & Terms dropdown toggle.
Confirm icons (FaCircleQuestion, IoMdSettings, MdOutlineSecurity) and arrowdown.svg render.
Test language selector accessibility.


SEO:
Inspect page source (Ctrl+U) for <title>, <meta description>, <meta keywords>.
Optionally add JSON-LD to Network.jsx or Footer.jsx if icons are stable:<script type="application/ld+json">
    {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LinkedIn Clone',
        url: 'https://your-domain.com',
    })}
</script>




Accessibility:
Use a screen reader (NVDA, VoiceOver) to verify aria-label and semantic HTML.
Test keyboard navigation (Tab key) for links and inputs.


Integration:
Ensure Footer renders across routes (/, /network).
Verify Navbar has no "Me" underline and other components load correctly.



Troubleshooting

Icon Issues:
Check console for IconWrapper errors.
Test icons in isolation:import React from 'react';
import { Helmet } from 'react-helmet';
import { IoSearchSharp } from 'react-icons/io5';
import { BsThreeDots, FaTrash } from 'react-icons/bs';
import { FaCircleQuestion } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineSecurity } from 'react-icons/md';

const Test = () => (
    <div>
        <Helmet><title>Test</title></Helmet>
        <IoSearchSharp size={20} />
        <BsThreeDots size={20} />
        <FaTrash size={16} />
        <FaCircleQuestion size={20} />
        <IoMdSettings size={20} />
        <MdOutlineSecurity size={20} />
    </div>
);
export default Test;


Reinstall react-icons:npm install react-icons@5




Toast Issues:
Verify react-hot-toast:npm list react-hot-toast

Expected: react-hot-toast@2.x.Reinstall:npm install react-hot-toast@2


Ensure <Toaster /> is in Network.jsx.


Image Issues:
Verify assets:ls public/Icons/linkedinicon.svg public/Icons/arrowdown.svg public/connections/*.jpg


Add placeholder SVGs or update paths if missing.


Vite Cache:
Clear cache:rm -rf node_modules/.vite
npm install
npm run dev




Helmet Conflict:
Use react-helmet-async if issues persist:npm install react-helmet-async
npm uninstall react-helmet

Update imports:import { Helmet } from 'react-helmet-async';





Contributing

Fork the repository.
Create a feature branch:git checkout -b feature/your-feature


Commit changes:git commit -m "Add your feature"


Push to the branch:git push origin feature/your-feature


Open a pull request.

License
MIT License. See LICENSE for details.
