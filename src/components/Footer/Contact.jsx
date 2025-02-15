import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactForm from "./ContactFrom";

export default function Contact() {
  const [errorEmail, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("user_email");
    const message = formData.get("message");

    let isValid = true;

    if (!email || !/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!message || message.trim().length < 10) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }

    if (!isValid) return;

    setLoading(true);
    emailjs
      .sendForm("service_ry9628q", "template_cqioc5o", e.target, {
        publicKey: "BAv7Z_KN3xf9qrXNd",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
          setLoading(false);
        }
      );
  };

  return (
    <div>
      <ContactForm 
        errorEmail={errorEmail} 
        sendEmail={sendEmail} 
        loading={loading}  
        messageError={messageError}  
      />
    </div>
  );
}
