import { Spinner } from "../Spinner/Spinner";

import styles from "./styles.module.scss";

type ButtonProps = {
  title: string;
  type?: "submit" | "button";
  variant?: "primary" | "danger" | "default";
  disabled?: boolean;
  loading?: boolean;
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  title,
  type = "button",
  disabled = false,
  loading = false,
  handleClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled || loading}
    >
      {!loading ? title : <Spinner />}
    </button>
  );
}
