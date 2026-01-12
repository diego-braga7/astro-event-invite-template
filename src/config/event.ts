export type RsvpMode = 'external' | 'api';

function parseRsvpMode(value: unknown): RsvpMode | undefined {
  return value === 'external' || value === 'api' ? value : undefined;
}

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

const env = import.meta.env;

export const event: EventConfig = {
  nome_da_crianca: env.PUBLIC_EVENT_NAME ?? 'Nome da Criança',
  idade: 5,
  data: env.PUBLIC_EVENT_DATE ?? '00/00/2026',
  horario: env.PUBLIC_EVENT_TIME ?? '00:00',
  endereco: env.PUBLIC_EVENT_ADDRESS ?? 'Rua Exemplo, 123 — Bairro',
  cidade: env.PUBLIC_EVENT_CITY ?? 'Sua Cidade — UF',
  google_maps_link: env.PUBLIC_EVENT_GOOGLE_MAPS_LINK ?? 'https://maps.google.com/?q=SEU_ENDERECO_AQUI',
  whatsapp_link:
    env.PUBLIC_EVENT_WHATSAPP_LINK ??
    'https://wa.me/5599999999999?text=Olá!%20Quero%20confirmar%20presença.',
  texto_convite:
    env.PUBLIC_EVENT_TEXTO_CONVITE ??
    'Você está convidado(a) para um aniversário super especial! Em breve, este texto será ajustado com o seu template.',
  rsvp: {
    mode: parseRsvpMode(env.PUBLIC_RSVP_MODE) ?? 'external',
    externalUrl: env.PUBLIC_RSVP_EXTERNAL_URL ?? 'https://forms.gle/SEU_FORM_AQUI',
    apiEndpointPlaceholder:
      env.PUBLIC_RSVP_API_ENDPOINT_PLACEHOLDER ?? 'https://SEU-DOMINIO.com/api/rsvp'
  }
};
