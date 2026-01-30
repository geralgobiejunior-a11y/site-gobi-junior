'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contacto brevemente.',
    });

    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Nome Completo *</Label>
          <Input id="name" name="name" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="phone">Telefone *</Label>
          <Input id="phone" name="phone" type="tel" required className="mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="location">Localidade *</Label>
          <Input id="location" name="location" required className="mt-2" />
        </div>
      </div>

      <div>
        <Label htmlFor="service">Serviço Pretendido</Label>
        <Select name="service">
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
          placeholder="Descreva o seu projeto e as suas necessidades..."
        />
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
        <p className="text-xs text-gray-500 mt-1">
          Formatos aceites: PDF, DOC, JPG, PNG (máx. 5MB)
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="w-full md:w-auto"
        style={{ backgroundColor: '#F5A623' }}
      >
        {loading ? 'A enviar...' : 'Enviar Pedido'}
      </Button>
    </form>
  );
}
