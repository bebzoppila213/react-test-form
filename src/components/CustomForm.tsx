import FormItem from "./ui/FormItem";
import { PHONE, MIN_LENTGHT } from "../default/patterns";
import React, { useState } from "react";
import useForm from "../hooks/useForm";
import FormSubmitResult from "../components/FormSubmitResult";
import sendToBack from "../api/sendToBack";

export type CustomFormType = {
  phone: string;
  name: string;
  messages: string;
};

type FormValidateType = {
  key: keyof CustomFormType;
  pattern: RegExp;
};

const formValidate: FormValidateType[] = [
  {
    key: "phone",
    pattern: PHONE,
  },
  {
    key: "name",
    pattern: MIN_LENTGHT,
  },
  {
    key: "messages",
    pattern: MIN_LENTGHT,
  },
];

export default function CustomForm() {
  const [formState, updateFormState, formIsValid] = useForm<CustomFormType>(
    {
      phone: "",
      name: "",
      messages: "",
    },
    formValidate
  );
    const [formSendStatus, setFormSendStatus] = useState<boolean | null>(null)

  const onSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const resSend = await sendToBack(formState)
    resSend ? setFormSendStatus(true) : setFormSendStatus(false)
    
    
  };

  return (
    <>
      <form onSubmit={onSubmitForm} className="form">
        <h3 className="form__title">Форма </h3>
        <FormItem
          inputState={formState.phone}
          updateState={(text) => updateFormState("phone", text)}
          pattern={PHONE}
          placeholder="+7 (___) ___-__-__"
          mask="+7 (999) 999-99-99"
          label="Номер телефона"
        ></FormItem>
        <FormItem
          inputState={formState.name}
          updateState={(text) => updateFormState("name", text)}
          label="Имя"
        ></FormItem>
        <FormItem
          inputState={formState.messages}
          updateState={(text) => updateFormState("messages", text)}
          label="Сообщение"
        ></FormItem>
        <button disabled={!formIsValid()} type="submit" className="form__btn">
          Отправить форму
        </button>
      </form>
      <FormSubmitResult formSendStatus={formSendStatus}></FormSubmitResult>
      </>
  );
}
