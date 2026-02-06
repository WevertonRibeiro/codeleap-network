import { QueryProvider } from "@/providers/QueryProvider";
import { AppRouter } from "@/routes/appRouter";

export default function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}
