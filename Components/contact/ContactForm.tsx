import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ai6ql26",
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
  };
  return (
    <Grid2 display={"flex"} sx={{ justifyContent: "center" }}>
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

          <input type="submit" value="Send" className="btn" />
        </form>
        {/* {isActive && (
          <div className="emailSended">
            <p>Message sent</p>
          </div>
        )} */}
      </div>
    </Grid2>
  );
};

export default ContactForm;
