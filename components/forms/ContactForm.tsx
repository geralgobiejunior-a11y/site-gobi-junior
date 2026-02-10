"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { brand } from "@/lib/brand";

function digitsOnly(s: string) {
  return (s || "").replace(/\D/g, "");
}

function safeText(v?: string, fallback = "-") {
  return v && v.trim().length > 0 ? v.trim() : fallback;
}

function prettyService(v: string) {
  const map: Record<string, string> = {
    eletrica: "Instalações Elétricas",
    pladur: "Pladur e Tetos Falsos",
    pintura: "Pintura",
    pavimentos: "Pavimentos",
    revestimentos: "Revestimentos Cerâmicos",
    isolamento: "Isolamento",
    impermeabilizacao: "Impermeabilização",
    manutencao: "Manutenção",
    varios: "Vários Serviços",
    outro: "Outro",
  };
  return map[v] || "—";
}

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // States (porque shadcn Select não posta via <form> como select normal)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState<string>("");
  const [message, setMessage] = useState("");

  const companyWaDigits = useMemo(
    () => digitsOnly(brand.contact.whatsapp || brand.contact.phone || ""),
    []
  );

  const canSend =
    name.trim().length >= 2 &&
    phone.trim().length >= 6 &&
    email.trim().includes("@") &&
    location.trim().length >= 2 &&
    message.trim().length >= 10 &&
    companyWaDigits.length >= 9;

  const waHref = useMemo(() => {
    const subject = "Pedido de Orçamento — Gobi & Júnior";

    const lines = [
      subject,
      "",
      `Nome: ${safeText(name)}`,
      `Telefone: ${safeText(phone)}`,
      `Email: ${safeText(email)}`,
      `Localidade: ${safeText(location)}`,
      `Serviço: ${service ? prettyService(service) : "-"}`,
      "",
      "Mensagem:",
      safeText(message, "(sem mensagem)"),
      "",
      "Anexos: se tiver PDF/fotos, envie aqui no WhatsApp após abrir a conversa.",
    ];

    const text = encodeURIComponent(lines.join("\n"));
    return companyWaDigits ? `https://wa.me/${companyWaDigits}?text=${text}` : "#";
  }, [companyWaDigits, name, phone, email, location, service, message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!companyWaDigits) {
      toast({
        title: "WhatsApp não configurado",
        description: "Configure brand.contact.whatsapp (ou phone) para ativar o envio.",
        variant: "destructive" as any,
      });
      return;
    }

    if (!canSend) {
      toast({
        title: "Faltam dados",
        description: "Preencha Nome, Telefone, Email, Localidade e uma mensagem mais completa.",
        variant: "destructive" as any,
      });
      return;
    }

    try {
      setLoading(true);

      // Abre WhatsApp com mensagem pronta (sem backend)
      window.open(waHref, "_blank", "noopener,noreferrer");

      toast({
        title: "Quase pronto ✅",
        description: "O WhatsApp abriu com a mensagem. Se tiver anexos (PDF/fotos), envie na conversa.",
      });

      // Reset
      setName("");
      setPhone("");
      setEmail("");
      setLocation("");
      setService("");
      setMessage("");
      // arquivo não é controlado por state — não precisa resetar
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            name="name"
            required
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ex.: João Silva"
          />
        </div>

        <div>
          <Label htmlFor="phone">Telefone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex.: +351 9xx xxx xxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex.: nome@email.com"
          />
        </div>

        <div>
          <Label htmlFor="location">Localidade *</Label>
          <Input
            id="location"
            name="location"
            required
            className="mt-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Ex.: Lisboa / Oeiras / Cascais"
          />
        </div>
      </div>

      <div>
        <Label>Serviço Pretendido</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eletrica">Instalações Elétricas</SelectItem>
            <SelectItem value="pladur">Pladur e Tetos Falsos</SelectItem>
            <SelectItem value="pintura">Pintura</SelectItem>
            <SelectItem value="pavimentos">Pavimentos</SelectItem>
            <SelectItem value="revestimentos">Revestimentos Cerâmicos</SelectItem>
            <SelectItem value="isolamento">Isolamento</SelectItem>
            <SelectItem value="impermeabilizacao">Impermeabilização</SelectItem>
            <SelectItem value="manutencao">Manutenção</SelectItem>
            <SelectItem value="varios">Vários Serviços</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Descreva o seu projeto: o que precisa, quantidades aproximadas, prazo, se já tem projeto/plantas, etc."
        />
        <p className="mt-2 text-xs text-slate-500">
          Quanto mais objetivo (local + tipo + prazo), mais rápido conseguimos responder.
        </p>
      </div>

      <div>
        <Label htmlFor="file">Anexar Ficheiro (opcional)</Label>
        <Input
          id="file"
          name="file"
          type="file"
          className="mt-2"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
        <p className="text-xs text-slate-500 mt-1">
          Formatos aceites: PDF, DOC, JPG, PNG (máx. 5MB).  
          * O formulário abre WhatsApp — envie o anexo diretamente na conversa.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={loading || !companyWaDigits}
          className="w-full md:w-auto"
          style={{ backgroundColor: "#F5A623", color: "#0B4F8A" }}
        >
          {loading ? "A abrir WhatsApp..." : "Enviar no WhatsApp"}
        </Button>

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center rounded-2xl px-5 text-sm font-extrabold ring-1 w-full md:w-auto"
          style={{
            color: "#0B4F8A",
            borderColor: "rgba(11,79,138,.22)",
            backgroundColor: "white",
            opacity: companyWaDigits ? 1 : 0.55,
            pointerEvents: companyWaDigits ? "auto" : "none",
          }}
        >
          Abrir WhatsApp direto
        </a>
      </div>

      {!companyWaDigits ? (
        <p className="text-xs text-amber-700">
          ⚠️ Configure <span className="font-semibold">brand.contact.whatsapp</span> (ou phone) para ativar o envio.
        </p>
      ) : null}
    </form>
  );
}
