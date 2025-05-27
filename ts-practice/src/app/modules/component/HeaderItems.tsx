import React from "react";
import type { FC } from "react";

type HeaderItemsProps = {
  name: string;
  Icon: FC<React.SVGProps<SVGSVGElement>>;
};

const HeaderItems: FC<HeaderItemsProps> = ({ name, Icon }) => {
  return (
    <div className="flex items-center justify-end gap-4 hover:underline hover:underline-offset-8">
      <Icon />

      <h2>{name}</h2>
    </div>
  );
};

export default HeaderItems;
