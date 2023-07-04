import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const AddNotes = () => {
  const [notesText, setNotesText] = useState<string>("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNotesText(event.target.value);
  };

  const handleAddNotesClick = () => {
    //call post api to post data here
    console.log("onclick of send is called and data is", notesText);
  };
  return (
    <>
      <Box>
        <OutlinedInput
          type="text"
          name="add-notes"
          placeholder="New Note"
          value={notesText}
          onChange={handleInputChange}
          sx={{ height: "1.5rem", width: "100%", fontSize: "0.6rem" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleAddNotesClick}
                size="small"
                disabled={notesText ? false : true}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </>
  );
};

export default AddNotes;
