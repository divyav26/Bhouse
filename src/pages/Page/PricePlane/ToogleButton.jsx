import { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <h1 className={isChecked ? "text-gray-400 text-lg" : "text-[#5F3AFC] text-lg"}>
        Monthly
      </h1>
      <label
        htmlFor="toggleSwitch"
        className="relative inline-block h-6 w-14 cursor-pointer rounded-full bg-white border border-[#5F3AFC] transition"
      >
        <input
          type="checkbox"
          id="toggleSwitch"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span
          className={`absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-[#5F3AFC] transition-all ${
            isChecked ? "start-7" : ""
          }`}
        ></span>
      </label>
      <h1 className={isChecked ? "text-[#5F3AFC] text-lg" : "text-gray-400 text-lg"}>Yearly</h1>
    </div>
  );
};

export default ToggleSwitch;
