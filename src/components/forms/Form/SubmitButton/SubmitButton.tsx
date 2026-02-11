import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/Button/Button";

export function SubmitButton() {
  const { formState } = useFormContext();

  return <Button type="submit" title="ENTER" disabled={!formState.isValid} />;
}
