import { useState } from "react";

export const useForm = <T extends object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    handleInputChange,
    resetForm
  };
};
