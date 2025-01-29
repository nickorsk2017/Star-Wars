import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta = {
  title: "Icons/Logo",
  component: Logo,
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
