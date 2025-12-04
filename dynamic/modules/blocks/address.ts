export default {
  id: 'address',
  name: 'Morada & Links',
  category: 'Rodapés',
  description: 'Bloco de morada da empresa com links para anular subscrição e gerir preferências, totalmente configurável.',
  icon: 'MapPin',
  parameters: [
    {
      name: 'companyAddress',
      label: 'Morada da Empresa',
      type: 'textarea',
      default: 'CTT, Correios de Portugal, S.A., Av. dos Combatentes, n° 43, Lisboa, 1643-001, Portugal',
    },
    {
      name: 'unsubscribeUrl',
      label: 'URL para Anular Subscrição',
      type: 'url',
      default: '#',
    },
    {
      name: 'unsubscribeLabel',
      label: 'Texto do Link "Anular a subscrição"',
      type: 'text',
      default: 'Anular a subscrição',
    },
    {
      name: 'preferencesUrl',
      label: 'URL para Gerir Preferências',
      type: 'url',
      default: '#',
    },
    {
      name: 'preferencesLabel',
      label: 'Texto do Link "Gerir preferências"',
      type: 'text',
      default: 'Gerir preferências',
    },
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
       style="max-width:640px; width:100%; background:#FFFFFF; overflow:hidden; font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
  <tr>
    <td style="padding:16px 24px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#000000;">
        {{companyAddress}}
      </p>
      <p style="margin:8px 0 0 0; font-size:12px;">
        <a href="{{unsubscribeUrl}}" style="color:#D1021B; text-decoration:none; margin-right:16px;">{{unsubscribeLabel}}</a>
        <a href="{{preferencesUrl}}" style="color:#D1021B; text-decoration:none;">{{preferencesLabel}}</a>
      </p>
    </td>
  </tr>
</table>
  `,
};