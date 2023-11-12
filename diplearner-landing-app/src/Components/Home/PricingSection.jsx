const PricingSection = () => {
  return (
      <div className="py-6 container text-gray-50">
       <div className="bg-white ">
    <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Pricing Plan</h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p> 

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full p-8 space-y-8 text-center border border-[#00B1E9] rounded-lg ">
                <p className="font-medium text-gray-500 uppercase ">Free</p>

                <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
                    $0
                </h2>

                <p className="font-medium text-gray-500 ">Life time</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00B1E9] rounded-md ">
                    Start Now
                </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center bg-[#00B1E9] rounded-lg border border-[#00B1E9]">
                <p className="font-medium text-gray-200 uppercase">Premium</p>

                <h2 className="text-5xl font-bold text-white uppercase ">
                    $40
                </h2>

                <p className="font-medium text-gray-200">Per month</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-[#00B1E9] capitalize transition-colors duration-300 transform bg-white rounded-md ">
                    Start Now
                </button>
            </div>

            <div className="w-full p-8 space-y-8 text-center border border-[#00B1E9] rounded-lg ">
                <p className="font-medium text-gray-500 uppercase ">Enterprise</p>

                <h2 className="text-4xl font-semibold text-gray-800 uppercase ">
                    $100
                </h2>

                <p className="font-medium text-gray-500 ">Life time</p>

                <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#00B1E9] rounded-md ">
                    Start Now
                </button>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};

export default PricingSection;
