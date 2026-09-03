import { Route, Routes } from "react-router-dom";
import {Home, About, Contact, Join, Project, Projects, Team, NotFound, Member} from "@/pages";
import MainLayout from "@/layouts/MainLayout";


export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/services" />
        <Route path="/services/:service" />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:memberSlug" element={<Member />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
