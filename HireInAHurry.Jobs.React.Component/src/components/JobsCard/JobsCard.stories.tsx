import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import JobsCard from "./JobsCard";


export default {
  clientName: "Open Requistion Tracker Page/Jobs Card",
  component: JobsCard,
} as Meta<typeof JobsCard>;

const Template: StoryFn<typeof JobsCard> = (args: any) => (
  <JobsCard {...args} />
);

export const Jobs_Card_Default = Template.bind({});
Jobs_Card_Default.args = {
    clientName:"All Clients",
    totalAssociateCandidatesCount:100,
    activeJobsCount:40,
    activePercentageClient:25,
    activePercentageRecruiter:25
}
export const Jobs_Card_Default1 = Template.bind({});
Jobs_Card_Default1.args = {
    clientName:"All Clients",
    totalAssociateCandidatesCount:100,
    activeJobsCount:40,
    activePercentageClient:100,
    activePercentageRecruiter:25,
    selected:false,
    onClick:()=>{
      
    }
}

export const Jobs_Card_Selected = Template.bind({});
Jobs_Card_Selected.args = {
    clientName:"Augmento",
    totalAssociateCandidatesCount:7,
    activeJobsCount:9,
    activePercentageClient:50,
    activePercentageRecruiter:0,
    selected:true,
    onClick:()=>{

    }
}
