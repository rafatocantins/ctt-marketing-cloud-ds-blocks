export default {
  id: 'footer-ctt-feedback',
  name: 'Footer CTT com Feedback',
  category: 'Rodapés',
  description: 'Footer institucional com título, botão de feedback, contactos, redes sociais, horários e morada, totalmente configurável.',
  icon: 'LayoutGrid',
  parameters: [
    {
      name: 'footerTitle',
      label: 'Título',
      type: 'text',
      default: 'A sua opinião é importante.',
    },
    {
      name: 'feedbackLabel',
      label: 'Texto do Botão Feedback',
      type: 'text',
      default: 'Ajude-nos a melhorar&nbsp;❤',
    },
    {
      name: 'feedbackUrl',
      label: 'URL do Feedback',
      type: 'url',
      default: '#',
    },
    {
      name: 'workingHours',
      label: 'Horário de Atendimento',
      type: 'textarea',
      default: 'Dias úteis das 09h às 19h',
    },
    {
      name: 'contactButtons',
      label: 'Botões de Contacto',
      type: 'list',
      itemType: 'component',
      componentId: 'button-outline',
      default: [
        { label: '308 801 964', link: 'tel:308801964', icon: '/assets/icons/phone_red.png' },
        { label: 'Contacte-nos @', link: 'mailto:suporte@ctt.pt', icon: '' },
      ],
    },
    {
      name: 'socialButtons',
      label: 'Botões de Redes Sociais',
      type: 'list',
      itemType: 'component',
      componentId: 'button-square',
      default: [
        { url: 'https://www.facebook.com/CTTCorreiosdePortugal', icon: '/assets/icons/facebook_red.png' },
        { url: 'https://www.instagram.com/cttportugal/', icon: '/assets/icons/instagram_red.png' },
        { url: 'https://www.linkedin.com/company/ctt-correios-de-portugal-s-a', icon: '/assets/icons/linkedin_red.png' },
      ],
    },
    {
      name: 'addressBlock',
      label: 'Morada e Links',
      type: 'component',
      componentId: 'address',
      default: {},
    },
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0; padding:0;">
  <tr>
    <td align="center" style="padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; background:#FFFFFF; font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
        
        <!-- Line 1: Title + feedback -->
        <tr>
          <td style="padding:16px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="font-size:16px; font-weight:600; color:#D1021B;">
                  {{footerTitle}}
                </td>
                <td align="right">
                  {{> button-outline label=feedbackLabel link=feedbackUrl}}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr><td style="background:#D1021B; height:2px; line-height:2px;">&nbsp;</td></tr>

        <!-- Line 2: Phone + Socials -->
        <tr>
          <td style="padding:16px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr valign="middle">
                <td valign="middle">
                  {{#each contactButtons}}
                    {{> button-outline label=this.label link=this.link icon=this.icon}}
                  {{/each}}
                </td>
                <td width="20"></td>
                <td valign="middle" align="right">
                  {{#each socialButtons}}
                    {{> button-square url=this.url icon=this.icon}}
                  {{/each}}
                </td>
              </tr>
            </table>
            <p style="margin:4px 0 0 0; font-size:12px; color:#D1021B; text-align:left; opacity:0.8;">
              {{workingHours}}
            </p>
          </td>
        </tr>

        <tr><td style="background:#D1021B; height:2px; line-height:2px;">&nbsp;</td></tr>

        <!-- Line 3: Address + Links -->
        {{> addressBlock}}

      </table>
    </td>
  </tr>
</table>
  `,
};