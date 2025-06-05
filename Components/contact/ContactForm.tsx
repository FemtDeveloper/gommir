import emailjs from "@emailjs/browser";
import { Check } from "lucide-react";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSended, setMessageSended] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_o0bjz0u",
          "template_jkt2k9c",
          form.current,
          "user_8XX2XoAZbUrHIgxqEUopG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    form.current?.reset();
    setMessageSended(true);
    setTimeout(() => {
      setMessageSended(false);
    }, 2000);
  };
  return (
    <div className="flex justify-center w-full">
      <div className="contact-container container" id="contact">
        <h1>Contáctanos</h1>
        <form onSubmit={sendEmail} ref={form}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
          <label htmlFor="user-email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="user-email"
            className="form-control"
            required
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="form-control"
            required
          />

          <input
            type="submit"
            value={messageSended ? "¡ Mensaje Enviado !" : "Enviar"}
            disabled={messageSended ? true : false}
            className="btn"
          />
        </form>
      </div>
      {messageSended && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
          <Check size={20} />
          <span>¡Mensaje enviado exitosamente!</span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
