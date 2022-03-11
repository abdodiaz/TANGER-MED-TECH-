import React from "react";

// components
import CardTable from "components/Cards/CardTable.js";


export default function Systeme() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        Systeme
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
  
    </>
  );
}
