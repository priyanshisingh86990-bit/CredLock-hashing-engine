// src/utils/blockchainSim.js
// src/utils/blockchainSim.js

import { keccak256, toUtf8Bytes } from "ethers";  // ⭐ safer + future-proof

export function makeTxHash(payloadObj) {
  try {
    // convert payload to string
    const json =
      typeof payloadObj === "string"
        ? payloadObj
        : JSON.stringify(payloadObj);

    // stable bytes for hashing
    const bytes = toUtf8Bytes(json + "|" + Date.now());

    // main blockchain-style hash
    return keccak256(bytes);   // ⭐ same output as your old code, cleaner version
  } catch (err) {
    // fallback simple hash (rarely used)
    const txt =
      (typeof payloadObj === "string"
        ? payloadObj
        : JSON.stringify(payloadObj)) +
      "|" +
      Date.now() +
      "|" +
      Math.random();

    return "0x" + btoa(txt).replace(/=+$/, "").slice(0, 40);
  }
}

