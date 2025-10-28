import type { ComponentDefinition } from '#content/types/builder'

const definitions: ComponentDefinition[] = [
  {
    id: 'content-plus-main-image',
    label: 'Content Plus Main Image',
    description: 'Auto-generated registry entry for ContentPlusMainImage.',
    props: [
      {
        key: 'accentColor',
        label: 'Accent Color',
        type: 'text',
        default: '#f3f4ff'
      },
      {
        key: 'accentOpacity',
        label: 'Accent Opacity',
        type: 'text',
        default: 0.55
      },
      {
        key: 'accentSecondaryColor',
        label: 'Accent Secondary Color',
        type: 'text',
        default: '#ffe0f0'
      },
      {
        key: 'accentShape',
        label: 'Accent Shape',
        type: 'boolean',
        default: true
      },
      {
        key: 'backgroundColor',
        label: 'Background Color',
        type: 'text',
        default: '#ffffff'
      },
      {
        key: 'description',
        label: 'Description',
        type: 'text',
        default: 'This layout adapts seamlessly to any device, ensuring your content shines on phones, tablets, and desktops without extra tweaking.'
      },
      {
        key: 'descriptionColor',
        label: 'Description Color',
        type: 'text',
        default: 'rgba(15, 23, 42, 0.7)'
      },
      {
        key: 'dividerColor',
        label: 'Divider Color',
        type: 'text',
        default: '#e2e8f0'
      },
      {
        key: 'eyebrow',
        label: 'Eyebrow',
        type: 'text',
        default: '100% Responsive'
      },
      {
        key: 'eyebrowColor',
        label: 'Eyebrow Color',
        type: 'text',
        default: '#ff1f7d'
      },
      {
        key: 'eyebrowUppercase',
        label: 'Eyebrow Uppercase',
        type: 'boolean',
        default: true
      },
      {
        key: 'highlightColor',
        label: 'Highlight Color',
        type: 'text',
        default: '#ff1f7d',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'imageAlt',
        label: 'Image Alt',
        type: 'text',
        default: ''
      },
      {
        key: 'imageShadow',
        label: 'Image Shadow',
        type: 'boolean',
        default: true
      },
      {
        key: 'imageSrc',
        label: 'Image Src',
        type: 'text',
        required: true,
        ui: {
          component: 'ContentImageField'
        }
      },
      {
        key: 'maxImageShift',
        label: 'Max Image Shift',
        type: 'number',
        default: 0
      },
      {
        key: 'motionEasing',
        label: 'Motion Easing',
        type: 'number',
        default: 0.18
      },
      {
        key: 'motionIntensity',
        label: 'Motion Intensity',
        type: 'number',
        default: 0.12
      },
      {
        key: 'paddingX',
        label: 'Padding X',
        type: 'text',
        default: 'clamp(1.5rem, 5vw, 8rem)'
      },
      {
        key: 'paddingY',
        label: 'Padding Y',
        type: 'text',
        default: '6rem'
      },
      {
        key: 'showDivider',
        label: 'Show Divider',
        type: 'boolean',
        default: false
      },
      {
        key: 'textAlign',
        label: 'Text Align',
        type: 'text',
        default: 'left'
      },
      {
        key: 'textColor',
        label: 'Text Color',
        type: 'text',
        default: '#111827'
      },
      {
        key: 'title',
        label: 'Title',
        type: 'text',
        default: 'Fully Responsive & Perfectly fit to all Screens.'
      },
      {
        key: 'titleHighlight',
        label: 'Title Highlight',
        type: 'text',
        default: ''
      }
    ]
  },
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
