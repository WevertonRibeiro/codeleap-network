import { useState } from "react";
import { WelcomeModal } from "@/features/auth/components/WelcomeModal/WelcomeModal";

export function SignupPage() {
  const [open, setOpen] = useState(true);

  return <WelcomeModal open={open} onClose={() => setOpen(false)} />;
}
