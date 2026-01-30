import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Obras",
  description:
    "Obras e projetos executados pela Gobi & Júnior: qualidade técnica, organização e cumprimento de prazos.",
};

export default function Page() {
  return <ProjectsClient />;
}
