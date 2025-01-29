import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Avatar from "./Avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
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
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
