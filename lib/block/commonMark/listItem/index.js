/** @format */

import Parent from '@/muya-v2/block/base/parent'
import containerQueryBlock from '@/muya-v2/block/mixins/containerQueryBlock'
import ScrollPage from '@/muya-v2/block/scrollPage'
import { mixins } from '@/muya-v2/utils'

class ListItem extends Parent {
  static blockName = 'list-item'

  static create (muya, state) {
    const listItem = new ListItem(muya)

    listItem.append(...state.children.map(child => ScrollPage.loadBlock(child.name).create(muya, child)))

    return listItem
  }

  get path () {
    const { path: pPath } = this.parent
    const offset = this.parent.offset(this)

    return [...pPath, offset, 'children']
  }

  constructor (muya) {
    super(muya)
    this.tagName = 'li'
    this.classList = ['mu-list-item']
    this.createDomNode()
  }

  getState () {
    const state = {
      name: this.blockName,
      children: this.children.map(child => child.getState())
    }

    return state
  }
}

mixins(ListItem, containerQueryBlock)

export default ListItem
