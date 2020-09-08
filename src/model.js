import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
// import {css} from './utils'

const text = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi debitis voluptatem hic? Officiis quae numquam neque odio omnis expedita magnam aliquam facere quidem sit alias ipsum, libero explicabo? Dolor.
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h1',
    // styles: css({
    //   background: 'rgb(131, 58, 180)',
    //   background: 'linear-gradient(90 deg, rgba(131, 58, 180, 1) 0 % , rgba(253, 29, 222, 1) 50 % , rgba(252, 176, 69, 1) 100 % )'
    // })
    styles: 'background: rgb(131,58,180); background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,222,1) 50%, rgba(252,176,69,1) 100%); color: #fff;padding: 1.5rem;text-align: center;'
  }),
  new ImageBlock(image, {
    styles: 'padding: 0.5rem 0;',
    alt: 'My Image',
    imageStyles: 'width: 100%;'
  }),
  new TextColumnsBlock([
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi debitis voluptatem hic? Officiis quae numquam neque odio omnis expedita magnam aliquam facere quidem sit alias ipsum, libero explicabo? Dolor.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi debitis voluptatem hic? Officiis quae numquam neque odio omnis expedita magnam aliquam facere quidem sit alias ipsum, libero explicabo? Dolor.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi debitis voluptatem hic? Officiis quae numquam neque odio omnis expedita magnam aliquam facere quidem sit alias ipsum, libero explicabo? Dolor.'
  ], {
    styles: 'font-weight: 700; color: #fff; padding: 3rem 2rem; background: rgb(131,58,180); background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);'
  }),
  new TextBlock(text, {
    styles: 'font-weight: 700; color: #fff; padding: 3rem 2rem; background: rgb(63,94,251); background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);'
  })
]