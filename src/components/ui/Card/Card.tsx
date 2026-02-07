import type { ReactNode } from "react";

import { Container } from "@/components/layout/Container/Container";

import styles from "./styles.module.scss";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <Container className={styles.card}>{children}</Container>;
}
