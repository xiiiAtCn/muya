/** @format */

import Parent from '@/muya-v2/block/base/parent'
import leafQueryBlock from '@/muya-v2/block/mixins/leafQueryBlock'
import ScrollPage from '@/muya-v2/block/scrollPage'
import { mixins } from '@/muya-v2/utils'

class Paragraph extends Parent {
  static blockName = 'paragraph'

  static create (muya, state) {
    const paragraph = new Paragraph(muya)

    paragraph.append(ScrollPage.loadBlock('paragraph.content').create(muya, state.text))

    return paragraph
  }

  get path () {
    const { path: pPath } = this.parent
    const offset = this.parent.offset(this)

    return [...pPath, offset]
  }

  constructor (muya) {
    super(muya)
    this.tagName = 'p'
    this.classList = ['mu-paragraph']
    this.createDomNode()
  }

  getState () {
    return {
      name: 'paragraph',
      text: this.children.head.text
    }
  }
}

mixins(Paragraph, leafQueryBlock)

export default Paragraph
