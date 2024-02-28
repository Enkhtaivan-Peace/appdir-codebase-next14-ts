"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import "./Nav.css";

function Nav() {
  const { data: session }: any = useSession();
  return (
    <nav className="nav" aria-label="Global">
      <ul>
        {!session ? (
          <>
            <Link href="/login">
              <li>Login</li>
            </Link>
            <Link href="/register">
              <li>Register</li>
            </Link>
            <Link href="/render/csr">
              <li>client page</li>
            </Link>
            <Link href="/render/ssr">
              <li>ssr page</li>
            </Link>
          </>
        ) : (
          <>
            {session?.user?.email}
            <li>
              <button
                onClick={() => signOut()}
                className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </li>
            <Link href="/dashboard">
              <li>Dashboard</li>
            </Link>
          </>
        )}
        <li>
          <Link href="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
