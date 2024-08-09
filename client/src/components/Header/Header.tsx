// Header.jsx
import React from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 z-50">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="text-xl font-bold">URL Shortener</div>
                <nav className="hidden lg:flex space-x-4">
                    <a href="#home" className="hover:text-gray-300">Home</a>
                    <a href="#features" className="hover:text-gray-300">Features</a>
                    <a href="#pricing" className="hover:text-gray-300">Pricing</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </nav>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute top-16 right-4 bg-white text-black p-4 rounded shadow-lg">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
                            <X className="h-6 w-6" />
                        </button>
                        <nav className="flex flex-col space-y-2 mt-2">
                            <a href="#home" onClick={toggleMenu}>Home</a>
                            <a href="#features" onClick={toggleMenu}>Features</a>
                            <a href="#pricing" onClick={toggleMenu}>Pricing</a>
                            <a href="#contact" onClick={toggleMenu}>Contact</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
