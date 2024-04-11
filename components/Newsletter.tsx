const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[2.8125rem] pb-10">
      <div className="mb-[2.875rem]">
        <h2 className="text-[3.25rem] font-bold mb-2.5 text-center">
          Join our newsletter
        </h2>
        <p className="text-2xl">
          Let&apos;s keep you updated on how you can be more productive
        </p>
      </div>
      <form className="w-[36.6875rem]">
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
        <button className="mt-10 w-full text-lg text-[#fafafa] font-medium bg-[#1789fc] py-4 rounded-tl-lg rounded-br-lg">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
