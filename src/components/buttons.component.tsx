"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { Button } from "@mui/material";

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export const ProfileButton = () => {
  return (
    <Button LinkComponent={Link} href="/profile">
      Profile
    </Button>
  );
};
