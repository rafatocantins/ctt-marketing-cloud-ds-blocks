export default {
  id: 'card-vertical',
  name: 'Card Vertical',
  category: 'Cards',
  description: 'Card vertical com imagem, título, texto e botão CTA.',
  icon: 'LayoutGrid',
  parameters: [
    {
      name: 'image',
      label: 'URL da Imagem',
      type: 'image',
      default: 'https://via.placeholder.com/350x200/E5E7EB/000000?text=Imagem',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      default: 'Título do Card',
    },
    {
      name: 'text',
      label: 'Texto',
      type: 'textarea',
      default: 'Descrição ou conteúdo do card vertical. Pode ser mais longo ou curto.',
    },
    {
      name: 'ctaLabel',
      label: 'Texto do Botão',
      type: 'text',
      default: 'Saiba Mais',
    },
    {
      name: 'ctaUrl',
      label: 'URL do Botão',
      type: 'url',
      default: '#',
    }
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0; padding:0;">
  <tr>
    <td align="center" style="padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:350px;">
        <tr>
          <td style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:12px; overflow:hidden;">

            <!-- IMAGE -->
            <img src="{{image}}" width="350" style="display:block; width:100%;">

            <!-- TITLE -->
            <h3 style="margin:16px 24px 12px 24px; font-size:20px; font-weight:600; color:#111827;">
              {{title}}
            </h3>

            <!-- TEXT -->
            <p style="margin:0 24px 16px 24px; font-size:16px; color:#374151; line-height:1.5;">
              {{text}}
            </p>

            <!-- CTA BUTTON -->
            <div style="padding:0 24px 24px 24px;" align="center">
              {{> button-solid label=ctaLabel link=ctaUrl}}
            </div>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `,
};