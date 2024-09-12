import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useCreateChat } from "../../../hooks/useCreateChat";
import router from "../../Routes";


interface ChatListAddProps {
  open: boolean;
  handleClose: () => void;
  
}

const ChatListAdd = ({ open, handleClose }: ChatListAddProps) => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [name, setName] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [createChat] = useCreateChat();
  const onClose = () => {
    setIsPrivate(false);
    setName("");
    setError("");
    handleClose();
  }
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>
          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={
                <Switch
                  defaultChecked={isPrivate}
                  value={isPrivate}
                  onChange={(event) => setIsPrivate(event.target.checked)}
                />
              }
              label="Private"
            />
          </FormGroup>
          {isPrivate ? (
            <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" />
              <IconButton sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          ) : (
            <TextField
              label="Name"
              error={!!error}
              helperText={error}
              onChange={(event) => setName(event.target.value)}
            />
          )}
          <Button
            variant="outlined"
            onClick={async () => {
              if (!name) {
                setError("Chat name is required");
                return;
              }
              try{
                const chat = await createChat({
                variables: {
                  createChatInput: { isPrivate, name },
                },
              });
              onClose();
              router.navigate(`/chats/${chat.data?.createChat._id}`);
            }  
              catch(err){
                setError("UNKNOWN ERROR");
              }
            }}
          >
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ChatListAdd;