# CREDLOCK — Blockchain-Inspired Employee Credential Verification System  

CREDLOCK is a **tamper-proof credential verification platform** designed for Hack2Hire.  
It enables employers to issue verifiable credentials and allows anyone to validate them securely using **cryptographic hashing** and **simulated blockchain transactions**.

---

## 🚀 Why CREDLOCK?
Traditional employee verification relies on manual checks, PDF documents, HR calls, etc.  
CREDLOCK makes this process frictionless by giving every credential a **unique on-chain style hash**, without storing any sensitive documents.

---

## 🔐 Key Features
### ✔ 1. **Cryptographic File Hashing (SHA-256 / Keccak256)**
Instead of uploading real documents, the system extracts a **hash value** of the certificate or marksheet.  
This ensures:
- No document storage  
- No privacy risk  
- Extremely fast verification  
- Tamper-proof guarantee  

### ✔ 2. **Simulated Blockchain Transactions**
Every issued credential generates a **blockchain-style TxHash** using `keccak256`.  
This mimics on-chain behavior and provides transparency:
- `txHash`  
- Immutable metadata  
- Issuer identity  
- IPFS-style reference (simulated)  

### ✔ 3. **Credential Issuance**
Employers can issue:
- Employment certificate  
- Internship certificate  
- Experience details  
- Custom metadata  

Each credential is stored locally as a **ledger entry**, replicating blockchain state.

### ✔ 4. **File-Hash Based Verification**
Users can verify credentials in two ways:
1. Enter credential ID / TxHash  
2. Upload the certificate → system hashes the file → matches with blockchain entry  

If hashes match → **Verified**  
Else → **Invalid**  

### ✔ 5. **Audit Log (Event Tracking)**
Tracks:
- Login  
- Logout  
- Credential Issue  
- Credential Verification  
- Revocation  

All events stored locally for demo.

---

## 🛠️ Tech Stack  
- **React + Vite** (Frontend)  
- **LocalStorage** (Simulation ledger)  
- **Ethers.js** → `keccak256` hashing  
- **Simulated Blockchain Layer** using custom hashing engine  
- **No real documents stored**  

---

## 🔒 Privacy First Design  
❗ Real certificates are **NOT stored anywhere**.  
❗ Only **file hash values** are used.  
❗ Ideal for hackathons and POCs.

This aligns with secure credentialing principles where **hash=proof** and document privacy is preserved.

---

## 🧪 How Verification Works (Simple Explanation)
1. User uploads certificate  
2. System generates a SHA-256 hash  
3. Ledger is searched for a matching hash  
4. If found → Valid credential  
5. If not → Document tampered or not issued  

Blockchain-like trust, without needing a full blockchain.

---

## 📂 Project Structure
