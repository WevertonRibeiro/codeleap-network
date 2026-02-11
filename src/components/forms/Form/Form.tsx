import {
  useForm,
  FormProvider,
  type DefaultValues,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import type { ReactNode } from "react";

import styles from "./styles.module.scss";

interface FormProps<T extends FieldValues> {
  className?: string;
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
  initialValues?: DefaultValues<T>;
}

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  initialValues,
  className,
}: FormProps<T>) {
  const methods = useForm({
    defaultValues: initialValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`${styles.form} ${className}`}
      >
        {children}
      </form>
    </FormProvider>
  );
}
