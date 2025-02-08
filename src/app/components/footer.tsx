import React from 'react';

const Footer = () => {
  return (
    <div className="border-t-2">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap md:items-center lg:items-start md:flex-row md:flex-nowrap flex-col">
          <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
  className="w-[40px] h-[40px] "
  src="/images/logo.png"
  alt="logo"
/>

              <span className="ml-3 text-3xl">Comforty</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="w-full md:w-1/4 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Sofa</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Arm Chair</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Wing Chair</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Desk Chair</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Wooden Chair</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
                </li>
              </nav>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Help & Support</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Help</a>
                </li>
              </nav>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4 mr-0 md:mr-20">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                NEWSLETTER
              </h2>
              <div className="flex flex-col sm:flex-row items-center md:items-start">
                <div className="relative w-full sm:w-auto mb-4 sm:mb-0 sm:mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full sm:w-[285px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Your email"
                  />
                </div>
                <button className="bg-[#029FAE] hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-200">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-sm text-gray-500">Nullam tincidunt erat enim.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2021-Blogy— Designed & Developed By SYED ARMAN ALI
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a>
              <img
  className="w-[227px] h-[27px]"
  src="/images/REC.png"
  alt="socials"
/>

              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
