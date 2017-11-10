import * as Chart from 'chart.js'

declare module 'chart.js' {
  interface ChartOptions {
    pieceLabel: {
      /** default is `'percentage'` */
      render?: 'label' | 'value' | 'percentage' | 'image' | ((args: any) => string)

      /** precision for percentage, default is `0` */
      precision?: number

      /** identifies whether or not labels of value 0 are displayed, default is `false` */
      showZero?: boolean

      /** font size, default is `defaultFontSize` */
      fontSize?: number

      /** font color, can be color array for each data or function for dynamic color, default is `defaultFontColor` */
      fontColor?: string | ((args?: any) => string)

      /** font style, default is `defaultFontStyle` */
      fontStyle?: 'normal' | 'italic' | 'oblique'

      /** font family, default is `defaultFontFamily` */
      fontFamily?: string

      /** draw label in arc, default is `false` */
      arc?: boolean

      /** position to draw label, default is `'default'` */
      position?: 'default' | 'border' | 'outside'

      /** draw label even it's overlap, default is `false` */
      overlap?: boolean

      /** set images when `render` is 'image' */
      images?: {
        src: string
        width: number
        height: number
      }[]
    }
  }
}
