import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Modal from "../Modal";
import React, { useEffect, useState } from "react";

const TestModal = () => {
  const [modalShown, showModal] = useState(false);

  useEffect(() => {
    showModal(true);
  }, []);

  const closeModal = () => {
    showModal(true);
  };

  return (
    <Modal title="Test Modal" open={modalShown} onClose={closeModal}>
      Test
    </Modal>
  );
};

describe("Check Modal component", () => {
  it("render component", async () => {
    const { getByText, getByRole } = render(<TestModal />);
    expect(getByText("Test")).toBeTruthy();
    expect(getByText("Test Modal")).toBeTruthy();

    const modalElement = (await getByRole("dialog", {
      hidden: true,
    })) as HTMLDialogElement;

    // chech modal is opened
    expect(modalElement.hasAttribute("open")).toBeTruthy();
  });
});
