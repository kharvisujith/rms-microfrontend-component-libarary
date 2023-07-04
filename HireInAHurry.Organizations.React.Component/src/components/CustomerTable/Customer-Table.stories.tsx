import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomerTable from "./CustomerTable";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default {
  title: "ReactComponentLibrary/CustomerTable",
  component: CustomerTable,
} as Meta<typeof CustomerTable>;

const Template: StoryFn<typeof CustomerTable> = (args: any) => (
  <CustomerTable {...args} />
);

export const CustomerTableOrg = Template.bind({});
CustomerTableOrg.args = {
  headrows: [
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
    {
      id: 1,
      customers: "HoneyWell",
      vcperson: "Raju",
      contactperson: "Mukesh",
      contactmail: "raju@gmail.com",
      contactno: "4343241",
      status: "active",
      action: "ac",
    },
  ],
  headercolumn: [
    {
      field: "customers",
      headerName: "Customers",
      flex: 1,
    },
    {
      field: "vcperson",
      headerName: "VC Person",
      flex: 1,
    },
    {
      field: "contactperson",
      headerName: "Contact Person",
      flex: 1,
    },
    {
      field: "contactmail",
      headerName: "Contact mail",
      flex: 1,
    },
    {
      field: "contactno",
      headerName: "Contact No.",
      flex: 1,
    },

    {
      field: "status",
      headerName: "Status",
      flex: 0.5,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 0.5,
    },
  ],
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
};

export const CustomerTableOrgEmpty = Template.bind({});
CustomerTableOrgEmpty.args = {
  rowsHeightSize: 40,
  columnHeaderHeightSize: 50,
  headrows: [
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "MUI X",
      col4: "is awesome",
      col5: "MUI X",
      col6: "is awesome",
      col7: "MUI X",
      getRowClassName: "super-app-theme--column",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "MUI X",
      col4: "is awesome",
      col5: "MUI X",
      col6: "is awesome",
      col7: "MUI X",
      getRowClassName: "super-app-theme--column",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "MUI X",
      col4: "is awesome",
      col5: "MUI X",
      col6: "is awesome",
      col7: "MUI X",
      getRowClassName: "super-app-theme--column",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "MUI X",
      col4: "is awesome",
      col5: "MUI X",
      col6: "is awesome",
      col7: "MUI X",
      getRowClassName: "super-app-theme--column",
    },
    {
      id: 1,
      col1: "Hello",
      col2: "World",
      col3: "MUI X",
      col4: "is awesome",
      col5: "MUI X",
      col6: "is awesome",
      col7: "MUI X",
      getRowClassName: "super-app-theme--column",
    },
  ],

  headercolumn: [
    {
      field: "col1",
      headerName: "Customers",
      //    width: 150,
      headerClassName: "super-app-theme--header",
    },
  ],
};
