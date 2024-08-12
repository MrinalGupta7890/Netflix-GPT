import lang from "../utils/langauageConstant";

const GptSearchBar = () => {
  return (
    <div className="pt-[13%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang.hi.getSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3">
          {lang.hi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
