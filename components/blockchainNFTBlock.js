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
          `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${user.nftWallet}`
        );
        const data = await response.json();
        setNftData(data.items);
      }
    };
    getNFt();
  }, [nftLoaded, user]);

  return (
    <>
      <div className="text-xl text-black font-bold tracking-wide z-2">
        {intl.formatMessage({ id: "page.blockchainSection.title" })}
      </div>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
          
        {nftData.map((nft, index) => {
          return <NftCard nft={nft} key={index} />;
        })}
      </div>
    </>
  );
}

export default BlockchainNFTBlock;



