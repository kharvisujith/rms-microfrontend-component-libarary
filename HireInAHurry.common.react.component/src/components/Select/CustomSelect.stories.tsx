import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomSelect, { IselectOptions } from "./CustomSelect";

const options: IselectOptions[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default {
  title: "Components/Select",
  component: CustomSelect,
  argTypes: {
    // color: { control: "select" }, // Adding color prop to control in Storybook
  },
} as Meta<typeof CustomSelect>;

const Template: StoryFn<typeof CustomSelect> = (args) => (
  <CustomSelect {...args} />
);

export const select = Template.bind({});
select.args = {
  options: options,
  // selectedValue: "",
  //style: { color: "red", width: "5rem" },
  // className: "myclass",
  // sx: { color: "blue" },
};

// export const ClickMe = Template.bind({});
// ClickMe.args = {
//   label: "Click me!",
// };
