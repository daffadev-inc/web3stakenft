import {
  ThirdwebNftMedia,
  useAddress,
  useClaimNFT,
  useEditionDrop,
  useDisconnect,
} from "@thirdweb-dev/react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from "react";
import Link from 'next/link';
import { DROP_EDITION_ADDRESS } from "../const/contract";
import styles from "../styles/App.module.scss";

export default function MintContainer() {
  const editionDrop = useEditionDrop(DROP_EDITION_ADDRESS);
  const { mutate: claim, isLoading } = useClaimNFT(editionDrop);
  const address = useAddress();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.collectionContainer}>
        {address ? (
        <Button onClick={() => disconnectWallet()}>
                    <p style={{margin: 0, float: 'right'}}>{address.slice(0, 2).concat("*").concat(address.slice(-4))}</p>
        </Button>
          ) : (<></>)}
      <h1>Edition Drop</h1>

      <p>Claim your Character NFT to start playing!</p>

      <Card className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <img src="./mine.gif" style={{ height: 200 }} />

      <Button
        onClick={() =>
          claim({
            quantity: 1,
            to: address as string,
            tokenId: 0,
          })
        }
      >
        {isLoading ? "Minting..." : "Mint"}
      </Button>
      </Card>
    </div>
  );
}
