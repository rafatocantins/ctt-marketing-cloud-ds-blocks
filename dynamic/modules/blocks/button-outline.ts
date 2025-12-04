export default {
  id: 'button-outline',
  name: 'Botão Outline',
  category: 'Botões',
  description: 'Botão contornado com estilos CTT, totalmente configurável.',
  icon: 'Square',
  parameters: [
    {
      name: 'label',
      label: 'Texto do Botão',
      type: 'text',
      default: 'Clique aqui',
    },
    {
      name: 'link',
      label: 'URL',
      type: 'text',
      default: '#',
    },
    {
      name: 'icon',
      label: 'URL do Ícone (opcional)',
      type: 'text',
      default: '',
    }
  ],
  template: `
<a href="{{link}}"
   style="font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          display:inline-block;
          white-space:nowrap;
          padding:0 12px;
          height:40px;
          line-height:40px;
          border:1.8px solid #D1021B;
          border-radius:4px;
          background:transparent;
          color:#D1021B;
          font-size:14px;
          font-weight:600;
          text-decoration:none;">
  {{label}}
  {{#if icon}}
    <img src="{{icon}}" width="12" height="12" style="margin-left:6px; vertical-align:middle;">
  {{/if}}
</a>
  `,
};