import { useState } from "react";

//хук управления формой и валидации формы
function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  return { values, setValues, handleChange, errors, isValid, setIsValid};
}

export default useValidation;
