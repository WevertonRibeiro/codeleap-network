import { useState } from "react";
import { UsernameContext } from "./UsernameContext";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function UsernameProvider({ children }: Props) {
  const [username, setUsernameState] = useState<string | null>(() =>
    localStorage.getItem("username"),
  );

  const setUsername = (name: string | null) => {
    if (name) {
      localStorage.setItem("username", name);
    } else {
      localStorage.removeItem("username");
    }

    setUsernameState(name);
  };

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
}
