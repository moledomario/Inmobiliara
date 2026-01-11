'use client'

import { useRouter } from 'next/navigation';

export default function AboutUs() {
    const router = useRouter();
    const stats = [
        { number: '24+', label: 'Años de Experiencia' },
        { number: '5k+', label: 'Propiedades Vendidas' },
        { number: '120', label: 'Agentes Expertos' },
        { number: '15', label: 'Premios Nacionales' },
    ];

    const values = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
            ),
            title: 'Misión',
            description: 'Facilitar el proceso de compra-venta con integridad y profesionalismo, asegurando que cada cliente encuentre su espacio ideal.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
            title: 'Visión',
            description: 'Ser la agencia inmobiliaria de referencia nacional por nuestra calidad humana, innovación tecnológica y resultados excepcionales.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: 'Valores',
            description: 'Honestidad absoluta, compromiso con el cliente, innovación constante y trabajo en equipo son los pilares de nuestra cultura.',
        },
    ];

    const timeline = [
        {
            year: '2000',
            title: 'Fundación en 2000',
            description: 'Nuestros inicios en un pequeño local del centro, con el sueño de cambiar la industria.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            year: '2008',
            title: 'Primera oficina regional',
            description: 'Crecimiento local significativo y apertura de nuestra sede principal.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            year: '2015',
            title: 'Premio a la excelencia 2015',
            description: 'Reconocimiento de la industria inmobiliaria como la agencia de mayor crecimiento.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
        },
        {
            year: '2023',
            title: 'Expansión nacional 2023',
            description: 'Alcance en todo el país con más de 15 sucursales operativas.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="nosotros" className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[400px] overflow-hidden">
                <img
                    src="/nosotros-image.jpg"
                    alt="Oficina moderna"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-3xl px-4">
                        <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full mb-6">
                            NUESTRA HISTORIA
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Más que propiedades, construimos confianza
                        </h1>
                        <p className="text-lg text-gray-200">
                            Desde nuestros humildes comienzos hasta convertirnos en líderes del mercado,
                            nuestra pasión siempre ha sido conectar a las personas con el lugar al que llaman hogar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                {stat.number}
                            </div>
                            <p className="text-gray-600 text-sm md:text-base font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nuestra Misión y Valores
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Nos dedicamos a brindar un servicio transparente y de excelencia en cada transacción,
                        guiados por principios inquebrantables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nuestra Trayectoria
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                            <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Center Dot */}
                                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Comienza tu historia con nosotros
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Deja que nuestro equipo experto te ayude a encontrar tu propiedad ideal
                    </p>
                    <button onClick={() => router.push('/contacto')} className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                        Contactar con un agente
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}