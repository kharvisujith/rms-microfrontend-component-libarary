import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import AccordionComponent, { AccordionComponentProps } from './AccordionComponent';
import JobsCard from '../JobsCard/JobsCard';

export default {
  title: 'Components/AccordionComponent',
  component: AccordionComponent,
  argTypes: {
    cardsPerRow: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: StoryFn<AccordionComponentProps> = (args) => <AccordionComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
        <JobsCard
          clientName="All Clients"
          activeJobsCount={10}
          totalAssociateCandidatesCount={5}
          activePercentageClient={80}
          activePercentageRecruiter={60}
          selected={true}
          onClick={()=>{}}
        />,
        <JobsCard
          clientName="Augmento"
          activeJobsCount={15}
          totalAssociateCandidatesCount={8}
          activePercentageClient={70}
          activePercentageRecruiter={75}
          selected={false}
          onClick={()=>{}}
        />,
        <JobsCard
          clientName="Honeywell"
          activeJobsCount={20}
          totalAssociateCandidatesCount={12}
          activePercentageClient={90}
          activePercentageRecruiter={80}
          selected={false}
          onClick={()=>{}}
        />,
        <JobsCard
        clientName="Cyncly"
        activeJobsCount={10}
        totalAssociateCandidatesCount={5}
        activePercentageClient={80}
        activePercentageRecruiter={60}
        selected={false}
        onClick={()=>{}}
      />,
      <JobsCard
        clientName="TCS"
        activeJobsCount={15}
        totalAssociateCandidatesCount={8}
        activePercentageClient={70}
        activePercentageRecruiter={75}
        selected={false}
        onClick={()=>{}}
      />,
      <JobsCard
        clientName="Infosys"
        activeJobsCount={20}
        totalAssociateCandidatesCount={12}
        activePercentageClient={90}
        activePercentageRecruiter={80}
        selected={false}
        onClick={()=>{}}
      />,
      <JobsCard
      clientName="Capgemini"
      activeJobsCount={10}
      totalAssociateCandidatesCount={5}
      activePercentageClient={80}
      activePercentageRecruiter={60}
      selected={false}
      onClick={()=>{}}
    />,
    <JobsCard
      clientName="Accenture"
      activeJobsCount={15}
      totalAssociateCandidatesCount={8}
      activePercentageClient={70}
      activePercentageRecruiter={75}
      selected={false}
      onClick={()=>{}}
    />,
      ],

};

// export const FewCards = Template.bind({});
// FewCards.args = {
//     children: [
//         <JobsCard
//           clientName="Job 1"
//           activeJobsCount={10}
//           totalAssociateCandidatesCount={5}
//           activePercentageClient={80}
//           activePercentageRecruiter={60}
//         />,
//         <JobsCard
//           clientName="Job 2"
//           activeJobsCount={15}
//           totalAssociateCandidatesCount={8}
//           activePercentageClient={70}
//           activePercentageRecruiter={75}
//         />,
//         <JobsCard
//           clientName="Job 3"
//           activeJobsCount={20}
//           totalAssociateCandidatesCount={12}
//           activePercentageClient={90}
//           activePercentageRecruiter={80}
//         />,
//       ],

// };

// export const AllCardsVisible = Template.bind({});
// AllCardsVisible.args = {
//     children: [
//         <JobsCard
//           clientName="Job 1"
//           activeJobsCount={10}
//           totalAssociateCandidatesCount={5}
//           activePercentageClient={80}
//           activePercentageRecruiter={60}
//         />,
//         <JobsCard
//           clientName="Job 2"
//           activeJobsCount={15}
//           totalAssociateCandidatesCount={8}
//           activePercentageClient={70}
//           activePercentageRecruiter={75}
//         />,
//         <JobsCard
//           clientName="Job 3"
//           activeJobsCount={20}
//           totalAssociateCandidatesCount={12}
//           activePercentageClient={90}
//           activePercentageRecruiter={80}
//         />,
//         <JobsCard
//           clientName="Job 4"
//           activeJobsCount={8}
//           totalAssociateCandidatesCount={4}
//           activePercentageClient={85}
//           activePercentageRecruiter={65}
//         />,
//       ],
// };