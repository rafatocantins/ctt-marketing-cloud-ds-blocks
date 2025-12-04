export default {
  id: 'footer-ctt-dynamic',
  name: 'Footer CTT Dinâmico',
  category: 'Rodapés',
  description: 'Footer institucional totalmente dinâmico: contactos, redes sociais, site e horários configuráveis.',
  icon: 'LayoutGrid',
  parameters: [
    {
      name: 'footerTitle',
      label: 'Título',
      type: 'text',
      default: 'Suporte técnico',
    },
    {
      name: 'workingHours',
      label: 'Horário de Atendimento',
      type: 'textarea',
      default: 'Dias úteis das 09h às 19h',
    },
    {
      name: 'websiteUrl',
      label: 'URL do Site',
      type: 'url',
      default: 'https://www.ctt.pt',
    },
    {
      name: 'websiteLabel',
      label: 'Texto do Link',
      type: 'text',
      default: 'ctt.pt',
    },
    {
      name: 'contactButtons',
      label: 'Botões de Contacto',
      type: 'list', // Lista de botões outline
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
      type: 'list', // Lista de botões quadrados
      itemType: 'component',
      componentId: 'button-square',
      default: [
        { url: 'https://www.facebook.com/CTTCorreiosdePortugal', icon: '/assets/icons/facebook_red.png' },
        { url: 'https://www.instagram.com/cttportugal/', icon: '/assets/icons/instagram_red.png' },
        { url: 'https://www.linkedin.com/company/ctt-correios-de-portugal-s-a', icon: '/assets/icons/linkedin_red.png' },
      ],
    },
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0; padding:0;">
  <tr>
    <td align="center" style="padding:24px 16px;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px; background:#FFFFFF;">
        <tr>
          <td style="background:#D1021B; padding:24px; font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif; color:#FFFFFF;">

            <!-- TITLE -->
            <h3 style="margin:0 0 16px 0; font-size:16px; font-weight:600; color:#FFFFFF;">
              {{footerTitle}}
            </h3>

            <!-- MAIN LINE -->
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr valign="top">

                <!-- CONTACTS -->
                <td valign="top">
                  {{#each contactButtons}}
                    {{> button-outline label=this.label link=this.link icon=this.icon}}
                  {{/each}}
                </td>

                <td width="20">&nbsp;</td>

                <!-- SOCIAL + WEBSITE -->
                <td valign="top" align="right">
                  {{#each socialButtons}}
                    {{> button-square url=this.url icon=this.icon}}
                  {{/each}}
                  <span style="padding-left:10px; font-size:30px; font-weight:700;">
                    <a href="{{websiteUrl}}" style="color:#FFFFFF; text-decoration:none;">{{websiteLabel}}</a>
                  </span>
                </td>
              </tr>
            </table>

            <!-- WORKING HOURS -->
            <p style="margin:16px 0 0 0; font-size:12px; color:#FFFFFF; opacity:0.85;">
              {{workingHours}}
            </p>

          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `,
};