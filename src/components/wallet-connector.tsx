"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

export default function WalletConnector() {
  const { address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected) {
      console.log(`Wallet connected: ${address} on chain: ${chain?.name}`);
    } else {
      console.log("Wallet disconnected");
    }
  }, [isConnected, address, chain]);

  return (
    <ConnectButton
      showBalance={true}
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
    />
  );
}
