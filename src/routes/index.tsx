import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout/AppLayout";
import { SignupPage } from "@/pages/Auth/SignupPage";
import { FeedPage } from "@/pages/Feed/FeedPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route element={<AppLayout />}>
          <Route path="/feed" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
