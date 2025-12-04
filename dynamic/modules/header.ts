export default {
  id: 'header-ctt',
  name: 'Header CTT',
  category: 'Header',
  description: 'Header com link para visualização do email e banner dinâmico.',
  icon: 'LayoutGrid',
  parameters: [
    {
      name: 'bannerUrl',
      label: 'URL do Banner',
      type: 'image',
      default: '/assets/images/header.png',
    },
    {
      name: 'viewEmailText',
      label: 'Texto do Link de Visualização',
      type: 'text',
      default: 'Se não conseguir visualizar corretamente este email, clique aqui.',
    },
    {
      name: 'viewEmailUrl',
      label: 'URL do Link de Visualização',
      type: 'url',
      default: 'https://www.ctt.pt',
    }
  ],
  template: `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0; padding:0;">
  <tr>
    <td align="center" style="padding:24px;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
             style="max-width:640px; width:100%; background:#FFFFFF; overflow:hidden;">

        <!-- Visualization link -->
        <tr>
          <td align="right" style="padding:16px 24px 12px 24px; font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif; font-size:12px; color:#D1021B;">
            <a href="{{viewEmailUrl}}" style="color:#D1021B; text-decoration:none;">
              {{viewEmailText}}
            </a>
          </td>
        </tr>

        <!-- Dynamic banner -->
        <tr>
          <td>
            <img src="{{bannerUrl}}" width="100%" alt="Banner" style="display:block; width:100%; max-width:640px; border:0; line-height:0;">
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
  `,
};