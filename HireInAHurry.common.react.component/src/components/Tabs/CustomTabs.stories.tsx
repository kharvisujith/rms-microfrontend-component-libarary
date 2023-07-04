import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomTabs from "./CustomTabs";
import { Card } from "@mui/material";

export default {
  title: "Components/CustomTabs",
  component: CustomTabs,
} as Meta<typeof CustomTabs>;

const labelData = {
  A: "All Candidates",
  B: "New Candidates",
  C: "Associated Candidates",
};

const TabComponentA = () => {
  return <Card variant="outlined">Tab A content</Card>;
};

const TabComponentB = () => {
  return <Card variant="outlined">Tab B content</Card>;
};

const TabComponentC = () => {
  return <Card variant="outlined">Tab C content</Card>;
};

const color = "#000000";
const components = [TabComponentA, TabComponentB, TabComponentC];

const Template: StoryFn<typeof CustomTabs> = (args) => <CustomTabs {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  label: labelData,
  components: components,
  color: color,
};
