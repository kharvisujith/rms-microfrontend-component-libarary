import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTextFiled from "./CustomTextField";

export default {
  title: "Components/TextFiled",
  component: CustomTextFiled,
  argTypes: { onChange: { action: "input changed" } },
} as Meta<typeof CustomTextFiled>;

const Template: StoryFn<typeof CustomTextFiled> = (args) => (
  <CustomTextFiled {...args} />
);

export const TextFiled = Template.bind({});
TextFiled.args = {
  name: "Age",
  value: "",
  placeholder: "Enter age",
  //style: { color: "red", width: "5rem" },
  // className: "myclass",
  sx: { width: "40rem" },
};
