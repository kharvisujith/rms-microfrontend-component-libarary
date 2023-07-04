// import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import "./UploadDocument.style.scss";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { CustomButton } from "../CustomButton";

export interface IUploadDocumentProps {
  onClick?: () => void;
  label: string;
}
const UploadDocument = ({ onClick, label }: IUploadDocumentProps) => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
    },
    [setSelectedFiles, selectedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Card variant="elevation" sx={{ p: 3 }}>
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
              {isDragActive
                ? "Drop the files here"
                : "Drag & drop/Add your File"}
            </Typography>
          </Box>
          <Grid container mt={2}>
            {selectedFiles.map((item, index) => (
              <Grid item key={index} xs={12} sx={{ mb: 1 }}>
                <Typography>{item.name}</Typography>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CustomButton label={label} onClick={onClick} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UploadDocument;
