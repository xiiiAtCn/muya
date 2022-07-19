/** @format */

import Parent from '@/muya-v2/block/base/parent'
import leafQueryBlock from '@/muya-v2/block/mixins/leafQueryBlock'
import ScrollPage from '@/muya-v2/block/scrollPage'
import { mixins } from '@/muya-v2/utils'

class AtxHeading extends Parent {
  static blockName = 'atx-heading'

  static create(muya, state) {
    const heading = new AtxHeading(muya, state)

    heading.append(ScrollPage.loadBlock('atxheading.content').create(muya, state.text))

    return heading
  }

  get path() {
    const { path: pPath } = this.parent
    const offset = this.parent.offset(this)

    return [...pPath, offset]
  }

  constructor(muya, { meta }) {
    super(muya)
    this.tagName = `h${meta.level}`
    this.meta = meta
    this.classList = ['mu-atx-heading']
    this.createDomNode()
  }

  getState() {
    return {
      name: 'atx-heading',
      meta: this.meta,
      text: this.children.head.text,
    }
  }
}

mixins(AtxHeading, leafQueryBlock)
console.log('AtxHeading: ', AtxHeading.prototype)
export default AtxHeading
