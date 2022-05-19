import React from "react";
import Image from "next/image";

function NftCard({ nft }) {

 
  

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 text-white text-bold text-center">
        {nft.meta.name}
      </div>
      <div className="p-4 text-white text-center">{nft.meta.description}</div>
    </div>
  );
}

export default NftCard;
