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

type FooterProps = {
  children: ReactNode;
};

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  initialValues,
  className,
}: FormProps<T>) {
  const methods = useForm<T>({
    defaultValues: initialValues,
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) => {
          onSubmit(values);
          methods.reset();
        })}
        className={`${styles.form} ${className}`}
      >
        {children}
      </form>
    </FormProvider>
  );
}

function Footer({ children }: FooterProps) {
  return <div className={styles.footer}>{children}</div>;
}

Form.Footer = Footer;
