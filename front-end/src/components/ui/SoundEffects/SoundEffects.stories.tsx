import type { Meta, StoryObj } from "@storybook/react";
import SoundEffects from "./SoundEffects";

const BasicUsage = () => {
  return (
    <div style={{ width: "300px" }}>
      <button className="btn btn-primary">Click me</button>
      <SoundEffects />
    </div>
  );
};

const meta = {
  title: "UI/SoundEffects",
  component: BasicUsage,
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof BasicUsage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
