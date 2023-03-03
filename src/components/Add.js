import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    Image,
    InsertEmoticon,
    PersonAddAlt,
    VideoCameraBack,
    DateRange,
} from "@mui/icons-material/";

const StyledModal = styled(Modal)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
}));

function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    borderRadius={5}
                    p={2}
                    bgcolor={"background.default"}
                    color="text.primary"
                >
                    <Typography variant="h6" color="grey" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://material-ui.com/static/images/avatar/1.jpg"
                            alt="john doe"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="article"
                        label="What do you mind?"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={1} mb={1}>
                        <InsertEmoticon sx={{ color: "#ffc107" }} />
                        <Image color="primary" />
                        <VideoCameraBack color="success" />
                        <PersonAddAlt color="info" />
                    </Stack>
                    <ButtonGroup variant="contained" size="large" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{ width: 100 }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;
