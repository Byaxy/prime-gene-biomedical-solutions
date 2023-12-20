const Form = () => {
  return (
    <div className="w-full md:w-[60%]">
      <form
        action=""
        className="font-body text-sm flex flex-col justify-center items-center md:flex-row"
      >
        <input
          type="email"
          placeholder="Your email ..."
          className="px-6 py-3 rounded-full border-0  w-[100%] md:w-auto text-darkerBlue outline-none"
        />
        <button className="px-10 py-3 mt-4 w-fit rounded-full bg-secondary text-darkerBlue font-bold hover:bg-grayColor md:mt-auto md:-ml-12 transition-colors ease-in-out duration-700">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
