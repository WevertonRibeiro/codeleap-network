import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container/Container";

import styles from "./styles.module.scss";

type CardProps = {
  title?: string;
  type?: "primary" | "secondary";
  children: ReactNode;
  header?: ReactNode;
  className?: string;
};

export function Card({
  title,
  children,
  className,
  type = "primary",
  header,
}: CardProps): ReactNode {
  return (
    <div
      className={`${styles.cardWrapper} ${styles[type]} ${className ? className : ""}`}
    >
      {title || header ? (
        <div className={`${styles.cardHeader}`}>
          {header ?? <h2>{title}</h2>}
        </div>
      ) : (
        <></>
      )}

      <Container className={styles.cardBody}>{children}</Container>
    </div>
  );
}
