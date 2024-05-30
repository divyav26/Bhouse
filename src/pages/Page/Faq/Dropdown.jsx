import PropTypes from "prop-types";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Dropdown = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
      <button
        className={`items border-solid border-2 w-full p-4 flex justify-between ${
          isOpen ? "bg-white text-[#5F3AFC]" : "bg-white text-black"
        }  hover:text-[#5F3AFC]`}
        onClick={onClick}
      >
        <h2 className="cursor-pointer text-base font-bold uppercase">
          {title}
        </h2>
        <span className="plus-icon p-2 bg-[#5F3AFC] text-white">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <ul className="items border-solid border-2 p-6 mb-2">
          <li className="answer bg-transparent text-gray-600">{content}</li>
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Dropdown;
