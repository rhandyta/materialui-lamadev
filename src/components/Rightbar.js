import {
    Avatar,
    AvatarGroup,
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";

function Rightbar() {
    return (
        <Box
            flex={2}
            p={2}
            sx={{
                display: {
                    xs: "none",
                    sm: "block",
                },
            }}
        >
            <Box position="fixed" width={300}>
                <Typography variant="h6" fontWeight={100} mb={2}>
                    Online Friends
                </Typography>
                <AvatarGroup max={6}>
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                        alt="Jarvis Hemilton"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/2.jpg"
                        alt="Races Min"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/3.jpg"
                        alt="Hoking Na"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/4.jpg"
                        alt="Greylis Jam"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/5.jpg"
                        alt="Sturise Man"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/6.jpg"
                        alt="Alice Nan"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/7.jpg"
                        alt="Nuno A"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/8.jpg"
                        alt="Khajn W"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/9.jpg"
                        alt="Khorima F"
                    />
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/10.jpg"
                        alt="Nice Man"
                    />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} my={2}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            loading="lazy"
                            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                            alt="break fast"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            loading="lazy"
                            src="https://material-ui.com/static/images/image-list/burgers.jpg"
                            alt="burgers"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            loading="lazy"
                            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
                            alt="camera"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} my={2}>
                    Latest Conversations
                </Typography>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://material-ui.com/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {
                                        " — I'll be in your neighborhood doing errands this…"
                                    }
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Travis Howard"
                                src="https://material-ui.com/static/images/avatar/2.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {
                                        " — Wish I could come, but I'm out of town this…"
                                    }
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;
