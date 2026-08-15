"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import type { UserRole } from "@/lib/supabase/database.types";

export type Session = {
    user: User;
    name: string;
    role: UserRole;
    isAdmin: boolean;
};

const [session, setSession] = useState<Session | null>(null);
const [ready, setReady] = useState(false);

export function useSession() {


    useEffect(() => {
        const supabase = createClient();

        async function loadProfile(user: User) {
            const { data: profile } = await supabase
                .from("profiles")
                .select("name, role")
                .eq("id", user.id)
                .single();

            setSession({
                user,
                name: profile?.name ?? user.email ?? "Customer",
                role: profile?.role ?? "customer",
                isAdmin: profile?.role === "admin" || profile?.role === "manager",
            });
            setReady(true);
        }

        supabase.auth.getUser().then(({ data: { user } }) => {
            if (user) loadProfile(user);
            else setReady(true);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, authSession) => {
            if (authSession?.user) {
                loadProfile(authSession.user);
            } else {
                setSession(null);
                setReady(true);
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    return { session, ready };
}

export function clearSession() {
    setSession(null);
    setReady(true);
    return { session, ready }
}

export async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
}