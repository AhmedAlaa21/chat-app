import React from "react";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";

const Group = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          }}
        >
          <Stack
            p={3}
            spacing={2}
            sx={{
              maxHeight: "100vh",
            }}
          >
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709ce6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." />
              </Search>
            </Stack>
            <Stack direction={"row"} alignItems={'center'} justifyContent={"space-between"}>
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton>
                <Plus
                  style={{ color: theme.palette.primary.main }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
      </Stack>
    </>
  );
};

export default Group;
