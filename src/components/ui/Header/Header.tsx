import { Container } from "@/components/layout/Container/Container";

import styles from "./styles.module.scss";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={styles.headerWrapper}>
        <h1 className="heading">{title}</h1>
      </Container>
    </header>
  );
}
