import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignupPage } from "@/pages/Auth/SignupPage";
import { FeedPage } from "@/pages/Feed/FeedPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}
