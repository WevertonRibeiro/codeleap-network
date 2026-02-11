import { createContext } from "react";

type UsernameContextType = {
  username: string | null;
  setUsername: (name: string | null) => void;
};

export const UsernameContext = createContext<UsernameContextType | undefined>(
  undefined,
);
