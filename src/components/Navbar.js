import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

function Navbar() {
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);
    return (
        <AppBar position="sticky">
            <StyleToolbar>
                <Typography
                    variant="h6"
                    sx={{
                        display: {
                            xs: "none",
                            sm: "block",
                        },
                    }}
                >
                    LAMA DEV
                </Typography>
                <Pets
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none",
                        },
                    }}
                />
                <Search>
                    <InputBase placeholder="search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={1} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={1} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        src=""
                        sx={{ width: "30px", height: "30px" }}
                        onClick={() => setAnchorEl(true)}
                    />{" "}
                    <Typography variant="span">John Doe</Typography>
                </Icons>
                <UserBox onClick={() => setAnchorEl(true)}>
                    <Avatar src="" sx={{ width: "30px", height: "30px" }} />
                    <Typography variant="span">John Doe</Typography>
                </UserBox>
            </StyleToolbar>
            <Menu
                id="basic-menu"
                anchorEl={open}
                open={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                onClose={() => setAnchorEl(false)}
                MenuListProps={{
                    "aria-labelledby": "basic-avatar",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;
