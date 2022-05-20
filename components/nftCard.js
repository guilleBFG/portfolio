import React from "react";
import Image from "next/image";

function NftCard({ nft }) {
  console.log(nft.meta.content[0].mimeType);

  const mimeType = `${nft.meta.content[0].mimeType}`;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {mimeType === "video/mp4" && (
        <video autoPlay controls muted src={nft.meta.content[0].url}></video>
      )}
      {mimeType !== "video/mp4" && (
        <div>
          <Image
            className="object-fill"
            width={380}
            height={300}
            src={nft.meta.content[0].url}
            alt={nft.meta.description}
          />
        </div>
      )}
      <div className="p-6 text-white text-bold text-center">
        {nft.meta.name}
      </div>
      <div className="p-4 text-white text-center">{nft.meta.description}</div>
    </div>
  );
}

export default NftCard;
