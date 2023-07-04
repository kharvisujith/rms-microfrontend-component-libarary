import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

export interface DialogActionProps {
  label?: string;
  onClick?: () => void;
}

export interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  actions: DialogActionProps[];
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  content,
  actions,
  subtitle
}) => {
  return (
    <Dialog fullWidth={true} maxWidth={"xs"} open={open} onClose={onClose}>
      <DialogTitle fontFamily={"Inter"} color={"white"} bgcolor={"#396BC1"}>
        {title}
        {subtitle && <div  style={{ fontFamily:"Inter"  ,fontSize: "14px", color: "white" , marginTop:"2px" }}>{subtitle}</div>}
      </DialogTitle>
      <div
        style={{
          height: "1.2rem",
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: "#C2D8EA",
        }}
      >
        <DialogActions>
          {actions.map((action, index) => (
            <Button key={index} onClick={action.onClick}>
              {action.label}
            </Button>
          ))}
        </DialogActions>
      </div>
      <DialogContent
        style={{
          borderBottom: "1.2rem solid #C2D8EA",
          overflowY: "hidden",
        }}
        children={content}
      ></DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
