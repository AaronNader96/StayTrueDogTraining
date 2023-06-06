import React from "react";

const Contact = () => {
  const redirectToForm = () => {
    window.location.href =
      "https://docs.google.com/forms/u/4/d/e/1FAIpQLSdJ7m59OxbhzKF3NFTeahoNkl0mo5K9IWy69UKqdgqAzWIE7Q/viewform";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <form action="mailto:staytruedogtraining@gmail.com" method="post">
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full px-6 py-3 bg-customBlue text-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Send An E-mail
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <button
            className="w-full px-6 py-3 bg-customBlue text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={redirectToForm}
          >
            Google Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
