import { useEffect, useState } from "react";

type FormSubmitResultProps = {
  formSendStatus: any;
};

export default function FormSubmitResult({
  formSendStatus,
}: FormSubmitResultProps) {
  const [flag, setFlag] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (flag) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 22000);
    }
    setFlag(true);

    return () => clearTimeout(timer);
  }, [formSendStatus]);

  return (
    <div className="form-result">
      {isVisible &&
        (Boolean(formSendStatus) ? (
          <div className="form-result__success">Форма отправлена верно</div>
        ) : (
          <div className="form-result__error">Произошла ошибка</div>
        ))}
    </div>
  );
}
