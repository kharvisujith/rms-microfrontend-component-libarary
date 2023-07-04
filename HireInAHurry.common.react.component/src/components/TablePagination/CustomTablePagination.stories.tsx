import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomTablePagination from "./CustomTablePagination";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default {
  title: "Components/TablePagination",
  component: CustomTablePagination,
} as Meta<typeof CustomTablePagination>;

const Template: StoryFn<typeof CustomTablePagination> = (args: any) => (
  <CustomTablePagination {...args} />
);

export const TablePagination = Template.bind({});
TablePagination.args = {
  count: 100,
  page: 1,
  rowsPerPage: 10,
  //style: { color: "red" },
  //sx:{color:"red"}
  //className:"myclassname"
};
