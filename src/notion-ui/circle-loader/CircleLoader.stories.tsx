import { CircleLoader } from "./circle-loader"; // Adjust the import path as needed
import { CircleLoaderProps } from "./circle-loader";

// Meta information for Storybook
export default {
  title: "Components/CircleLoader", // This will be the folder and component name in Storybook's sidebar
  component: CircleLoader, // The component being showcased
  argTypes: {
    className: { control: "text" },
    labelclassname: { control: "text" },
    label: { control: "text" },
    parentClassName: { control: "text" },
  },
} as const;

// Template to generate different versions of the CircleLoader component
const Template = (args: CircleLoaderProps) => <CircleLoader {...args} />;

// Default story with default props
export const Default = Template.bind({});
Default.args = {
  label: "Loading...",
};

// Story with a custom label
export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Please wait while we fetch data...",
};

// Story with custom styles (for demonstration purposes)
export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: "Fetching resources...",
  className: "text-blue-500", // Custom SVG color
  labelclassname: "text-lg font-bold", // Custom label styling
  parentClassName: "bg-gray-200 p-4", // Custom container styling
};
