import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { brand } from "@/lib/brand";

export function Footer() {
  const NAVY = brand.colors.navy;
  const ORANGE = brand.colors.orange;

  const phoneRaw = brand.contact.phone || "";
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  const telHref = phoneDigits ? `tel:${phoneDigits}` : "#";
  const waHref = phoneDigits ? `https://wa.me/${phoneDigits}` : "#";
  const mailHref = brand.contact.email ? `mailto:${brand.contact.email}` : "#";

  const company = {
    nif: "519159586",
    cae: "43210-R4 | 43221-R4",
  };

  const social = {
    facebook: brand.social?.facebook,
    instagram: brand.social?.instagram,
    linkedin: brand.social?.linkedin,
  };

  return (
    <footer className="relative isolate overflow-hidden text-white">
      {/* Barra premium */}
      <div className="relative z-20">
        <div className="h-[3px]" style={{ backgroundColor: ORANGE }} />
        <div className="h-[2px] bg-slate-200">
          <div
            className="h-full"
            style={{
              background: `linear-gradient(90deg, ${NAVY} 0 70%, ${ORANGE} 70% 100%)`,
            }}
          />
        </div>
      </div>

      {/* Fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(1000px 520px at 20% 0%, ${NAVY}22 0%, transparent 60%),
            radial-gradient(900px 520px at 85% 10%, ${ORANGE}14 0%, transparent 58%),
            linear-gradient(180deg, #0A1220 0%, #060A11 100%)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* =======================
            MOBILE (clean + acordeões)
           ======================= */}
        <div className="lg:hidden">
          {/* Brand + texto */}
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-extrabold tracking-wide">{brand.name}</p>
            <span
              className="text-[10px] font-extrabold tracking-[0.22em]"
              style={{ color: ORANGE }}
            >
              CONSTRUÇÕES
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Soluções técnicas na construção com rigor, qualidade e cumprimento de prazos.
          </p>

          {/* CTAs mobile (full width) */}
          <div className="mt-5 grid grid-cols-1 gap-3">
            <Link
              href="/contactos"
              className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold shadow-sm transition hover:opacity-95"
              style={{ backgroundColor: NAVY, color: "white" }}
            >
              Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold transition hover:bg-white/5"
              style={{ border: "1px solid rgba(255,255,255,0.14)" }}
            >
              <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
              WhatsApp
            </a>
          </div>

          {/* Sociais (centralizado no mobile) */}
          <div className="mt-5 flex items-center gap-2">
            {social.facebook ? (
              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white/70" />
              </a>
            ) : null}
            {social.instagram ? (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white/70" />
              </a>
            ) : null}
            {social.linkedin ? (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white/70" />
              </a>
            ) : null}
          </div>

          {/* Acordeões */}
          <div className="mt-7 space-y-3">
            <MobileAccordion title="Navegação" accent={ORANGE}>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
                <li><Link href="/obras" className="hover:text-white transition-colors">Obras</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">A Empresa</Link></li>
                <li><Link href="/qualidade-seguranca" className="hover:text-white transition-colors">Qualidade & Segurança</Link></li>
                <li><Link href="/contactos" className="hover:text-white transition-colors">Contactos</Link></li>
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Contactos" accent={ORANGE}>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <IconBox><Phone className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Telefone</p>
                    <a href={telHref} className="hover:text-white transition-colors">{brand.contact.phone}</a>
                    <div className="mt-1">
                      <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center hover:text-white transition-colors">
                        <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconBox><Mail className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Email</p>
                    <a href={mailHref} className="break-all hover:text-white transition-colors">{brand.contact.email}</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconBox><MapPin className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Atuação</p>
                    <p>{brand.contact.address}</p>
                  </div>
                </li>
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Horário e dados" accent={ORANGE}>
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <IconBox><Clock className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Seg–Sex</p>
                    <p>{brand.contact.schedule || "08:00 — 18:00"}</p>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <p className="text-sm font-extrabold text-white/90">Dados empresariais</p>
                  <div className="mt-3 space-y-1.5 text-sm text-white/70">
                    <p><span className="font-semibold text-white/80">NIF:</span> {company.nif}</p>
                    <p><span className="font-semibold text-white/80">CAE:</span> {company.cae}</p>
                  </div>
                </div>
              </div>
            </MobileAccordion>
          </div>

          {/* Bottom mobile */}
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm">
            <div className="flex flex-col items-center gap-2 text-white/55">
              <p>© {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.</p>
              <div className="flex items-center gap-3">
                <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                <span className="text-white/25">•</span>
                <Link href="/termos" className="hover:text-white transition-colors">Termos e Condições</Link>
              </div>
            </div>
          </div>
        </div>

        {/* =======================
            DESKTOP (mantém o teu layout)
           ======================= */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-12">
            {/* BRAND */}
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-lg font-extrabold tracking-wide">{brand.name}</p>
                <span
                  className="text-[10px] font-extrabold tracking-[0.22em]"
                  style={{ color: ORANGE }}
                >
                  CONSTRUÇÕES
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70 max-w-sm">
                Soluções técnicas na construção com rigor, qualidade e cumprimento de prazos.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/contactos"
                  className="inline-flex h-10 items-center rounded-2xl px-4 text-sm font-extrabold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: NAVY, color: "white" }}
                >
                  Pedir orçamento <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-2xl px-4 text-sm font-extrabold transition hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-5 flex items-center gap-2">
                {social.facebook ? (
                  <a
                    href={social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                    style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5 text-white/70" />
                  </a>
                ) : null}
                {social.instagram ? (
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                    style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-white/70" />
                  </a>
                ) : null}
                {social.linkedin ? (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                    style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-white/70" />
                  </a>
                ) : null}
              </div>
            </div>

            {/* NAV */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white/90">NAVEGAÇÃO</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
                <li><Link href="/obras" className="hover:text-white transition-colors">Obras</Link></li>
                <li><Link href="/sobre" className="hover:text-white transition-colors">A Empresa</Link></li>
                <li><Link href="/qualidade-seguranca" className="hover:text-white transition-colors">Qualidade & Segurança</Link></li>
                <li><Link href="/contactos" className="hover:text-white transition-colors">Contactos</Link></li>
              </ul>
            </div>

            {/* CONTACTOS */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white/90">CONTACTOS</h3>

              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <IconBox><Phone className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Telefone</p>
                    <a href={telHref} className="hover:text-white transition-colors">{brand.contact.phone}</a>
                    <div className="mt-1">
                      <a href={waHref} target="_blank" rel="noreferrer" className="inline-flex items-center hover:text-white transition-colors">
                        <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconBox><Mail className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Email</p>
                    <a href={mailHref} className="break-all hover:text-white transition-colors">{brand.contact.email}</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <IconBox><MapPin className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                  <div>
                    <p className="font-extrabold text-white/90">Atuação</p>
                    <p>{brand.contact.address}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* HORÁRIO + DADOS */}
            <div>
              <h3 className="text-xs font-extrabold tracking-widest text-white/90">HORÁRIO</h3>

              <div className="mt-4 flex items-start gap-3 text-sm text-white/70">
                <IconBox><Clock className="h-4 w-4" style={{ color: ORANGE }} /></IconBox>
                <div>
                  <p className="font-extrabold text-white/90">Seg–Sex</p>
                  <p>{brand.contact.schedule || "08:00 — 18:00"}</p>
                </div>
              </div>

              <div
                className="mt-5 rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p className="text-sm font-extrabold text-white/90">Dados empresariais</p>
                <div className="mt-3 space-y-1.5 text-sm text-white/70">
                  <p><span className="font-semibold text-white/80">NIF:</span> {company.nif}</p>
                  <p><span className="font-semibold text-white/80">CAE:</span> {company.cae}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom desktop */}
          <div className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between text-sm">
            <p className="text-white/55">
              © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-3 text-white/55">
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-white/25">•</span>
              <Link href="/termos" className="hover:text-white transition-colors">
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- helpers ---------- */

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.14)" }}
    >
      {children}
    </span>
  );
}

function MobileAccordion({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <details
      className="group rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)" }}
    >
      <summary className="cursor-pointer list-none select-none px-4 py-3 flex items-center justify-between">
        <span className="text-xs font-extrabold tracking-widest text-white/90">{title.toUpperCase()}</span>
        <ChevronDown
          className="h-4 w-4 text-white/60 transition-transform group-open:rotate-180"
          style={{ color: accent }}
        />
      </summary>
      <div className="px-4 pb-4 pt-1">{children}</div>
    </details>
  );
}
