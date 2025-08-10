import React, { useState, useEffect } from "react";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (fieldValues = formData) => {
    const temp = { ...errors };

    if ("name" in fieldValues)
      temp.name = fieldValues.name.trim() ? "" : "Name is required";

    if ("email" in fieldValues) {
      if (!fieldValues.email.trim()) temp.email = "Email is required";
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fieldValues.email)
      )
        temp.email = "Email is not valid";
      else temp.email = "";
    }

    if ("message" in fieldValues) {
      temp.message = fieldValues.message.trim()
        ? fieldValues.message.length <= 500
          ? ""
          : "Message must be 500 characters or less"
        : "Message is required";
    }

    setErrors({ ...temp });
  };

  useEffect(() => {
    validate(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    validate();

    if (
      Object.values(errors).every((x) => x === "") &&
      formData.name &&
      formData.email &&
      formData.message
    ) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData(initialForm);
        setTouched({});
      }, 2000);
    }
  };

  const ValidationIcon = ({ isValid }) =>
    isValid ? (
      <svg
        className="w-5 h-5 text-green-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );

  return (
    <>
      <section id="contact" className="min-h-screen bg-slate-950 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-blue-400 mb-12">
            Contact Me
          </h2>

          {submitted && (
            <div className="mb-6 p-4 rounded bg-green-700 bg-opacity-20 text-green-300 text-center font-medium animate-pulse">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form
            noValidate
            onSubmit={handleSubmit}
            className="space-y-8 bg-slate-900 p-8 rounded-lg shadow-md"
          >
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map(({ label, name, type }) => {
              const isError = errors[name] && touched[name];
              const isValid = !errors[name] && touched[name];
              return (
                <div key={name} className="relative">
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onBlur={() => setTouched({ ...touched, [name]: true })}
                    placeholder=" "
                    className={`peer w-full border rounded-md px-4 pt-6 pb-2 outline-none transition
                      ${
                        isError
                          ? "border-red-500 focus:border-red-600"
                          : "border-gray-600 focus:border-blue-500"
                      } bg-slate-800 text-gray-100`}
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-4 top-2 text-sm text-gray-400 transition-all
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
                  >
                    {label}
                  </label>
                  <div className="absolute right-3 top-3">
                    {touched[name] && <ValidationIcon isValid={isValid} />}
                  </div>
                  {isError && (
                    <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
                  )}
                </div>
              );
            })}

            {/* Message textarea */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                maxLength="500"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => setTouched({ ...touched, message: true })}
                placeholder=" "
                className={`peer w-full border rounded-md px-4 pt-6 pb-2 outline-none resize-y transition
                  ${
                    errors.message && touched.message
                      ? "border-red-500 focus:border-red-600"
                      : "border-gray-600 focus:border-blue-500"
                  } bg-slate-800 text-gray-100`}
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
              >
                Message
              </label>
              <div className="absolute right-3 top-3">
                {touched.message && (
                  <ValidationIcon isValid={!errors.message} />
                )}
              </div>
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
              <p
                className={`mt-1 text-right text-sm ${
                  formData.message.length > 480
                    ? "text-yellow-400"
                    : "text-gray-500"
                }`}
              >
                {formData.message.length}/500
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md shadow-md flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-8 text-gray-400">
            <a
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-blue-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/anmolneupane/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 24h4.98V7H.5v17zM9 7h4.77v2.54h.07c.66-1.25 2.27-2.54 4.68-2.54 5.01 0 5.94 3.29 5.94 7.56V24H19v-7.99c0-1.9-.04-4.35-2.65-4.35-2.66 0-3.06 2.07-3.06 4.22V24H9V7z" />
              </svg>
            </a>

            <a
              href="https://github.com/anmol-neupane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-200 transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.22 1.83 1.22 1.06 1.81 2.78 1.29 3.46.99.11-.78.42-1.29.76-1.59-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.23 0 4.62-2.8 5.66-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .5z" />
              </svg>
            </a>

            <a
              href="tel:+1234567890"
              aria-label="Phone"
              className="hover:text-green-400 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.4 2.4.78 3.53a2 2 0 01-.45 2.11L9 10.5a16 16 0 006 6l1.14-1.14a2 2 0 012.11-.45c1.12.38 2.31.65 3.52.78a2 2 0 011.73 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 text-center py-6 mt-12">
        <p>
          &copy; {new Date().getFullYear()} Anmol Neupane All rights reserved.
        </p>
      </footer>
    </>
  );
}
