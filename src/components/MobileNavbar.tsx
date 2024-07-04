import React from 'react';

interface MobileNavbarProps {
    isOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, setIsMenuOpen }) => {
    const handleScroll = (sectionId: string) => {
        if (isOpen) setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-screen fixed top-0 z-20">
            <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
                <div className="ui-circle -ml-20 -mt-10" />

                <ul>
                    <li className="mb-5">
                        <button className="menu-item" onClick={() => handleScroll('hero')}>
                            Home
                        </button>
                    </li>
                    <li className="mb-5">
                        <button className="menu-item" onClick={() => handleScroll('skills')}>
                            Skills
                        </button>
                    </li>
                    <li className="mb-5">
                        <button className="menu-item" onClick={() => handleScroll('experience')}>
                            Work Experience
                        </button>
                    </li>
                    <li className="mb-5">
                        <button className="menu-item" onClick={() => handleScroll('about')}>
                            About Me
                        </button>
                    </li>
                </ul>

                <button
                    className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block"
                    onClick={() => handleScroll("contact")}
                >
                    Contact Us
                </button>
            </div>

            <div
                className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
                onClick={() => setIsMenuOpen(false)}
            />
        </div>
    );
}

export default MobileNavbar;
