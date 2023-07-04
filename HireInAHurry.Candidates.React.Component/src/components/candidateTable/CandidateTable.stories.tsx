import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import EditIcon from "@mui/icons-material/Edit";
import { candidateTableData } from "../../data/data";
import CandidateTable from "./CandidateTable";

export default {
  title: "Open Requistion Tracker Page/Jobs Table",
  component: CandidateTable,
} as Meta<typeof CandidateTable>;

const Template: StoryFn<typeof CandidateTable> = (args: any) => (
  <CandidateTable {...args} />
);

export const Jobs_Table_Empty = Template.bind({});
Jobs_Table_Empty.args = {
  headrows: [],
  headercolumn: candidateTableData.columnData,
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
};

export const Jobs_Table_More_Data = Template.bind({});
Jobs_Table_More_Data.args = {
  headrows: candidateTableData.rowData,
  headercolumn: candidateTableData.columnData,
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
};
