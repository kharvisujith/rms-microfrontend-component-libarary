// import AddJobTabs from "./AddJobTabs";
// import { Meta, StoryFn } from "@storybook/react";
// import React from "react";
// import { jobstab } from "../TabNavigation/TabNavigation.stories";

// const tabs = [
//   {
//     label: "Tab 1",
//     content: <div>Content for Tab 1</div>,
//   },
//   {
//     label: "Tab 2",
//     content: <div>Content for Tab 2</div>,
//   },
//   {
//     label: "Tab 3",
//     content: <div>Content for Tab 3</div>,
//   },
//   {
//     label: "Tab 4",
//     content: <div>Content for Tab 4</div>,
//   },
// ];

// export default {
//   title: "Components/AddJobTabs",
//   component: AddJobTabs,
// } as Meta<typeof AddJobTabs>;

// const Template: StoryFn<typeof AddJobTabs> = (args) => <AddJobTabs {...args} />;

// export const jobtabs = Template.bind({});
// jobstab.args = {
//   tabs: tabs,
// };

import AddJobTabs, { ITabsData } from "./FormTabs";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

// const tabsData: ITabsData[] = [
//   {
//     label: "Upload Document",
//     content: (
//       <div>
//         Content for Tab 1 dkfjdlk lkjsd klfjsdf djljkj jfkdsj flkj klfjdkfj
//         dsjfdsjflks jflkdsjfkldjfsdklf jlsdjflskjlksj klfd jfl djsfkdsj
//         flkdsdjfdksfjldjflkdjf klsdjflk jfklsdjfldsjlf l
//       </div>
//     ),
//   },
//   {
//     label: "Job Details",
//     content: <div>Content for Tab 2</div>,
//   },
//   {
//     label: "Skills & Other Details",
//     content: <div>Content for Tab 3</div>,
//   },
//   {
//     label: "Notes",
//     content: <div>Content for Tab 4</div>,
//   },
// ];

const tabsLabel = [
  "Upload Document",
  "Job Details",
  "Skills & Other Details",
  "Notes",
];

const formComponent = <div>this is form component</div>;

export default {
  title: "Components/FormTabs",
  component: AddJobTabs,
} as Meta<typeof AddJobTabs>;

const Template: StoryFn = (args: any) => <AddJobTabs {...args} />;

export const JobTabs = Template.bind({});
JobTabs.args = {
  tabsLabel: tabsLabel,
  formComponent: formComponent,
  activeTab: 0,
  onTabClick: (activeTab: number) => {
    console.log("active tab value is", activeTab);
  },
};
