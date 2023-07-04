import React from "react";
import CustomDialog from "./Dialog";

const content = "this is dialog components";
export default {
  title: "Components/CustomDialog",
  component: CustomDialog,
};

export const Primary = {
  args: {
    title: "Candidate Name",
    subtitle: "History of Past Apllications and interviews",
    open: true,
    content: content,
    actions: [
      { label: "History", onClick: () => console.log("Cancel clicked") },
      { label: "Notes", onClick: () => console.log("Confirm clicked") },
    ],
  },
};
