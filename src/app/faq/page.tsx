import React from "react";

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-4 sm:px-5 py-16 sm:py-24 mx-auto">
          <div className="flex flex-col items-center text-center mb-10 sm:mb-20">
            <h1 className="text-2xl sm:text-5xl font-medium title-font text-gray-900 mb-2">
              Questions? Look Here!
            </h1>
            <p className="w-full sm:w-1/2 leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* FAQ Items */}
            {[
              "What Types Of Chairs Do You Offer?",
              "How Can We Get In Touch With You?",
              "Do Your Chairs Come With A Warranty?",
              "What Will Be Delivered And When?",
              "Can I Try A Chair Before Purchasing?",
              "How Do I Clean And Maintain My Comforty Chair?",
            ].map((question, index) => (
              <div key={index} className="p-4">
                <div className="relative border border-gray-200 bg-[#F7F7F7] p-4 sm:p-6 rounded-lg">
                  <div className="absolute top-3 right-3 cursor-pointer hover:text-gray-700">
                    <span className="text-3xl text-gray-500">+</span>
                  </div>
                  <h2 className="text-lg sm:text-xl text-gray-900 title-font mb-2 font-bold">
                    {question}
                  </h2>
                  <p className="leading-relaxed text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi
                    ullam amet debitis libero veritatis enim repellat optio natus eum
                    delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
