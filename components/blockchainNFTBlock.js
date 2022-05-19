import { useState, useEffect } from "react";

function BlockchainNFTBlock({ user }) {
  const [nftData, setNftData] = useState([]);
  const [nftLoaded, setNftLoaded] = useState(null);


  useEffect(() => {
    const getNFt = async () => {
      if (nftLoaded === null) {
        setNftLoaded(true);
        const response = await fetch( `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${user.nftWallet}` );
        const data = await response.json();
        setNftData(data.items);
        console.log(data.items);
      }
    };
    getNFt();
  }, [nftLoaded, user]);

  return (
    <>
      
    </>
  );
}

export default BlockchainNFTBlock;
