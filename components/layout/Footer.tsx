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
    nif: "517731622",
    alvara: "146534 - PUB",
    cae: "43221",
  };

  return (
    <footer className="relative isolate overflow-hidden text-white">
      {/* Barra premium (sem “degrau”) */}
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

      {/* Fundo mais limpo */}
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-12">
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

            {/* CTA mais limpo */}
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

            {/* Sociais menores */}
            <div className="mt-5 flex items-center gap-2">
              {brand.social?.facebook ? (
                <a
                  href={brand.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-white/70" />
                </a>
              ) : null}
              {brand.social?.instagram ? (
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-white/70" />
                </a>
              ) : null}
              {brand.social?.linkedin ? (
                <a
                  href={brand.social.linkedin}
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

          {/* CONTACTOS (mais leve) */}
          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-white/90">CONTACTOS</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <Phone className="h-4 w-4" style={{ color: ORANGE }} />
                </span>
                <div>
                  <p className="font-extrabold text-white/90">Telefone</p>
                  <a href={telHref} className="hover:text-white transition-colors">
                    {brand.contact.phone}
                  </a>
                  <div className="mt-1">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center hover:text-white transition-colors"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" style={{ color: ORANGE }} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <Mail className="h-4 w-4" style={{ color: ORANGE }} />
                </span>
                <div>
                  <p className="font-extrabold text-white/90">Email</p>
                  <a href={mailHref} className="break-all hover:text-white transition-colors">
                    {brand.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span
                  className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.14)" }}
                >
                  <MapPin className="h-4 w-4" style={{ color: ORANGE }} />
                </span>
                <div>
                  <p className="font-extrabold text-white/90">Atuação</p>
                  <p>{brand.contact.address}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* HORÁRIO + DADOS (mais discreto) */}
          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-white/90">HORÁRIO</h3>

            <div className="mt-4 flex items-start gap-3 text-sm text-white/70">
              <span
                className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.14)" }}
              >
                <Clock className="h-4 w-4" style={{ color: ORANGE }} />
              </span>
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
                <p><span className="font-semibold text-white/80">Alvará:</span> {company.alvara}</p>
                <p><span className="font-semibold text-white/80">CAE:</span> {company.cae}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
          <p className="text-white/55">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-white/55">
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
    </footer>
  );
}
