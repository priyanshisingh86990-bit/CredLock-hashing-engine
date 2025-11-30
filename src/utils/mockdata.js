// src/utils/mockdata.js

// ---------- STORAGE HELPERS ----------
export function getOrInit(key, defaultValue = []) {
  const raw = localStorage.getItem(key);
  if (raw) return JSON.parse(raw);
  localStorage.setItem(key, JSON.stringify(defaultValue));
  return defaultValue;
}

export function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


// ---------- KEYS ----------
export const CREDS_KEY = "credlock_credentials";
export const USERS_KEY = "credlock_users";
export const ORGS_KEY = "credlock_orgs";


// ---------- CREDENTIALS ----------
export const getCreds = () => getOrInit(CREDS_KEY, []);
export const saveCreds = (arr) => save(CREDS_KEY, arr);


// ---------- USERS (OPTIONAL) ----------
export const getUsers = () => getOrInit(USERS_KEY, []);
export const saveUsers = (arr) => save(USERS_KEY, arr);


// ---------- ORGS (EMPLOYER DATA) ----------
export const getOrgs = () =>
  getOrInit(ORGS_KEY, [
    {
      id: "org_demo",
      name: "Acme Corp",
      website: "https://acme.example",
      contact: "hr@acme.com",
    },
  ]);

export const saveOrgs = (arr) => save(ORGS_KEY, arr);

export function getOrgByUser(userId) {
  const orgs = getOrgs();
  return orgs[0] || null; // simple mapping for demo
}

export function upsertOrg(org) {
  const orgs = getOrgs();
  const idx = orgs.findIndex((o) => o.id === org.id);

  if (idx >= 0) {
    orgs[idx] = org;
  } else {
    orgs.push(org);
  }

  saveOrgs(orgs);
}








// src/utils/mockData.js
// Simple localStorage helpers and seed data for CRED-LOCK demo

// export const load = (key) => {
//   try {
//     const raw = localStorage.getItem(key);
//     return raw ? JSON.parse(raw) : null;
//   } catch (e) {
//     console.error('load error', e);
//     return null;
//   }
// };

// export const save = (key, value) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(value));
//   } catch (e) {
//     console.error('save error', e);
//   }
// };

// export const getOrInit = (key, initial) => {
//   const v = load(key);
//   if (v !== null) return v;
//   save(key, initial);
//   return initial;
// };

// // Keys used
// const ORGS_KEY = 'credlock_orgs';
// const CREDS_KEY = 'credlock_creds';
// const USERS_KEY = 'credlock_users';

// // Seed example org and user if not present
// export const initSeed = () => {
//   getOrInit(ORGS_KEY, [
//     { id: 'org_1', name: 'Acme Corp', wallet: null, createdAt: new Date().toISOString() }
//   ]);

//   getOrInit(USERS_KEY, [
//     { id: 'user_employer', name: 'Demo Employer', role: 'employer' },
//     { id: 'user_employee', name: 'Demo Employee', role: 'employee' },
//     { id: 'user_verifier', name: 'Demo Verifier', role: 'verifier' }
//   ]);

//   getOrInit(CREDS_KEY, []); // empty creds
// };

// // CRUD helpers
// export const getOrgs = () => getOrInit(ORGS_KEY, []);
// export const saveOrgs = (arr) => save(ORGS_KEY, arr);

// export const getCreds = () => getOrInit(CREDS_KEY, []);
// export const saveCreds = (arr) => save(CREDS_KEY, arr);

// export const getUsers = () => getOrInit(USERS_KEY, []);
// export const saveUsers = (arr) => save(USERS_KEY, arr);

// // src/utils/mockData.js (extend existing)
// export const getOrgs = () => getOrInit('credlock_orgs', [
//   { id: 'org_demo', name: 'Acme Corp', website: 'https://acme.example', contact: 'hr@acme.com' }
// ]);
// export const saveOrgs = (arr) => save('credlock_orgs', arr);

// export function getOrgByUser(userId) {
//   // simple: return first org for demo
//   const orgs = getOrgs();
//   return orgs[0] || null;
// }
// export function upsertOrg(org) {
//   const orgs = getOrgs();
//   const idx = orgs.findIndex(o=>o.id===org.id);
//   if(idx>=0) orgs[idx] = org; else orgs.push(org);
//   saveOrgs(orgs);
// }

