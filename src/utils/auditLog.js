// src/utils/auditLog.js
const EVENTS_KEY = "credlock_events";

function readEvents() {
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveEvents(arr) {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(arr));
}

export function addEvent(type, user = null, meta = {}) {
  const ev = {
    id: "ev_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8),
    type,
    user: user ? { id: user.id, name: user.name, role: user.role } : null,
    meta,
    ts: new Date().toISOString()
  };
  const list = readEvents();
  list.unshift(ev);
  saveEvents(list);
  return ev;
}

export function getEvents(opts = {}) {
  const list = readEvents();
  if (opts.limit) return list.slice(0, opts.limit);
  return list;
}
export function clearEvents() {
  saveEvents([]);
}
