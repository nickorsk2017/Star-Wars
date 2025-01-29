"use client";
import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { DetailCharacterState } from "@/store/characters/detail/store";
import { Modal, ModalHandler, InputText } from "@/components/ui";
import { Pencil } from "@/components/icons";
import "./styles.css";

type Props = {
  data: Entity.Character;
  updateCharacter: DetailCharacterState["updateCharacter"];
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

  const refModal = useRef<ModalHandler>(null);

  const onClick = async () => {
    refModal.current!.show();
  };

  const onSubmit = (data: FormValue) => {
    refModal.current!.close();
    updateCharacter(data);
  };

  return (
    <div className="fa-edit-character">
      <Pencil className="fa-detail__pencil btn btn-ghost" onClick={onClick} />
      <Modal title="Edit character" ref={refModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Name"
            register={register}
            name="name"
            validation={rules.name}
            errorText={errors?.name?.message}
          />
          <InputText
            label="Height"
            register={register}
            name="height"
            validation={rules.height}
            errorText={errors?.height?.message}
          />
          <InputText
            label="Mass"
            register={register}
            name="mass"
            validation={rules.mass}
            errorText={errors?.mass?.message}
          />
          <button className="fa-edit-character__btn" type="submit">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditCharacter;
