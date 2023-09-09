import React, { useState } from "react";
import DropdownMenu from "../dropdown/DropdownMenu";
import SearchBox from "../search/SeacrhBox";
import HeaderRightMenu from "../menu/HeaderRightMenu";
import { useNavigate } from "@remix-run/react";

type Props = {};

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Ev, Ofis, Yaşam" },
  { id: 3, name: "Anne, Bebek, Oyuncak" },
];

const Header = (props: Props) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center px-36 h-20 bg-white ${
        !isSearchFocused ? "shadow-md" : "shadow-2xl"
      }`}
    >
      <div className="mr-4">
        <img src="/logo.png" width="120" height="8" alt="Logo" className="cursor-pointer" onClick={()=> navigate('/')} />
      </div>
      <DropdownMenu
        title="Kategoriler"
        options={categories}
        renderOption={(category: Category) => category.name}
        onOptionSelect={(category) => {
          alert(`Seçilen kategori: ${category.name}`);
        }}
      />
      <SearchBox onFocusedChange={(focused) => setSearchFocused(focused)} />
      <HeaderRightMenu />
    </div>
  );
};

export default Header;
