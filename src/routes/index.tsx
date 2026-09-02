import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import MainLayout from "@/layouts/MainLayout";

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" />
        <Route path="/projects" />
        <Route path="/projects/:slug" />
        <Route path="/team" />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/join" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
