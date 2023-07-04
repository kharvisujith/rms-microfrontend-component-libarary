import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";
import CardHeader from "./CardHeader/CardHeader";
import ArticleIcon from "@mui/icons-material/Article";

import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from "@mui/material";

export default {
  title: "Components/Card",
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: (
    <>
      <CardHeader
        title="Open Requistions"
      >
        <IconButton> <AddBoxIcon fontSize="large" /></IconButton>
      </CardHeader>
    </>
  ),
};
export const CardWithTitleAndIcon = Template.bind({});
CardWithTitleAndIcon.args = {
  children: (
    <>
      <CardHeader title="Open Requistions" titleIcon={<ArticleIcon />}>
        <IconButton> <AddBoxIcon fontSize="large" /></IconButton>
      </CardHeader>
    </>
  ),
};

export const CardWithTitleAndSubTitle = Template.bind({});
CardWithTitleAndSubTitle.args = {
  children: (
    <>
      <CardHeader
        title="Open Requistions"
        subTitle="View all the open requisitions that you have access for"
        titleIcon={<ArticleIcon />}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "150px",
          }}
        >
         <IconButton> <AddBoxIcon fontSize="large" /></IconButton>
         <IconButton> <AddBoxIcon fontSize="large" /></IconButton>
        </div>
      </CardHeader>
    </>
  ),
};
