import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { RecruitmentForm } from "./recruitment-form";

export const metadata: Metadata = {
  title: "Trabalhe Connosco | Gobi & Júnior",
  description:
    "Estamos a contratar colaboradores para obras em Lisboa e arredores. Candidate-se online e fale connosco.",
};

export default function TrabalheConnoscoPage() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const CONTACTS = {
    phone: "+351 9xx xxx xxx",
    whatsapp: "+3519xxxxxxxx",
    email: "recrutamento@gobijunior.pt",
    location: "Lisboa • Grande Lisboa • Margem Sul",
  };

  return (
    <>
      <RecruitmentForm NAVY={NAVY} ORANGE={ORANGE} contacts={CONTACTS} />
    </>
  );
}
