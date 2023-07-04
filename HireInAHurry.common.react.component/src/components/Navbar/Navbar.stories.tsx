import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";
import { AccountCircle } from "@mui/icons-material";
import logo from "../../assets/recruitrmslogo.png";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template: StoryFn<NavbarProps> = (args: any) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyName: "Hire In A Hurry",
  title: "Requisition Tracker",
  logo: logo,
 
};
