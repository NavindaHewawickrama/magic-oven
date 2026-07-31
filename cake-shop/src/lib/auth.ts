"use client";

import { useSyncExternalStore } from "react";

export type Session = { email: string; name?: string; isAdmin: boolean };

const STORAGE_KEY = "sc_session";

const listeners = new Set<() => void>();
let cachedSession: Session | null = readSession();

function readSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

function notify() {
  cachedSession = readSession();
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", notify);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", notify);
  };
}

function getSnapshot(): Session | null {
  return cachedSession;
}

function getServerSnapshot(): Session | null {
  return null;
}

export function getSession(): Session | null {
  return cachedSession;
}

export function setSession(session: Session) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  notify();
}

export function clearSession() {
  window.localStorage.removeItem(STORAGE_KEY);
  notify();
}

export function useSession() {
  const session = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return { session, ready };
}
