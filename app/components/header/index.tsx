import React, { useState } from "react";
import DropdownMenu from "../dropdown/DropdownMenu";
import SearchBox from "../search/SeacrhBox";
import HeaderRightMenu from "../menu/HeaderRightMenu";

type Props = {};

interface Category {
  id: number;
  name: string;
}

const fruits: Category[] = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Ev, Ofis, Yaşam" },
  { id: 3, name: "Anne, Bebek, Oyuncak" },
];

const Header = (props: Props) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  return (
    <div
      className={`flex items-center px-36 h-20 bg-white ${
        !isSearchFocused ? "shadow-md" : "shadow-2xl"
      }`}
    >
      <div className="mr-4">
        <img src="/logo.png" width="120" height="8" alt="Logo" />
      </div>
      <DropdownMenu
        title="Kategoriler"
        options={fruits}
        renderOption={(fruit: Category) => fruit.name}
        onOptionSelect={(fruit) => {
          alert(`Seçilen kategori: ${fruit.name}`);
        }}
      />
      <SearchBox onFocusedChange={(focused) => setSearchFocused(focused)} />
      <HeaderRightMenu />
    </div>
  );
};

export default Header;
