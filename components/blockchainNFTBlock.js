import { useState, useEffect } from "react";

function BlockchainNFTBlock({ user }) {
  const [nftData, setNftData] = useState([]);
  const fetchUrl = `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${user.nftWallet}`;

  useEffect(() => {
    const getNFt = async () => {
      if (!nftData) {

        const response = await fetch(
          'https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xC564eD39026C5ddf79408548B6a237391591F7A7'
        )
        debugger;
        console.log(response);
        const data = await response.json()
        console.log(data);
        setNftData(data.items)
        console.log(nftData);
      }
    };
    getNFt();
  }, [nftData]);

  return (
    <>
      <div>{nftData}</div>
    </>
  );
}

export default BlockchainNFTBlock;
