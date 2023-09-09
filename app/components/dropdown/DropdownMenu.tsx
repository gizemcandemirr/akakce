import { useState, ReactNode } from "react";
import { DownIcon } from "../icons";

interface DropdownProps<T> {
  title: string;
  options: T[];
  renderOption: (option: T) => ReactNode;
  onOptionSelect?: (option: T) => void;
}

function DropdownMenu<T>({
  title,
  options,
  renderOption,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={`relative rounded-lg ${isOpen ? "bg-akYellow" : "bg-akBlue"}`}
      id="dropdown-div"
      data-testid="dropdown-div"
    >
      <button
        className={`px-4 py-3 flex items-center text-white w-28 text-sm ${
          isOpen && ""
        }`}
      >
        <span>{title}</span>
        <span className={` transform ${isOpen ? "rotate-180 " : ""}`}>
          <DownIcon className="w-4 h-4 ml-1" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="block px-4 py-2 text-gray-700 text-sm hover:bg-akBlue hover:text-white cursor-pointer"
                role="menuitem"
              >
                {renderOption(option)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
