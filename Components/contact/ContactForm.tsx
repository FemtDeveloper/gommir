import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <>
      <div className="contact-container container" id="contact">
        <h1>Contact me</h1>
        <form onSubmit={sendEmail} ref={form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
          <label htmlFor="user-email">Email</label>
          <input
            type="email"
            id="email"
            name="user-email"
            className="form-control"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="form-control"
          />

          <input type="submit" value="Send" className="btn" />
        </form>
        {/* {isActive && (
          <div className="emailSended">
            <p>Message sent</p>
          </div>
        )} */}
      </div>
    </>
  );
};

export default ContactForm;
