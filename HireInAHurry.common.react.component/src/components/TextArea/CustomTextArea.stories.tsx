import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTextArea from "./CustomTextArea";

export default {
  title: "Components/TextArea",
  component: CustomTextArea,
  argTypes: { onChange: { action: "input changed" } },
} as Meta<typeof CustomTextArea>;

const Template: StoryFn<typeof CustomTextArea> = (args) => (
  <CustomTextArea {...args} />
);

export const TextArea = Template.bind({});
TextArea.args = {
  name: "Description",
  //   value: "",
  //style: { color: "red", width: "0.3rem" },
  // className: "myclass",
  sx: { width: "40rem" },
};
