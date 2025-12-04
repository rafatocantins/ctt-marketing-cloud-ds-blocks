{
    id: 'hero-banner',
    name: 'Hero Banner',
    category: 'Conteúdo',
    description: 'Banner principal com imagem de fundo, título e CTA',
    icon: 'Image',
    parameters: [
      {
        name: 'imageUrl',
        label: 'URL da Imagem',
        type: 'image',
        default: 'https://via.placeholder.com/600x300/E4002B/FFFFFF?text=Hero+Banner',
      },
      {
        name: 'title',
        label: 'Título',
        type: 'text',
        default: 'Bem-vindo à Newsletter CTT',
      },
      {
        name: 'subtitle',
        label: 'Subtítulo',
        type: 'textarea',
        default: 'As últimas novidades e ofertas exclusivas para si.',
      },
      {
        name: 'ctaText',
        label: 'Texto do Botão',
        type: 'text',
        default: 'Saiba Mais',
      },
      {
        name: 'ctaUrl',
        label: 'URL do Botão',
        type: 'url',
        default: 'https://www.ctt.pt',
      },
    ],
    template: `
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="padding: 0;">
      <img src="{{imageUrl}}" alt="{{title}}" width="600" style="display: block; max-width: 100%;" />
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 32px 24px; background-color: #E4002B;">
      <h1 style="margin: 0 0 16px 0; color: #FFFFFF; font-size: 28px; font-weight: 700;">{{title}}</h1>
      <p style="margin: 0 0 24px 0; color: #FFFFFF; font-size: 16px; line-height: 1.5;">{{subtitle}}</p>
      <a href="{{ctaUrl}}" style="display: inline-block; padding: 14px 32px; background-color: #FFFFFF; color: #E4002B; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 4px;">{{ctaText}}</a>
    </td>
  </tr>
</table>`,
  },
  {
    id: 'text-block',
    name: 'Bloco de Texto',
    category: 'Conteúdo',
    description: 'Bloco de texto simples com título opcional',
    icon: 'Type',
    parameters: [
      {
        name: 'title',
        label: 'Título',
        type: 'text',
        default: '',
        description: 'Deixe vazio para esconder',
      },
      {
        name: 'content',
        label: 'Conteúdo',
        type: 'textarea',
        default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        name: 'alignment',
        label: 'Alinhamento',
        type: 'select',
        default: 'left',
        options: [
          { label: 'Esquerda', value: 'left' },
          { label: 'Centro', value: 'center' },
          { label: 'Direita', value: 'right' },
        ],
      },
    ],
    template: `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FFFFFF;">
  <tr>
    <td style="padding: 24px; text-align: {{alignment}};">
      {{#if title}}
      <h2 style="margin: 0 0 16px 0; color: #333333; font-size: 22px; font-weight: 600;">{{title}}</h2>
      {{/if}}
      <p style="margin: 0; color: #666666; font-size: 16px; line-height: 1.6;">{{content}}</p>
    </td>
  </tr>
</table>`,
  },
  {
    id: 'button',
    name: 'Botão CTA',
    category: 'Conteúdo',
    description: 'Botão de call-to-action',
    icon: 'MousePointer',
    parameters: [
      {
        name: 'text',
        label: 'Texto',
        type: 'text',
        default: 'Clique Aqui',
      },
      {
        name: 'url',
        label: 'URL',
        type: 'url',
        default: 'https://www.ctt.pt',
      },
      {
        name: 'style',
        label: 'Estilo',
        type: 'select',
        default: 'primary',
        options: [
          { label: 'Primário (Vermelho)', value: 'primary' },
          { label: 'Secundário (Preto)', value: 'secondary' },
          { label: 'Outline', value: 'outline' },
        ],
      },
      {
        name: 'alignment',
        label: 'Alinhamento',
        type: 'select',
        default: 'center',
        options: [
          { label: 'Esquerda', value: 'left' },
          { label: 'Centro', value: 'center' },
          { label: 'Direita', value: 'right' },
        ],
      },
    ],
    template: `
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="{{alignment}}" style="padding: 24px;">
      {{#if (eq style 'primary')}}
      <a href="{{url}}" style="display: inline-block; padding: 14px 32px; background-color: #E4002B; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 4px;">{{text}}</a>
      {{/if}}
      {{#if (eq style 'secondary')}}
      <a href="{{url}}" style="display: inline-block; padding: 14px 32px; background-color: #333333; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 4px;">{{text}}</a>
      {{/if}}
      {{#if (eq style 'outline')}}
      <a href="{{url}}" style="display: inline-block; padding: 12px 30px; background-color: transparent; color: #E4002B; font-size: 16px; font-weight: 600; text-decoration: none; border: 2px solid #E4002B; border-radius: 4px;">{{text}}</a>
      {{/if}}
    </td>
  </tr>
</table>`,
  },