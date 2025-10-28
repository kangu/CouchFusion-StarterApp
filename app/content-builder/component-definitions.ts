import type { ComponentDefinition } from '#content/types/builder'

const definitions: ComponentDefinition[] = [
  {
    id: 'content-plus-main-image',
    label: 'Content + Main Image',
    description: 'Split layout with copy on the left and a scroll-responsive hero image on the right.',
    props: [
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
        default: '#ff1f7d',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'eyebrowUppercase',
        label: 'Uppercase Eyebrow',
        type: 'boolean',
        default: true
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
        key: 'description',
        label: 'Description',
        type: 'textarea',
        default: 'This layout adapts seamlessly to any device, ensuring your content shines on phones, tablets, and desktops without extra tweaking.'
      },
      {
        key: 'descriptionColor',
        label: 'Description Color',
        type: 'text',
        default: 'rgba(15, 23, 42, 0.7)',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'textColor',
        label: 'Text Color',
        type: 'text',
        default: '#111827',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'backgroundColor',
        label: 'Background Color',
        type: 'text',
        default: '#ffffff',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'accentShape',
        label: 'Show Accent Shape',
        type: 'boolean',
        default: true
      },
      {
        key: 'accentColor',
        label: 'Accent Base Color',
        type: 'text',
        default: '#f3f4ff',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'accentSecondaryColor',
        label: 'Accent Secondary Color',
        type: 'text',
        default: '#ffe0f0',
        ui: {
          widget: 'color'
        }
      },
      {
        key: 'accentOpacity',
        label: 'Accent Opacity',
        type: 'number',
        default: 0.55
      },
      {
        key: 'imageSrc',
        label: 'Image Source',
        type: 'text',
        required: true,
        ui: {
          component: 'ContentImageField'
        }
      },
      {
        key: 'imageAlt',
        label: 'Image Alt Text',
        type: 'text',
        default: ''
      },
      {
        key: 'imageShadow',
        label: 'Enable Image Shadow',
        type: 'boolean',
        default: true
      },
      {
        key: 'maxImageShift',
        label: 'Max Image Shift (px, ≤0 for unlimited)',
        type: 'number',
        default: 0
      },
      {
        key: 'motionIntensity',
        label: 'Motion Intensity',
        type: 'number',
        default: 0.12
      },
      {
        key: 'motionEasing',
        label: 'Motion Easing',
        type: 'number',
        default: 0.18
      },
      {
        key: 'paddingY',
        label: 'Vertical Padding',
        type: 'text',
        default: '6rem'
      },
      {
        key: 'paddingX',
        label: 'Horizontal Padding',
        type: 'text',
        default: 'clamp(1.5rem, 5vw, 8rem)'
      },
      {
        key: 'textAlign',
        label: 'Text Alignment',
        type: 'select',
        options: [
          { label: 'Left', value: 'left' },
          { label: 'Center', value: 'center' }
        ],
        default: 'left'
      },
      {
        key: 'showDivider',
        label: 'Show Vertical Divider',
        type: 'boolean',
        default: false
      },
      {
        key: 'dividerColor',
        label: 'Divider Color',
        type: 'text',
        default: '#e2e8f0',
        ui: {
          widget: 'color'
        }
      }
    ],
    allowChildren: false,
    childHint: 'Standalone content block without nested children.'
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
