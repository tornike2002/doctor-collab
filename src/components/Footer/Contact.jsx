import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactForm from "./ContactFrom"

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

    // Debugging: Log the values before sending the request
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    console.log("Form Data:", Object.fromEntries(formData));

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // Corrected publicKey format
        }
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
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
