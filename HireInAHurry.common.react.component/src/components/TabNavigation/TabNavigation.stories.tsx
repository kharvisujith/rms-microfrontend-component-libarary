import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TabNaviaton from "./TabNavigation";

const CandidatetabList = ["Talent Pool", "Add Talent", "Talent Shop"];
const jobsTabList = ["Open Requisitions", "New Application", "Active Pipeline"];
const organizationTabList = ["Organizations", "Add Organizations"];

export default {
  title: "Components/tabs",
  component: TabNaviaton,
  argTypes: { onChange: { action: "input changed" } },
} as Meta<typeof TabNaviaton>;

const Template: StoryFn<typeof TabNaviaton> = (args) => (
  <TabNaviaton {...args} />
);

export const candidatetab = Template.bind({});
candidatetab.args = {
  tabList: CandidatetabList,
  currentTab: "Talent Pool",
};

export const jobstab = Template.bind({});
jobstab.args = {
  tabList: jobsTabList,
  currentTab: "Open Requisitions",
};
