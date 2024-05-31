import React, { useState } from 'react';

const ToggleButton = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="flex items-center justify-center"> {/* Flex container ko center me align karna */}
      <div className="relative inline-block w-10 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-gray-300 appearance-none cursor-pointer"
          checked={isYearly}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        >
          <span
            className="toggle-button block w-6 h-6 rounded-full bg-blue-500 transition duration-300 ease-in-out transform translate-x-0"
            style={{ transform: isYearly ? 'translateX(4px)' : 'translateX(0)' }}
          ></span>
        </label>
      </div>
      <div className="flex">
        <p className={`text-gray-500 mr-4 ${!isYearly ? 'font-bold text-blue-500' : ''}`}>Monthly</p>
        <p className={`text-gray-500 mr-4 ${isYearly ? 'font-bold text-blue-500' : ''}`}>Yearly</p>
      </div>
    </div>
  );
};

export default ToggleButton;