export default {
  id: 'button-square',
  name: 'Botão Quadrado',
  category: 'Button',
  icon: 'Share2',
  description: 'Botão quadrado para links sociais, configurável na plataforma.',
  parameters: [
    {
      name: 'url',
      label: 'URL',
      type: 'url',
      default: '#',
    },
    {
      name: 'icon',
      label: 'Ícone (20x20)',
      type: 'image',
      default: '',
    }
  ],
  template: `
<td style="padding-left:4px;">
  <a href="{{url}}" target="_blank" style="
    display:flex;
    align-items:center;
    justify-content:center;
    width:40px; height:40px;
    border:1.8px solid #D1021B;
    border-radius:4px;">
    <img src="{{icon}}" width="20" height="20" style="display:block;" />
  </a>
</td>
  `,
};