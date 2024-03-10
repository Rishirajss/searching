"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { ExitIcon } from "@radix-ui/react-icons";

export default function AuthButton() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const userLogin = localStorage.getItem('userLogin');
    if (userLogin) {
      // If token is found in local storage, user is logged in
      setUserLoggedIn(true);
    }
  }, []);

  return (
    <>
      {userLoggedIn ? (
        <Button onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('userLogin');

          setUserLoggedIn(false);
        }}
        variant="outline"
        >
          <ExitIcon/>
        </Button>
      ) : (
        <Link href="/login">
          <Button variant="outline">
            Login
          </Button>
        </Link>
      )}
    </>
  );
}
