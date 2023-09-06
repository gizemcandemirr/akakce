// components/SearchBox.tsx

import type { InputHTMLAttributes, FocusEvent } from 'react';
import { SearchIcon } from '../icons';

interface SearchBoxProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  onFocusedChange?: (focused: boolean) => void;
  initialValue?: T;
}

function SearchBox<T>({ onFocusedChange, ...props }: SearchBoxProps<T>) {
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocusedChange?.(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onFocusedChange?.(false);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <div className="relative w-2/4">
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="p-2 pr-8 border rounded-md w-full mx-4"
        placeholder="Neyi ucuza almak istersin?"
      />
      <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
        <SearchIcon className='w-8 h-8'/>
      </span>
    </div>
  );
}

export default SearchBox;
