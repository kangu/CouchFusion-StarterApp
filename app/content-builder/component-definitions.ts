import type { ComponentDefinition } from '#content/types/builder'

const definitions: ComponentDefinition[] = [
  {
    id: 'parallax',
    label: 'Parallax',
    description: 'Auto-generated registry entry for Parallax.',
    props: [
      {
        key: 'backgroundImage',
        label: 'Background Image',
        type: 'text',
        required: true,
        ui: {
          component: 'ContentImageField'
        }
      },
      {
        key: 'height',
        label: 'Height',
        type: 'text',
        default: '60vh'
      },
      {
        key: 'overlayColor',
        label: 'Overlay Color',
        type: 'text',
        default: 'rgba(0, 0, 0, 0.3)'
      },
      {
        key: 'speed',
        label: 'Speed',
        type: 'text',
        default: '0.3'
      }
    ],
    allowChildren: true,
    childHint: 'Supports default slot'
  }
]

export default definitions
