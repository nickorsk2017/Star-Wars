import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Loading from "./Loading";

const meta = {
  title: "UI/Loading",
  component: Loading,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    loading: true,
  },
};
