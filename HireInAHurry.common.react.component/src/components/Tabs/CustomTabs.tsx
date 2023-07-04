import React from "react";
import { Tabs, Tab, useTheme, useMediaQuery } from "@mui/material";

export interface CustomTabsProps {
  label: {
    [key: string]: string;
  };
  components: React.ComponentType[];
  color?: "primary" | "secondary" | string;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  label,
  components,
  color,
}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabComponent = components[value];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: color || theme.palette.primary.main,
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
          "& .MuiTab-root": {
            textTransform: "none",
          },
        }}
        textColor={
          color === "primary" || color === "secondary" ? color : "inherit"
        }
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : undefined}
        style={{ color: color ? color : undefined }}
      >
        {Object.keys(label).map((key) => (
          <Tab key={key} label={label[key]} />
        ))}
      </Tabs>
      <TabComponent />
    </div>
  );
};

export default CustomTabs;
