import Button from "../button/button";
import { AnimatedSheet } from "./AnimatedSheet";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof AnimatedSheet> = {
  title: "Sheet/AnimatedSheet",
  component: AnimatedSheet,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedSheet>;

// ----------------------------------------------------
// WRAPPER (controls open/close since AnimatedSheet
// returns `button` when closed)
// ----------------------------------------------------
function SheetWrapper(args: any) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSheet
      {...args}
      open={open}
      onClose={() => setOpen(false)}
      button={
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Sheet
        </Button>
      }
    >
      <div className="grid gap-x-4 gap-y-6 p-5">
        <div className="mb-12 pb-4">
          <h1 className="rtl:text-3xl-rtl ltr:text-2xl-ltr text-fourth">
            Account password
          </h1>
        </div>
      </div>
    </AnimatedSheet>
  );
}

// ----------------------------------------------------
// STORIES
// ----------------------------------------------------

// 🔵 DEFAULT — also acts as alias for Right (fixes HMR)
export const Default: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "right",
    animate: "right",
  },
};

// ▶️ Right
export const Right: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "right",
    animate: "right",
  },
};

// ◀️ Left
export const Left: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "left",
    animate: "left",
  },
};

// 🔼 Top
export const Top: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "top",
    animate: "top",
  },
};

// 🔽 Bottom
export const Bottom: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "bottom",
    animate: "bottom",
  },
};

// ⭕ Center
export const Center: Story = {
  render: (args) => <SheetWrapper {...args} />,
  args: {
    position: "center",
    animate: "bottom", // slide-up looks best for modal center
  },
};
