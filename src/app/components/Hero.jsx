'use client'

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function Hero() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (optionId) => {
        setSelectedOption(optionId);

        // Small delay to show selection effect before navigation
        setTimeout(() => {
            if (optionId === 'alquilar') {
                router.push('/propiedades?filter=Alquiler');
            } else if (optionId === 'vender') {
                router.push('/contacto');
            } else if (optionId === 'comprar') {
                router.push('/propiedades?filter=Casa en venta');
            }
        }, 300);
    };

    const options = [
        {
            id: 'alquilar',
            title: 'Alquilar Propiedad',
            description: 'Descubre apartamentos y casas en alquiler en las mejores zonas de la ciudad.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
        },
        {
            id: 'vender',
            title: 'Vender Propiedad',
            description: 'Obten la mejor valoracion de mercado y vende rapido con nuestros expertos.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            id: 'comprar',
            title: 'Comprar Propiedad',
            description: 'Encuentra la casa de tus suenos entre nuestra amplia seleccion de inmuebles exclusivos.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/casa-hero.jpg"
                        alt="hero-image"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>

                {/* Hero Content */}
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Encuentra tu hogar ideal donde crear recuerdos
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-8">
                                Miles de propiedades te esperan. Compra, vende o alquila con confianza y seguridad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Options Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Que deseas hacer hoy?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Te acompanamos en cada paso de tu proceso inmobiliario.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option.id)}
                                className={`group relative bg-white border-2 rounded-xl p-8 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedOption === option.id
                                    ? 'border-blue-500 shadow-lg'
                                    : 'border-gray-200 hover:border-blue-300'
                                    }`}
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${selectedOption === option.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-blue-50 text-blue-500 group-hover:bg-blue-100'
                                    }`}>
                                    {option.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {option.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {option.description}
                                </p>
                                <div className="flex items-center text-blue-500 font-medium">
                                    Ver mas
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <a href="/propiedades" className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg">
                            Ver todas las propiedades
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Spacing */}
            <div className="h-20" />
        </div>
    );
}