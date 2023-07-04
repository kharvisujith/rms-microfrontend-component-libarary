import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTooltip from "./CustomTooltip";
import { Button } from "@mui/material";

export default {
  title: "Components/CustomTooltip",
  component: CustomTooltip,
} as Meta<typeof CustomTooltip>;

const Template: StoryFn<typeof CustomTooltip> = (args) => (
  <CustomTooltip {...args} />
);

export const tooltip = Template.bind({});
tooltip.args = {
  children: <Button variant="outlined">Tooltip</Button>,
  title: "Hover me",
  arrow: true,
};
