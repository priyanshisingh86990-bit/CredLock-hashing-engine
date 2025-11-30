// src/utils/issueFlow.js
// High-level flow: create manifest, fake-upload to IPFS (we simulate), compute credId, call simulated contract.
// src/utils/issueFlow.js

import { makeTxHash } from "./blockchainSim";
import { addEvent } from "./auditLog";
import { getCreds, saveCreds } from "./mockdata";

/**
 * manifest: { employeeName, employeeId, role, start, end, proofFileName?, fileHash? }
 * issuer: object or id
 */
export async function issueCredentialFlow(manifest, issuer = { id: "anon", name: "anon" }) {
  // simulate ipfs (no real upload)
  const ipfs = "ipfs://" + Math.random().toString(36).slice(2, 10);
  const credId = "cred_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6);

  // blockchain-style tx
  const txPayload = { action: "issue", credId, ipfs, issuer, manifest };
  const txHash = makeTxHash(txPayload);

  const cred = {
    id: credId,
    manifest,
    ipfs,
    txHash,
    issuer: typeof issuer === "string" ? { id: issuer } : issuer,
    status: "valid",
    issuedAt: new Date().toISOString()
  };

  const arr = getCreds();
  arr.unshift(cred);
  saveCreds(arr);

  addEvent(
    "issue",
    typeof issuer === "object" ? issuer : { id: issuer, name: issuer },
    { credId, txHash, fileHash: manifest.fileHash || null }
  );

  return { credId, ipfs, txHash };
}

// revoke
export async function revokeCredential(credId, actor = { id: "anon" }) {
  const arr = getCreds();
  const idx = arr.findIndex(c => c.id === credId);
  if (idx === -1) throw new Error("not found");

  arr[idx].status = "revoked";

  const txHash = makeTxHash({ action: "revoke", credId, actor });
  arr[idx].txHash = txHash;
  arr[idx].revokedAt = new Date().toISOString();

  saveCreds(arr);

  addEvent("revoke", actor, { credId, txHash });

  return { credId, txHash };
}



// import { ethers } from 'ethers';
// import { getCreds, saveCreds } from './mockdata.js';
// import simulatedContract from "./simulatedContract.js";


// // fake upload to "IPFS" - returns a mock ipfs:// id (we'll use keccak256 hash prefix)
// export const fakeUploadToIPFS = (manifest) => {
//   const json = JSON.stringify(manifest);
//   const hashHex = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(json)); // 0x...
//   // simple readable ipfs-like id
//   const mockIpfs = 'ipfs://' + hashHex.slice(2, 16);
//   return mockIpfs;
// };

// // compute credId (bytes32 style) from ipfs + employeeId
// export const computeCredId = (ipfs, employeeId) => {
//   // use keccak256 of ipfs + employeeId
//   return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(`${ipfs}|${employeeId}`));
// };

// // main issue flow: manifest = { employeeName, employeeId, role, start, end, proofLink (optional) }
// export const issueCredentialFlow = async (manifest, issuerAddr = '0xSIMULATED') => {
//   // 1. upload manifest -> ipfs id
//   const ipfs = fakeUploadToIPFS(manifest);

//   // 2. compute credId
//   const credId = computeCredId(ipfs, manifest.employeeId);

//   // 3. save local pending cred
//   const creds = getCreds();
//   creds.push({
//     id: credId,
//     ipfs,
//     manifest,
//     status: 'pending',
//     issuedAt: null,
//     txHash: null
//   });
//   saveCreds(creds);

//   // 4. call simulated contract to record issuance
//   const { txHash, event } = await simulatedContract.simulatedIssue(credId, ipfs, issuerAddr);

//   // 5. return details for UI
//   return { credId, ipfs, txHash, event };
// };

// // src/utils/issueFlow.js
// import { makeTxHash } from "./blockchainSim";
// import { addEvent } from "./auditLog";
// import { getCreds, saveCreds } from "./mockdata";

// /**
//  * manifest: { employeeName, employeeId, role, start, end, proofFileName?, fileHash? }
//  * issuer: object or id (we store as string or object)
//  */
// export async function issueCredentialFlow(manifest, issuer = { id: "anon", name: "anon" }) {
//   // simulate ipfs (we don't upload file)
//   const ipfs = "ipfs://" + Math.random().toString(36).slice(2, 10);
//   const credId = "cred_" + Date.now() + "_" + Math.random().toString(36).slice(2,6);

//   const txPayload = { action: "issue", credId, ipfs, issuer, manifest };
//   const txHash = makeTxHash(txPayload);

//   const cred = {
//     id: credId,
//     manifest,
//     ipfs,
//     txHash,
//     issuer: typeof issuer === "string" ? { id: issuer } : issuer,
//     status: "valid",
//     issuedAt: new Date().toISOString()
//   };

//   const arr = getCreds();
//   arr.unshift(cred);
//   saveCreds(arr);

//   addEvent("issue", typeof issuer === "object" ? issuer : { id: issuer, name: issuer }, { credId, txHash, fileHash: manifest.fileHash || null });

//   return { credId, ipfs, txHash };
// }

// export async function revokeCredential(credId, actor = { id: "anon" }) {
//   const arr = getCreds();
//   const idx = arr.findIndex(c => c.id === credId);
//   if (idx === -1) throw new Error("not found");
//   arr[idx].status = "revoked";
//   const txHash = makeTxHash({ action: "revoke", credId, actor });
//   arr[idx].txHash = txHash;
//   arr[idx].revokedAt = new Date().toISOString();
//   saveCreds(arr);
//   addEvent("revoke", actor, { credId, txHash });
//   return { credId, txHash };
// }
