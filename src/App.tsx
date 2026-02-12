import { QueryProvider } from "@/providers/QueryProvider";
import { UsernameProvider } from "./contexts/username/UsernameProvider";
import { AppRouter } from "@/routes";

export default function App() {
  return (
    <UsernameProvider>
      <QueryProvider>
        <AppRouter />
      </QueryProvider>
    </UsernameProvider>
  );
}
