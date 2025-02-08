import React from "react";


const ContactPage = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-4">Get In Touch With Us</h2>
          <p className="text-gray-600 text-center mb-8">
            For more information about our products & services, please feel free to drop us an email.
            <br />Our staff always be there to help you out. Do not hesitate!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Info */}
            <div className="space-y-8 w-[350px] ml-20 ">
              <div className="flex items-start">
                <span className="text-primary text-xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-2xl">Address</h3>
                  <p className="text-gray-600">236 5th St Avenue, New <br /> York NY10000, United <br />States</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary text-xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-2xl">Phone</h3>
                  <p className="text-gray-600">Mobile: +1(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +1(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-primary text-xl mr-4">⏰</span>
                <div>
                  <h3 className="font-semibold text-2xl">Working Time</h3>
                  <p className="text-gray-600">Monday-Friday: 9:00 -<br /> 22:00</p>
                  <p className="text-gray-600">Saturday-Sunday: 9:00 - <br />21:00</p>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Abc"
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Abc@def.com"
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="This is optional"
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-3"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi! I’d like to ask about..."
                    className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-primary focus:border-primary mt-2 p-3"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-[237px] h-[55px] bg-[#029FAE] text-white font-semibold py-3 rounded-md hover:bg-blue-900 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    
      <div className="max-w-screen-xl mx-auto py-16 bg-[#F4F4F4] px-4">
  <div className="bg-gray-100 py-8">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
      {/* High Quality */}
      <div className="flex items-center gap-4 text-center md:text-left">
        <img src="/images/trophy.png" alt="High Quality Icon" className="w-10 h-10" />
        <div>
          <h3 className="text-lg font-bold">High Quality</h3>
          <p className="text-sm text-gray-600">Crafted from top materials</p>
        </div>
      </div>
      {/* Warranty Protection */}
      <div className="flex items-center gap-4 text-center md:text-left">
        <img src="/images/group.png" alt="Warranty Protection Icon" className="w-10 h-10" />
        <div>
          <h3 className="text-lg font-bold">Warranty Protection</h3>
          <p className="text-sm text-gray-600">Over 2 years</p>
        </div>
      </div>
      {/* 24/7 Support */}
      <div className="flex items-center gap-4 text-center md:text-left">
        <img src="/images/customer.png" alt="24/7 Support Icon" className="w-10 h-10" />
        <div>
          <h3 className="text-lg font-bold">24 / 7 Support</h3>
          <p className="text-sm text-gray-600">Dedicated support</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ContactPage;
