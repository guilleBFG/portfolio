import { React, useState, useEffect } from 'react'
import Script from 'next/script';

function BlockchainNFTBlock() {
    const [NftData, setNftData] = useState([]);

    const getNFt = async () => {
        try {
            if (!NftData) {
                const response = await fetch('https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0xC564eD39026C5ddf79408548B6a237391591F7A7');
                const data = await response.json();
                debugger;
                setNftData(data.items);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getNFt();
    }, [NftData]);

    return (
        <>

        </>
    )
}

export default BlockchainNFTBlock