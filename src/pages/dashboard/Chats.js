import React from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
import { useTheme } from "@mui/material/styles";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";

const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        height: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709ce6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction="row" alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archived</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          direction={"column"}
          sx={{ flexGrow: 1, overflowY: "auto", height: "50%" }}
        >
          {/* <SimpleBarStyle timeout={200} clickOnTrack={false}> */}
            <Stack spacing={2.4}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#676767",
                }}
              >
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
            <Stack spacing={2.4}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#676767",
                }}
              >
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          {/* </SimpleBarStyle> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
