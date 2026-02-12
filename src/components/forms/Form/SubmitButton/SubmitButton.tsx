import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/Button/Button";

type SubmitButtonProps = {
  title: string;
  loading?: boolean;
};

export function SubmitButton({ title, loading }: SubmitButtonProps) {
  const { formState } = useFormContext();

  return (
    <Button
      type="submit"
      title={title}
      disabled={!formState.isValid}
      loading={loading}
    />
  );
}
