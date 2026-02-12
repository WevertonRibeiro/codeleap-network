import { Button } from "@/components/ui/Button/Button";
import { Modal } from "../Modal/Modal";

import styles from "./styles.module.scss";

type ConfirmModalProps = {
  open: boolean;
  title: string;
  description?: string;

  confirmText?: string;
  cancelText?: string;

  loading?: boolean;
  variant?: "default" | "danger";

  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  return (
    <Modal open={open} title={title} dismissible={!loading} onClose={onCancel}>
      <div className={styles.content}>
        {description && <p className={styles.description}>{description}</p>}

        <Modal.Actions>
          <Button
            title={cancelText}
            type="button"
            variant="default"
            handleClick={onCancel}
            disabled={loading}
          />

          <Button
            title={confirmText}
            type="button"
            variant="danger"
            handleClick={onConfirm}
            loading={loading}
          />
        </Modal.Actions>
      </div>
    </Modal>
  );
}
