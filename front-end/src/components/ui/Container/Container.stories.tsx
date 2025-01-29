import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Container from "./Container";

const meta = {
  title: "UI/Container",
  component: Container,
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "300px",
          border: "2px solid #333",
          background: "red",
        }}
      ></div>
    ),
  },
};
