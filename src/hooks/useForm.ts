import { useState } from "react";


type FormValidateType<T> = {
    key: keyof T,
    pattern: RegExp
}

type useFormReturnType<T> = [state: T, updateState: (key: keyof T, value: string) => void, formIsvalid: () => boolean]


export default function useForm<T extends Object>(defaultFormState: T, formValidate: FormValidateType<T>[]): useFormReturnType<T>{
    const [formState, setFormState] = useState(defaultFormState)

    const updateFormState = (key: keyof T, value: string) => {
        setFormState({ ...formState, [key]: value });
    };

    const formIsValid = () => {
        return formValidate.every(formValidItem => formValidItem.pattern.test(String(formState[formValidItem.key])))
    }

    return [formState, updateFormState, formIsValid]
}