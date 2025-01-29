import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal, { Props } from "./Modal";

const TestComponent = (args: Props) => {
  const [shown, showModal] = useState(false);

  const close = () => {
    showModal(false);
  };

  const show = () => {
    showModal(true);
  };

  return (
    <div style={{ width: "300px" }}>
      <button className="btn btn-primary" onClick={show}>
        Show modal
      </button>
      <Modal title={args.title} open={args.open || shown} onClose={close}>
        Hello World
      </Modal>
    </div>
  );
};

const meta = {
  title: "UI/Modal",
  component: Modal,
  decorators: (Story, options) => {
    return <TestComponent {...options.args} />;
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: "Test modal",
    open: false,
    onClose: () => {},
  },
};
