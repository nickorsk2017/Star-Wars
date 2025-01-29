"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, TextInput } from "@/components/ui";
import { Pencil } from "@/components/icons";
import "./styles.css";

type Props = {
  data: Partial<Entity.Character>;
  updateCharacter: (data: Partial<Entity.Character>) => void;
};

type FormValue = Pick<Entity.Character, "name" | "height" | "mass">;

const rules = {
  name: {
    required: "This is required",
    minLength: {
      value: 3,
      message: "This input less 3",
    },
  },
  height: {
    required: "This is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a number",
    },
  },
  mass: {
    required: "This is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "Please enter a number",
    },
  },
};

const EditCharacter: FC<Props> = ({ data: initData, updateCharacter }) => {
  const [modalShown, showModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      name: initData.name,
      height: initData.height,
      mass: initData.mass,
    },
  });

  const onClick = async () => {
    showModal(true);
  };

  const closeModal = () => {
    showModal(false);
  };

  const onSubmit = (data: FormValue) => {
    showModal(false);
    updateCharacter(data);
  };

  return (
    <div className="fa-edit-character">
      <Pencil className="fa-detail__pencil btn btn-ghost" onClick={onClick} />
      <Modal title="Edit character" open={modalShown} onClose={closeModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Name"
            register={register}
            name="name"
            inputTestId="Name"
            validation={rules.name}
            errorText={errors?.name?.message}
          />
          <TextInput
            label="Height"
            register={register}
            name="height"
            inputTestId="Height"
            validation={rules.height}
            errorText={errors?.height?.message}
          />
          <TextInput
            label="Mass"
            register={register}
            name="mass"
            inputTestId="Mass"
            validation={rules.mass}
            errorText={errors?.mass?.message}
          />
          <button
            role="button"
            className="fa-edit-character__btn"
            type="submit"
            data-testid="edit-character-btn"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditCharacter;
