import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import NftCard from "./nftCard";

function BlockchainNFTBlock({ user }) {
  const [nftData, setNftData] = useState([]);
  const [nftLoaded, setNftLoaded] = useState(null);
  const intl = useIntl();

  useEffect(() => {
    const getNFt = async () => {
      if (nftLoaded === null) {
        setNftLoaded(true);
        const response = await fetch(
          `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${user?.nftWallet}`
        );
        const data = await response.json();
        setNftData(data.items);
      }
    };
    getNFt();
  }, [nftLoaded, user]);

  return (
    <>
      <div className="mb-3 text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
        <div className="ml-3 text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
          {intl.formatMessage({ id: "page.blockchainSection.title" })}
        </div>
        <div className="ml-2 mt-2 grid lg:grid-cols-5 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
          {nftData.map((nft, index) => {
            return <NftCard nft={nft} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BlockchainNFTBlock;
