import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import MyChats from "../components/MyChats";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats  />}
        {/* {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )} */}
      </Box>
    </div>
  );
};

export default Chatpage;