import emailjs from "@emailjs/browser";
import { Check, Mail, MessageSquare, Send, User } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSended, setMessageSended] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_o0bjz0u",
          "template_jkt2k9c",
          form.current,
          "user_8XX2XoAZbUrHIgxqEUopG"
        );

        form.current.reset();
        setFormData({ name: "", email: "", message: "" });
        setMessageSended(true);

        setTimeout(() => {
          setMessageSended(false);
        }, 3000);
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <form onSubmit={sendEmail} ref={form} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="flex items-center text-sm font-medium text-gray-700 mb-2"
            >
              <User size={16} className="mr-2 text-blue-500" />
              Nombre Completo
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-md"
                placeholder="Ingrese su nombre completo"
                required
              />
              <User
                size={18}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-gray-700 mb-2"
            >
              <Mail size={16} className="mr-2 text-green-500" />
              Correo Electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="user-email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-md"
                placeholder="ejemplo@correo.com"
                required
              />
              <Mail
                size={18}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center text-sm font-medium text-gray-700 mb-2"
            >
              <MessageSquare size={16} className="mr-2 text-purple-500" />
              Mensaje
            </label>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-md resize-none"
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                required
              />
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading || messageSended}
              className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                messageSended
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              } ${
                isLoading ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </>
              ) : messageSended ? (
                <>
                  <Check size={20} />
                  <span>¡Mensaje Enviado!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar Mensaje</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Success Message */}
        {messageSended && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-up z-50">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Check size={18} />
            </div>
            <div>
              <p className="font-medium">¡Éxito!</p>
              <p className="text-sm text-green-100">
                Tu mensaje ha sido enviado correctamente
              </p>
            </div>
          </div>
        )}

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail size={20} className="text-blue-600" />
            </div>
            <p className="text-sm text-gray-600">Respuesta en</p>
            <p className="font-semibold text-gray-900">24 horas</p>
          </div>

          <div className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Check size={20} className="text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Soporte</p>
            <p className="font-semibold text-gray-900">Personalizado</p>
          </div>

          <div className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Send size={20} className="text-purple-600" />
            </div>
            <p className="text-sm text-gray-600">Consulta</p>
            <p className="font-semibold text-gray-900">Gratuita</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
