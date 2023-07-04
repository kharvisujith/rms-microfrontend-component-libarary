import JobsDrawerCard from "./JobsDrawerCard";
import { StoryFn, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "Components/drawerCard",
  component: JobsDrawerCard,
} as Meta<typeof JobsDrawerCard>;

const Template: StoryFn<typeof JobsDrawerCard> = (args) => (
  <JobsDrawerCard {...args} />
);

export const tabsCard = Template.bind({});

tabsCard.args = {
  title: "Card title",
  children: <div>content</div>,
};
