import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import NftCard from "./nftCard";
import SkeletonCard from "./skeletonCard";

function BlockchainNFTBlock({ user }) {
  const [nftData, setNftData] = useState([]);
  const [nftLoaded, setNftLoaded] = useState(false);

  const intl = useIntl();

  useEffect(() => {
    const getNFt = async () => {
      if (!nftLoaded) {
        const response = await fetch(
          `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${user?.nftWallet}`
        );
        const data = await response.json();
        setNftData(data.items);
        setNftLoaded(true);
      }
    };
    getNFt();
  }, [nftLoaded, user]);

  return (
    <>
      <div className="text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
        <div className="ml-3 text-xl text-white font-bold tracking-wide z-2 bg-gray-800 border-gray-700">
          {intl.formatMessage({ id: "page.blockchainSection.title" })}
        </div>
        {!nftLoaded ? (
          <div className="ml-2 mt-2 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="ml-2 mt-2 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
            {nftData.map((nft, index) => {
              return <NftCard nft={nft} key={nft.id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default BlockchainNFTBlock;
