// src/utils/simulatedContract.js
// Simulated contract helper: creates fake txs and stores minimal on-chain-like data in localStorage.
// This is for demo when real blockchain isn't connected.

import { getCreds, saveCreds } from './mockdata.js';

const ONCHAIN_KEY = 'credlock_onchain_events';

const loadEvents = () => {
  try {
    const raw = localStorage.getItem(ONCHAIN_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const saveEvents = (events) => {
  localStorage.setItem(ONCHAIN_KEY, JSON.stringify(events));
};

const makeFakeTxHash = () => {
  // create pseudo-random hex string of length ~66
  return '0x' + Math.random().toString(16).slice(2).padEnd(64, '0').slice(0,64);
};

export const simulatedIssue = async (credId, ipfs, issuerAddr = '0xSIMULATED') => {
  // simulate latency
  await new Promise((r) => setTimeout(r, 800 + Math.random() * 800));
  const txHash = makeFakeTxHash();
  const event = {
    type: 'CredentialIssued',
    credId,
    ipfs,
    issuer: issuerAddr,
    txHash,
    timestamp: Date.now()
  };
  const events = loadEvents();
  events.push(event);
  saveEvents(events);

  // also update stored creds (for UI)
  const creds = getCreds();
  const idx = creds.findIndex(c => c.id === credId);
  if (idx >= 0) {
    creds[idx].txHash = txHash;
    creds[idx].status = 'active';
    creds[idx].issuedAt = new Date().toISOString();
  } else {
    creds.push({
      id: credId,
      ipfs,
      manifest: null,
      txHash,
      issuedAt: new Date().toISOString(),
      status: 'active'
    });
  }
  saveCreds(creds);

  return { txHash, event };
};

export const simulatedRevoke = async (credId, issuerAddr = '0xSIMULATED') => {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 500));
  const txHash = makeFakeTxHash();
  const event = {
    type: 'CredentialRevoked',
    credId,
    issuer: issuerAddr,
    txHash,
    timestamp: Date.now()
  };
  const events = loadEvents();
  events.push(event);
  saveEvents(events);

  // update creds
  const creds = getCreds();
  const idx = creds.findIndex(c => c.id === credId);
  if (idx >= 0) {
    creds[idx].status = 'revoked';
    creds[idx].revokedAt = new Date().toISOString();
    creds[idx].revokeTx = txHash;
    saveCreds(creds);
  }
  return { txHash, event };
};

export const getEvents = () => loadEvents();

export default {
  simulatedIssue,
  simulatedRevoke,
  getEvents
};
