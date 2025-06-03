import { useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const primaryColor = "#9538E2";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, message });
    setIsSubmitted(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 p-10 bg-white shadow-xl rounded-2xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Please fill out the form below.
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center p-6 bg-green-50 border-l-4 border-green-400 rounded-md">
            <h3 className="text-xl font-medium text-green-700">Thank You!</h3>
            <p className="text-green-600 mt-2">
              Your message has been sent successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative mb-6">
                <FiUser
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  style={{ color: primaryColor }}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-4 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm"
                  style={{
                    "--tw-ring-color": primaryColor,
                    borderColor: name ? primaryColor : "#D1D5DB",
                  }}
                  required
                />
              </div>
              <div className="relative mb-6">
                <FiMail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                  style={{ color: primaryColor }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-3 py-4 mb-6 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm"
                  style={{
                    "--tw-ring-color": primaryColor,
                    borderColor: email ? primaryColor : "#D1D5DB",
                  }}
                  required
                />
              </div>
              <div className="relative">
                <FiMessageSquare
                  className="absolute left-3 top-5 transform -translate-y-0 h-5 w-5 text-gray-400"
                  style={{ color: primaryColor }}
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="appearance-none rounded-lg relative block w-full px-3 py-4 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent sm:text-sm"
                  style={{
                    "--tw-ring-color": primaryColor,
                    borderColor: message ? primaryColor : "#D1D5DB",
                  }}
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
                style={{
                  backgroundColor: primaryColor,
                  "--tw-ring-color": primaryColor,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#7f2db6")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = primaryColor)
                }
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FiSend className="h-5 w-5 transition-colors duration-300 ease-in-out" />
                </span>
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
