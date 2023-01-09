import { useState } from "react";
import InputMask from "react-input-mask";
import { MIN_LENTGHT } from "../../default/patterns";
type FormItemProps = {
  label: string;
  updateState: (text: string) => void;
  mask?: string;
  placeholder?: string;
  pattern?: RegExp;
  inputState: string;
};

export default function FormItem({
  label,
  mask = "",
  placeholder = "",
  pattern = MIN_LENTGHT,
  updateState,
  inputState,
}: FormItemProps) {
  const [errors, setErrors] = useState(false);
  const [success, setSuccess] = useState(false);

  const onInputBlur = () => {
    if (!pattern.test(inputState.trim())) {
      setErrors(true);
      setSuccess(false);
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState(event.currentTarget.value);
    if (pattern.test(event.currentTarget.value)) {
      setErrors(false);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="form__item">
      <label className="form__item-label" htmlFor="">
        {label}
      </label>
      <InputMask
        value={inputState}
        onChange={onInputChange}
        onBlur={onInputBlur}
        placeholder={placeholder}
        className="form__item-input"
        mask={mask}
      ></InputMask>
      {errors && <span className="form__item-hint">Ошибка</span>}
      {success && (
        <span className="form__item-success">Поле заполнено верно</span>
      )}
    </div>
  );
}
