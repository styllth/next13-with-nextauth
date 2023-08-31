import { getServerSession } from "next-auth";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
} from "@/components/buttons.component";
import { User } from "@/components/user.component";
import { authOptions } from "@/lib/authOptions";
import { Box, Typography } from "@mui/material";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <Box
      component="main"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Box display="flex" flexDirection="column">
        <LoginButton />
        <LogoutButton />
        <ProfileButton />

        <Typography component={"h3"} variant="h3">
          Server Session
        </Typography>
        <pre>{JSON.stringify(session)}</pre>

        <User />
      </Box>
    </Box>
  );
}
