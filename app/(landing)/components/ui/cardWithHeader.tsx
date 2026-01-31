import React from "react";

type TCardWithHeaderProps = {
  header: string;
  children: React.ReactNode;
};

const CardWithHeader = ({ header, children }: TCardWithHeaderProps) => {
  return (
    <div className="pt-4 bg-white">
      <h2 className="pb-3.5 px-5 border-b border-[#E4E4E4D1]/82  font-bold text-xl">
        {header}
      </h2>
      {children}
    </div>
  );
};

export default CardWithHeader;
