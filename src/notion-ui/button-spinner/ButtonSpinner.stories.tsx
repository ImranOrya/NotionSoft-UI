import Button from "../button/button";
import ButtonSpinner from "./button-spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonSpinner> = {
  title: "Loader/ButtonSpinner",
  component: ButtonSpinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    loading: { control: "boolean" },
    className: { control: "text" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSpinner>;

/* -----------------------------
   Template: how ButtonSpinner 
   is intended to be used 
------------------------------ */
const Template = (args) => (
  <Button disabled={args.loading} className="flex items-center gap-3">
    <ButtonSpinner {...args} />
  </Button>
);

/* -----------------------------
   Stories
------------------------------ */

export const Default: Story = {
  render: Template,
  args: {
    loading: false,
    children: "Save",
  },
};

export const Loading: Story = {
  render: Template,
  args: {
    loading: true,
    children: "Saving...",
  },
};

export const WithCustomClass: Story = {
  render: Template,
  args: {
    loading: true,
    className: "text-blue-600 font-semibold",
    children: "Processing...",
  },
};
