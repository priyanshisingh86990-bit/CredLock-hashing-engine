

// src/context/AppContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getOrInit } from "../utils/mockdata";
import { addEvent } from "../utils/auditLog";   // ⭐ NEW (added)

const AppContext = createContext();

export function AppProvider({ children }) {
  // auth: { id, name, role: 'employer'|'employee'|'verifier' }
  const [user, setUser] = useState(() => {
    try { 
      return JSON.parse(localStorage.getItem("credlock_user")) || null; 
    } catch { 
      return null; 
    }
  });

  // persist user session
  useEffect(() => {
    localStorage.setItem("credlock_user", JSON.stringify(user));
  }, [user]);

  // -------------------------------------------------------
  // LOGIN FUNCTION  (Same as yours) + audit added
  // -------------------------------------------------------
  function loginAs(role, name = "Demo Employer") {
    const u = { id: "user_" + Date.now(), role, name };
    setUser(u);

    // ⭐ NEW: Audit Log Entry
    addEvent("login", u, {
      method: "role-login",
      role,
      name
    });

    return u;
  }

  // -------------------------------------------------------
  // LOGOUT FUNCTION  (Same as yours) + audit added
  // -------------------------------------------------------
  function logout() {
    // ⭐ NEW: Audit Log Entry
    addEvent("logout", user || null, {});

    setUser(null);
    localStorage.removeItem("credlock_user");
  }

  return (
    <AppContext.Provider value={{ user, loginAs, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
