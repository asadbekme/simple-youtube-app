import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../constants/index";
import { colors } from "../../constants/colors";
import { SearchBar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: colors.primary,
      }}
      p={1}
    >
      <Link to={"/"}>
        <img src={logo} alt="Logo" width={111} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
