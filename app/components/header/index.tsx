import React from "react";
import DropdownMenu from "../dropdown/DropdownMenu";

type Props = {};

interface Fruit {
  id: number;
  name: string;
}

const fruits: Fruit[] = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Ev, Ofis, Yaşam" },
  { id: 3, name: "Anne, Bebek, Oyuncak" },
];

const Header = (props: Props) => {
  return (
    <div className="flex items-center px-36 h-16 bg-white shadow-lg">
      <div className="mr-4">
        <img src="/logo.png" width="120" height="16" alt="Logo" />
      </div>
      <DropdownMenu
        title="Kategoriler"
        options={fruits}
        renderOption={(fruit: Fruit) => fruit.name}
        onOptionSelect={(fruit) => {
          alert(`Seçilen meyve: ${fruit.name}`);
        }}
      />
      <div>search</div>
      <div>login</div>
    </div>
  );
};

export default Header;
