'use client'

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import Image from 'next/image';

import Link from 'next/link';
import { propiedades } from '../data/propiedades';

export default function Propiedades() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <PropiedadesContent />
        </Suspense>
    );
}

function PropiedadesContent() {
    const searchParams = useSearchParams();
    const [filterCategory, setFilterCategory] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filterParam = searchParams.get('filter');
        if (filterParam) {
            setFilterCategory(filterParam);
        }
    }, [searchParams]);
    // Datos cargados desde ../data/propiedades.js

    const filteredPropiedades = propiedades.filter(propiedad => {
        // Filter by text search
        const matchesSearch = propiedad.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            propiedad.ubicacion.toLowerCase().includes(searchTerm.toLowerCase());

        // Filter by category
        if (filterCategory === 'Todos') return matchesSearch;

        if (filterCategory === 'Casa en venta') {
            return matchesSearch && propiedad.tipo === 'En Venta' && propiedad.titulo.toLowerCase().includes('casa');
        }

        if (filterCategory === 'Alquiler') {
            return matchesSearch && propiedad.tipo === 'Alquiler';
        }

        if (filterCategory === 'Terreno') {
            return matchesSearch && propiedad.tipo === 'Terreno';
        }

        return matchesSearch;
    });

    const formatPrecio = (precio, tipo) => {
        const formatter = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        });

        if (tipo === 'Alquiler') {
            return `${formatter.format(precio)}/mes`;
        }
        if (tipo === 'Terreno') {
            return formatter.format(precio);
        }
        return formatter.format(precio);
    };

    return (
        <section id="propiedades" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Propiedades Destacadas
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra selección de propiedades exclusivas en las mejores ubicaciones
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-4xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                            {['Todos', 'Casa en venta', 'Alquiler', 'Terreno'].map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setFilterCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filterCategory === category
                                        ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Buscar por ubicación o título..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            />
                            <svg
                                className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPropiedades.map((propiedad) => (
                        <div
                            key={propiedad.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={propiedad.imagen}
                                    alt={propiedad.titulo}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Tipo Badge */}
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md ${propiedad.tipo === 'En Venta' ? 'bg-blue-500/90 text-white' :
                                            propiedad.tipo === 'Alquiler' ? 'bg-green-500/90 text-white' :
                                                'bg-purple-500/90 text-white'
                                            }`}
                                    >
                                        {propiedad.tipo}
                                    </span>
                                </div>
                                {/* Price Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-4 py-2 rounded-full text-lg font-bold bg-white/95 text-gray-900 backdrop-blur-md">
                                        {formatPrecio(propiedad.precio, propiedad.tipo)}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {propiedad.titulo}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center text-gray-600 mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm">{propiedad.ubicacion}</span>
                                </div>

                                {/* Features */}
                                <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                                    {/* Dormitorios */}
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{propiedad.dormitorios}</span>
                                    </div>

                                    {/* Baños */}
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{propiedad.banos}</span>
                                    </div>

                                    {/* Superficie */}
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{propiedad.superficie} m²</span>
                                    </div>
                                </div>

                                {/* Ver Más Button */}
                                <Link
                                    href={`/propiedades/${propiedad.id}`}
                                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    Ver más
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
