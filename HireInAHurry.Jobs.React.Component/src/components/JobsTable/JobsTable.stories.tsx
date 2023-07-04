import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import JobsTable from "./JobsTable";
import EditIcon from '@mui/icons-material/Edit';
import JobsTitleCellRenderer from "./JobsTitleCellRenderer";
import { tableData } from "../../data/data";

export default {
  title: "Open Requistion Tracker Page/Jobs Table",
  component: JobsTable,
} as Meta<typeof JobsTable>;

const Template: StoryFn<typeof JobsTable> = (args: any) => (
  <JobsTable {...args} />
);


export const Jobs_Table_Empty = Template.bind({});
Jobs_Table_Empty.args = {
  headrows: [],
  headercolumn: tableData.columnData,
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
};


export const Jobs_Table_More_Data = Template.bind({});
Jobs_Table_More_Data.args = {
  headrows: tableData.rowData,
  headercolumn: tableData.columnData,
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
};