export type RsvpMode = 'external' | 'api';

export interface EventConfig {
  nome_da_crianca: string;
  idade: number;
  data: string;
  horario: string;
  endereco: string;
  cidade: string;
  google_maps_link: string;
  whatsapp_link: string;
  texto_convite: string;
  rsvp: {
    mode: RsvpMode;
    externalUrl: string;
    apiEndpointPlaceholder: string;
  };
}

export const event: EventConfig = {
  nome_da_crianca: 'Nome da Criança',
  idade: 5,
  data: '00/00/2026',
  horario: '00:00',
  endereco: 'Rua Exemplo, 123 — Bairro',
  cidade: 'Sua Cidade — UF',
  google_maps_link: 'https://maps.google.com/?q=SEU_ENDERECO_AQUI',
  whatsapp_link: 'https://wa.me/5599999999999?text=Olá!%20Quero%20confirmar%20presença.',
  texto_convite:
    'Você está convidado(a) para um aniversário super especial! Em breve, este texto será ajustado com o seu template.',
  rsvp: {
    mode: 'external',
    externalUrl: 'https://forms.gle/SEU_FORM_AQUI',
    apiEndpointPlaceholder: 'https://SEU-DOMINIO.com/api/rsvp'
  }
};

