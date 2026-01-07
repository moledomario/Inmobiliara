'use client'

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        consultType: '',
        message: '',
        acceptPolicy: false,
    });

    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aqui iria la logica de envio
    };

    const faqs = [
        {
            question: 'Que documentos necesito para alquilar?',
            answer: 'Necesitas DNI, comprobante de ingresos, garantia propietaria o seguro de caucion, y referencias personales.',
        },
        {
            question: 'Como puedo agendar una visita?',
            answer: 'Puedes agendar una visita llamandonos, enviando un email o usando nuestro formulario de contacto. Te responderemos en menos de 24 horas.',
        },
        {
            question: 'Cual es la comision por venta?',
            answer: 'Nuestra comision varia segun el tipo de propiedad y el valor de la transaccion. Contactanos para una cotizacion personalizada.',
        },
    ];

    return (
        <section id="contacto" className="bg-gray-50">
            {/* Hero Header */}
            <div className="relative h-[350px] mb-16 overflow-hidden">
                <img
                    src="/contacto-img.jpg"
                    alt="Contacto"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Contactanos
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                            Estamos aqui para resolver tus dudas y ayudarte a encontrar la propiedad de tus suenos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Envianos un mensaje
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Tu nombre"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Correo electronico
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="ejemplo@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Telefono
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+34 600 000 000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Tipo de consulta
                                        </label>
                                        <select
                                            value={formData.consultType}
                                            onChange={(e) => setFormData({ ...formData, consultType: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                                        >
                                            <option value="">Selecciona una opcion</option>
                                            <option value="compra">Comprar propiedad</option>
                                            <option value="venta">Vender propiedad</option>
                                            <option value="alquiler">Alquilar propiedad</option>
                                            <option value="general">Informacion general</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        placeholder="En que podemos ayudarte?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        checked={formData.acceptPolicy}
                                        onChange={(e) => setFormData({ ...formData, acceptPolicy: e.target.checked })}
                                        required
                                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="text-sm text-gray-600">
                                        Acepto la politica de privacidad y el tratamiento de mis datos personales.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Enviar Consulta
                                </button>
                            </form>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Preguntas Frecuentes
                            </h2>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-medium text-gray-900">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openFaq === index && (
                                            <div className="px-4 pb-4 text-gray-600">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-6">
                        {/* WhatsApp Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Escribenos</h3>
                                    <p className="text-blue-600 font-medium mb-1">+34 912 345 678</p>
                                    <p className="text-sm text-gray-500">Atencion inmediata</p>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Escribenos</h3>
                                    <p className="text-blue-600 font-medium mb-1">info@inmobiliaria.com</p>
                                    <p className="text-sm text-gray-500">Respuesta en 24h</p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Visitanos</h3>
                                    <p className="text-gray-700 font-medium mb-1">Av. Principal 123, Madrid</p>
                                    <p className="text-sm text-gray-500">Parking gratuito clientes</p>
                                </div>
                            </div>
                        </div>

                        {/* Schedule Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <h3 className="font-bold text-gray-900 mb-3">Horario de Atencion</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Lun - Vie</span>
                                            <span className="text-gray-900 font-medium">9:00 - 18:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Sabados</span>
                                            <span className="text-gray-900 font-medium">10:00 - 14:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Siguenos en redes</h3>
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}