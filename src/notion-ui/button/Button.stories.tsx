import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "Button/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "warning"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    variant: "warning",
  },
};
export const Success: Story = {
  args: {
    children: "Success Button",
    variant: "success",
  },
};
