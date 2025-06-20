import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForms = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = `El campo 'Nombre' es requerido`;
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = `El campo 'Email' es requerido`;
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = `El campo 'Asunto a tratar' es requerido`;
  }

  if (!form.comments.trim()) {
    errors.comments = `El campo 'Comentarios' es requerido`;
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'Comentarios' solo acpeta 255 caracteres";
  }

  return errors;
};

let styles = {
  fontFamily: "Inter",
  fontWeight: "'Inter', sans-serif",
  fontSize: "10px",
  color: "#fff",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForms);

  return (
    <>
      <section className="layout-secc contact-f" id="contact">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="contact">
          <h3>Nombre</h3>
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p style={styles}>{errors.name}</p>}
          <h3>Correo</h3>
          <input
            type="email"
            name="email"
            placeholder="Escribe tu email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p style={styles}>{errors.email}</p>}
          <h3>Asunto</h3>
          <input
            type="text"
            name="subject"
            placeholder="Asunto a tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {errors.subject && <p style={styles}>{errors.subject}</p>}
          <h3>Comentarios</h3>
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Escribe tus comentarios"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {errors.comments && <p style={styles}>{errors.comments}</p>}
          <input type="submit" value="Enviar" />
        </form>
        {loading && <Loader />}
        {response && (
          <Message msg="Los datos han sido enviados" bgColor="#198754" />
        )}
      </section>
    </>
  );
};

export default ContactForm;
