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
        {!nftLoaded && (
          <div className="flex items-center justify-center min-h-screen from-gray-100 via-gray-300 to-slate-200 bg-gradient-to-br">
            <div className="p-32">
              <button
                type="button"
                className="flex items-center rounded-lg bg-gray-800 border-gray-700 px-4 py-2 text-white"
                disabled
              >
                <svg
                  className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="font-medium subpixel-antialiased">
                  {intl.formatMessage({ id: "page.blockchainSection.title" })}
                </span>
              </button>
            </div>
          </div>
        )}
        <div className="ml-2 mt-2 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-gray-800 border-gray-700">
          {nftData.map((nft, index) => {
            return <NftCard nft={nft} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BlockchainNFTBlock;
