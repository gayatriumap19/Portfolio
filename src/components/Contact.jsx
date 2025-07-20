import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r75thc6",
        "template_yc0rnng",
        {
          user_name: form.name,
          user_mail: form.email,
          user_message: form.message,
        },
        "G_h1OavsNw40czQuh"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="py-20 px-4 flex justify-center" id="contact">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-xl text-white space-y-6"
      >
        <h2 className="my-20 text-center text-4xl">Contact</h2>

        <div>
          {/* <label className="text-sm block mb-2">Your Name</label> */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            required
            className="w-full px-4 py-3 bg-[#121212] text-white rounded-sm border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#928e8e]"
          />
        </div>

        <div>
          {/* <label className="text-sm block mb-2">Your Email</label> */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            required
            className="w-full px-4 py-3 bg-[#121212] text-white rounded-sm border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#928e8e]"
          />
        </div>

        <div>
          {/* <label className="text-sm block mb-2">Your Message</label> */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            rows={5}
            required
            className="w-full px-4 py-3 bg-[#121212] text-white rounded-sm border border-neutral-700 focus:outline-none focus:ring-1 focus:ring-[#928e8e]"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-sm bg-gray-400 hover:bg-gray-500 transition duration-200 text-white font-medium"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;