import React, { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
};

const FormContact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("https://getform.io/f/rbeqkkyb", {
        method: "POST",
        body: new URLSearchParams(formData as any),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setErrors({
          form: "Failed to submit the form. Please try again later.",
        });
      }
    } catch (error) {
      setErrors({ form: "Failed to submit the form. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl glassmorphism rounded-xl lg:p-4">
      <div className="p-4">
        {isSubmitted ? (
          <div className="text-white">
            <h2 className="text-xl font-bold">Thank you for your message!</h2>
            <p>We will get back to you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="text-white"
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-black"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-black"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-black"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-black"
              />
              {errors.subject && (
                <span className="text-red-500 text-sm">{errors.subject}</span>
              )}
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                rows={10}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border-2 rounded-lg p-3 flex border-slate-300 outline-bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-black"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
            {errors.form && (
              <span className="text-red-500 text-sm">{errors.form}</span>
            )}
            <button
              type="submit"
              className="w-full rounded-xl p-4 glassmorphism mt-4"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormContact;
