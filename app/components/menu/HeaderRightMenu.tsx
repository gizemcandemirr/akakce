import React from "react";
import { BellIcon, UserIcon } from "../icons";

type Props = {};

const HeaderRightMenu = (props: Props) => {
  return (
    <div className="flex space-x-3 items-center ml-20 text-sm">
      <button>Hesap Aç</button>
      <button>Giriş Yap</button>
      <button>
        <UserIcon className="w-8 h-8" />
      </button>
      <button>
        <BellIcon className="w-8 h-8" />
      </button>
    </div>
  );
};

export default HeaderRightMenu;
