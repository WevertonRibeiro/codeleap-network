import { createPortal } from "react-dom";

import { Container } from "@/components/layout/Container/Container";

import { useEffect, type ReactNode } from "react";

import styles from "./styles.module.scss";

type ModalProps = {
  open: boolean;
  title?: string;
  width?: number;
  dismissible?: boolean;
  onClose: () => void;
  children: ReactNode;
};

type ModalActionsProps = {
  children: React.ReactNode;
};

export function Modal({
  open,
  title,
  width = 660,
  dismissible = true,
  onClose,
  children,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    if (dismissible !== false) onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: width }}
      >
        <Container>
          {title && (
            <div className="">
              <h3>{title}</h3>
            </div>
          )}
          {children}
        </Container>
      </div>
    </div>,
    document.body,
  );
}

function ModalActions({ children }: ModalActionsProps) {
  return <div className={styles.actions}>{children}</div>;
}

Modal.Actions = ModalActions;
