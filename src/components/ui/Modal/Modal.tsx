import { createPortal } from "react-dom";

import { Container } from "@/components/layout/Container/Container";

import type { ReactNode } from "react";

import styles from "./styles.module.scss";

type ModalProps = {
  open: boolean;
  dismissible?: boolean;
  onClose: () => void;
  children: ReactNode;
};

type ModalActionsProps = {
  children: React.ReactNode;
};

export function Modal({ open, dismissible, onClose, children }: ModalProps) {
  if (!open) return null;

  const handleClose = () => {
    if (dismissible) return;
    onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Container>{children}</Container>
      </div>
    </div>,
    document.body,
  );
}

function ModalActions({ children }: ModalActionsProps) {
  return <div className={styles.actions}>{children}</div>;
}

Modal.Actions = ModalActions;
