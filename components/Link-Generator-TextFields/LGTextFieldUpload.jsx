import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import styles from "./lgTextField.module.css";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Button, Typography } from "@mui/material";
import { Dialog, DialogContent, DialogActions } from "@mui/material";

import { useState, useRef } from "react";

function TextFieldWithUploadButton({
  label = "Upload File",
  placeholder = "Select a file",
  startIcon,
}) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ["image/jpeg", "image/png", "image/svg+xml"];
      if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please select a JPG, PNG, or SVG file.");
        return;
      }

      // Validate file size
      const maxSizeInBytes = 10 * 1024 * 1024; // 10 MB
      if (file.size > maxSizeInBytes) {
        alert("File size exceeds the maximum limit of 10 MB.");
        return;
      }

      setSelectedFile(file);
    }
    setOpen(false);
  };

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.textContainer}>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        aria-readonly
        value={selectedFile ? selectedFile.name : ""}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                startIcon={<FileUploadOutlinedIcon />}
                onClick={handleUploadButtonClick}
                style={{
                  textTransform: "none",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Upload
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <input
        type="file"
        accept="image/jpeg, image/png, image/svg+xml"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {/* Dialog___________________________________ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            width: "500px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Typography>Please select a file to upload:</Typography>
          <Typography variant="subtitle1">SVG/JPG/PNG</Typography>
          <Typography variant="subtitle1">Max limit: 10 MB</Typography>
          <Typography variant="subtitle1">
            {selectedFile ? selectedFile.name : ""}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<FileUploadOutlinedIcon />}
            onClick={handleUpload}
          >
            Upload
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TextFieldWithUploadButton;
