import type { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./styles.module.scss";

interface FormFieldProps {
  name: string;
  label?: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}

export const FormField = function FormField({
  name,
  label,
  children,
  required = false,
  className = "",
}: FormFieldProps) {
  const { formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <div className={`${styles.formField} ${className}`}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.input}>{children}</div>
      {error && <span className={styles.error}>{error.message as string}</span>}
    </div>
  );
};
