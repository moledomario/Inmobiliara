"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/propiedades", label: "Propiedades" },
    { href: "/contacto", label: "Contacto" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Determinar si la página actual tiene fondo blanco por defecto
    const isWhitePage = pathname === "/propiedades";

    // Establecer el estilo de texto base (blanco para Hero, negro para páginas blancas)
    // Pero si hay scroll, siempre usamos el estilo del header oscuro (texto blanco)
    const textColor = isScrolled
        ? "text-gray-100"
        : (isWhitePage ? "text-gray-800" : "text-gray-100");

    const hoverColor = isScrolled
        ? "hover:text-cyan-400"
        : (isWhitePage ? "hover:text-blue-600" : "hover:text-cyan-400");

    const activeTextColor = isScrolled
        ? "text-cyan-400"
        : (isWhitePage ? "text-blue-600" : "text-cyan-400");

    const accentBg = isScrolled
        ? "bg-cyan-400"
        : (isWhitePage ? "bg-blue-600" : "bg-cyan-400");

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/" className="relative hover:opacity-80 transition-opacity">
                        <Image
                            src="/creacion-blanco.png"
                            alt="Logo"
                            width={100}
                            height={40}
                            className={`object-contain transition-all duration-300 ${!isScrolled && isWhitePage ? "invert brightness-0" : ""
                                }`}
                            priority
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`${textColor} ${hoverColor} transition-colors font-medium relative group`}
                                >
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 h-0.5 ${accentBg} transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 transition-colors ${textColor} ${hoverColor}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-900 border-t border-cyan-500/20 animate-fade-in shadow-2xl">
                        <div className="py-6 flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className={`${isActive ? 'text-cyan-400 bg-gray-800' : 'text-gray-100'} hover:text-cyan-400 transition-colors font-medium py-2 px-4 hover:bg-gray-800 rounded mx-4`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
