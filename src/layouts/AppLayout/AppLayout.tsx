import { Outlet } from "react-router-dom";
import { Header } from "@/components/ui/Header/Header";
import styles from "./styles.module.scss";

export function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header title="CodeLeap Network" />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
