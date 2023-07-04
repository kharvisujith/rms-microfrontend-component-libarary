import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomPagination from "./CustomPagination";
import ICustomPagination from "./CustomPagination";

export default {
  title: "Components/Pagination",
  component: CustomPagination,
} as Meta<typeof ICustomPagination>;

const Template: StoryFn<typeof ICustomPagination> = (args: any) => (
  <CustomPagination {...args} />
);

export const pagination = Template.bind({});
pagination.args = {
  count: 4,
  page: 1,
  size: "small",
  //sx: { backgroundColor: "red" },
  // className: "abc",
  // style: { backgroundColor: "red" },
};
