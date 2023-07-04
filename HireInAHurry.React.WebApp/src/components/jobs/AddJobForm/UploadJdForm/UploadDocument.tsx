import "./UploadDocument.styles.scss";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, CardContent, Grid, Input, Typography } from "@mui/material";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Redux/store/configureStore";

const UploadDocument: React.FunctionComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    },
    [setSelectedFiles, selectedFiles]
  );
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((state: any) => state.jobs);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleFormNextPageChange = () => {
    dispatch({
      type: "jobs/setActiveTab",
      payload: { activeTab: activeTab + 1 },
    });
  };
  return (
    <>
      {" "}
      <CardContent>
        <Box
          {...getRootProps()}
          sx={{
            textAlign: "center",
            cursor: "pointer",
            border: "2px dashed #A1A3AA",
            borderWidth: "1px",
            padding: "20px",
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon
            fontSize="large"
            sx={{ color: "#0076FF", fontSize: "100px" }}
          />
          <Typography variant="h6" mt={2}>
            {isDragActive ? "Drop the files here" : "Drag & drop/Add your File"}
          </Typography>
        </Box>
        <Grid container mt={2}>
          {selectedFiles.map((item, index) => (
            <Grid item key={index} xs={12} sx={{ mb: 1 }}>
              <Typography>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" onClick={handleFormNextPageChange}>
            Upload
          </Button>
        </Box>
      </CardContent>
    </>
  );
};

export default UploadDocument;
