const InputBox = () => {
  return (
    // Input box
    <div className="md:absolute md:bottom-[-3rem] md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-[70%]">
      <div className="lg:flex bg-white  shadow-lg drop-shadow-xl flex-wrap gap-6 items-center justify-center lg:h-[16vh] p-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full lg:w-auto px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select className="w-full lg:w-auto px-5 py-3 text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">Your Region</option>
          <option value="region1">United States</option>
          <option value="region2">India</option>
          <option value="region3">Bangladesh</option>
          <option value="region3">Bangladesh</option>
          <option value="region3">Bangladesh</option>
          <option value="region3">Afghanistan</option>
          <option value="region3">Albania</option>
          <option value="region3">Algeria</option>
        </select>
        <select className="w-full lg:w-auto px-5 py-3 text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option value="">Services Type</option>
          <option value="region1">Services Type1</option>
          <option value="region2">Services Type2</option>
          <option value="region3">Services Type3</option>
          <option value="region3">Services Type4</option>
          <option value="region3">Services Type5</option>
          <option value="region3">Services Type6</option>
          
        </select>
        <button className="w-full lg:w-auto px-16 py-4 font-bold uppercase bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Find Now
        </button>
      </div>
    </div>
  );
}

export default InputBox;