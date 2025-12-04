export default {
  id: 'button-solid',
  name: 'Botão Solid',
  category: 'Botões',
  description: 'Botão sólido com estilos CTT, totalmente configurável.',
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
      name: 'backgroundColor',
      label: 'Cor de Fundo',
      type: 'color',
      default: '#D1021B',
    },
    {
      name: 'textColor',
      label: 'Cor do Texto',
      type: 'color',
      default: '#FFFFFF',
    },
    {
      name: 'fontSize',
      label: 'Tamanho da Fonte (px)',
      type: 'text',
      default: '16px',
    },
    {
      name: 'padding',
      label: 'Padding (vertical horizontal)',
      type: 'text',
      default: '12px 20px',
    },
    {
      name: 'borderRadius',
      label: 'Border Radius',
      type: 'text',
      default: '999px',
    }
  ],
  template: `
<a href="{{link}}"
   style="display:inline-block;
          background:{{backgroundColor}};
          color:{{textColor}};
          text-decoration:none;
          font-size:{{fontSize}};
          font-weight:600;
          padding:{{padding}};
          border-radius:{{borderRadius}};
          font-family:Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
  {{label}}
</a>
  `,
};