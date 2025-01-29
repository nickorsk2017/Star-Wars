import type { Meta, StoryObj } from "@storybook/react";
import Pencil from "./Pencil";

const meta = {
  title: "Icons/Pencil",
  component: Pencil,
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Pencil>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
