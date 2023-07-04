import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import CandidateCard from "./CandidateCard";

export default {
  title: "Components/CandiateCard",
  component: CandidateCard,
} as Meta<typeof CandidateCard>;

const Template: StoryFn<typeof CandidateCard> = (args) => (
  <CandidateCard {...args} />
);

export const availabeCandidates = Template.bind({});

availabeCandidates.args = {
  title: "Avaliable Cadidates",
  candidateNumber: 50,
};
