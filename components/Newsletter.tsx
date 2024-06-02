const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[2.8125rem] pb-10 relative">
      <div className="mb-[2.875rem] lg:w-[45rem] md:w-[500px] w-[21.25rem] text-center">
        <h2 className="lg:text-[3.25rem] md:text-[2.625rem] text-[2.125rem] font-bold lg:mb-5 mb-2.5">
          Join our newsletter
        </h2>
        <p className="lg:text-2xl md:text-xl">
          Let&apos;s keep you updated on how you can be more productive
        </p>
      </div>
      <form className="lg:w-[36.6875rem] md:w-[30.4375rem] w-[21rem]">
        <div>
          <label className="text-lg font-medium">First Name</label>
          <div className="mt-[1.375rem]">
            <input
              className="font-medium pb-[1.375rem] outline-none border-b border-solid border-b-[#0b0b0b] w-full"
              type="text"
              placeholder="Enter first name"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="text-lg font-medium">Email address</label>
          <div className="mt-[1.375rem]">
            <input
              className="font-medium pb-[1.375rem] outline-none border-b border-solid border-b-[#0b0b0b] w-full"
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <button className="mt-10 w-full lg:text-lg md:text-base text-sm text-[#fafafa] font-medium bg-[#1789fc] hover:bg-[#0a3a6a] lg:py-4 py-3 lg:rounded-tl-lg rounded-tl-md lg:rounded-br-lg rounded-br-md">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
