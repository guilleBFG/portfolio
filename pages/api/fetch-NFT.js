
export default async function handler(req, res) {
    const {nftWallet} = req.query;
    const fetchRes = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${nftWallet}`);
    const {items} = await fetchRes.json();
    res.status(200).json( {items} );
  }
  