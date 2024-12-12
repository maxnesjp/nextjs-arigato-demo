import React, { ReactNode } from "react";
import FilterList from "./filter";
import { sorting } from "@/lib/constants";

type Props = {
  children: ReactNode;
};

const ProductsListScreenLayout = ({ children }: Props) => {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <FilterList list={sorting} />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
};

export default ProductsListScreenLayout;
