export default {
  id: 'card-horizontal',
  name: 'Card Horizontal',
  category: 'Cards',
  description: 'Card horizontal com imagem, texto e botão CTA.',
  icon: 'LayoutGrid',
  parameters: [
    {
      name: 'image',
      label: 'URL da Imagem',
      type: 'image',
      default: 'https://via.placeholder.com/180x120/E5E7EB/000000?text=Imagem',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      default: 'Título',
    },
    {
      name: 'text',
      label: 'Texto',
      type: 'textarea',
      default: 'Descrição ou conteúdo do card horizontal. Pode ser mais longo ou curto.',
    },
    {
      name: 'ctaLabel',
      label: 'Texto do Botão',
      type: 'text',
      default: 'Visitar site',
    },
    {
      name: 'ctaUrl',
      label: 'URL do Botão',
      type: 'url',
      default: 'https://www.ctt.pt',
    }
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0; padding:0;">
  <tr>
    <td align="center" style="padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;">
        <tr>
          <td style="background:#FFFFFF; border:1px solid #E5E7EB; border-radius:12px; padding:24px;">

            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>

                <!-- IMAGE -->
                <td width="180" valign="top" style="padding-right:20px;">
                  <img src="{{image}}" width="180" style="display:block;">
                </td>

                <!-- TEXT -->
                <td valign="top">
                  <h3 style="margin:0 0 8px 0; font-size:20px; font-weight:600; color:#111827;">
                    {{title}}
                  </h3>

                  <p style="margin:0 0 16px 0; font-size:16px; line-height:1.5; color:#374151;">
                    {{text}}
                  </p>

                  <!-- BUTTON -->
                  {{> button-solid label=ctaLabel link=ctaUrl}}

                </td>

              </tr>
            </table>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `,
};