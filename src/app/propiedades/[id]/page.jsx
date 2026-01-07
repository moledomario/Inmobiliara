'use client'

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { propiedades } from '../../data/propiedades';

export default function PropiedadDetalle({ params }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const id = parseInt(resolvedParams.id);
    const propiedad = propiedades.find(p => p.id === id);

    if (!propiedad) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Propiedad no encontrada</h1>
                    <Link href="/propiedades" className="text-blue-600 hover:underline">
                        Volver al listado
                    </Link>
                </div>
            </div>
        );
    }

    const formatPrecio = (precio, tipo) => {
        const formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });

        if (tipo === 'Alquiler') {
            return `${formatter.format(precio)}/mes`;
        }
        return formatter.format(precio);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link
                    href="/propiedades"
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a propiedades
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-100">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {propiedad.titulo}
                                </h1>
                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-lg">{propiedad.ubicacion}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-bold text-blue-600 mb-2">
                                    {formatPrecio(propiedad.precio, propiedad.tipo)}
                                </span>
                                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${propiedad.tipo === 'En Venta' ? 'bg-blue-100 text-blue-700' :
                                        propiedad.tipo === 'Alquiler' ? 'bg-green-100 text-green-700' :
                                            'bg-purple-100 text-purple-700'
                                    }`}>
                                    {propiedad.tipo}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Placeholder */}
                    <div className="relative h-[500px] bg-gray-200 group cursor-pointer">
                        <Image
                            src={propiedad.imagen}
                            alt={propiedad.titulo}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                                <span className="text-gray-900 font-semibold flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Ver todas las fotos
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Features Grid */}
                            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-2xl">
                                <div className="text-center p-4">
                                    <span className="block text-3xl font-bold text-gray-900 mb-1">{propiedad.dormitorios}</span>
                                    <span className="text-gray-500 text-sm">Dormitorios</span>
                                </div>
                                <div className="text-center p-4 border-l border-gray-200">
                                    <span className="block text-3xl font-bold text-gray-900 mb-1">{propiedad.banos}</span>
                                    <span className="text-gray-500 text-sm">Baños</span>
                                </div>
                                <div className="text-center p-4 border-l border-gray-200">
                                    <span className="block text-3xl font-bold text-gray-900 mb-1">{propiedad.superficie}</span>
                                    <span className="text-gray-500 text-sm">m² Totales</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                                <div className="prose max-w-none text-gray-600 space-y-4">
                                    <p>
                                        Esta espectacular propiedad ubicada en {propiedad.ubicacion} representa una oportunidad única.
                                        Con sus {propiedad.superficie} metros cuadrados, ofrece un espacio amplio y versátil ideal para
                                        {propiedad.tipo === 'Alquiler' ? 'vivir cómodamente' : 'tu nuevo hogar o inversión'}.
                                    </p>
                                    <p>
                                        Cuenta con {propiedad.dormitorios} dormitorios y {propiedad.banos} baños, diseñados para maximizar
                                        el confort y la funcionalidad. La distribución inteligente de los espacios permite una excelente
                                        iluminación natural durante todo el día.
                                    </p>
                                    <p>
                                        Ubicada en una zona estratégica, cercana a centros comerciales, parques y con excelentes accesos
                                        a transporte público. No pierdas la oportunidad de conocer esta increíble propiedad.
                                    </p>
                                </div>
                            </div>

                            {/* Additional Features List could go here */}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">¿Te interesa?</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="tu@email.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                        <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Tu teléfono" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                                        <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32 resize-none" placeholder={`Hola, me interesa ${propiedad.titulo}...`}></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                                        Contactar Vendedor
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
