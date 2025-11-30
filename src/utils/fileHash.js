// src/utils/fileHash.js
export async function computeFileHash(file) {
  if (!file) return null;
  const arrayBuffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
  return bufferToHex(hashBuffer);
}

function bufferToHex(buffer) {
  const bytes = new Uint8Array(buffer);
  let hex = "";
  for (let b of bytes) {
    hex += b.toString(16).padStart(2, "0");
  }
  return "0x" + hex;
}
