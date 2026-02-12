import { useContext } from "react";
import { UsernameContext } from "./UsernameContext";

export function useUsername() {
  const context = useContext(UsernameContext);

  if (!context) {
    throw new Error("useUsername must be used within UsernameProvider");
  }

  return context;
}
