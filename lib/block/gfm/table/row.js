/** @format */

import Parent from '@/muya-v2/block/base/parent'
import containerQueryBlock from '@/muya-v2/block/mixins/containerQueryBlock'
import ScrollPage from '@/muya-v2/block/scrollPage'
import { mixins } from '@/muya-v2/utils'

class TableRow extends Parent {
  static blockName = 'table.row'

  static create (muya, state) {
    const row = new TableRow(muya)

    row.append(...state.children.map(child => ScrollPage.loadBlock('table.cell').create(muya, child)))

    return row
  }

  get path () {
    const { path: pPath } = this.parent
    const offset = this.parent.offset(this)

    return [...pPath, offset]
  }

  constructor (muya) {
    super(muya)
    this.tagName = 'tr'

    this.classList = ['mu-table-row']
    this.createDomNode()
  }

  getState () {
    const state = {
      name: 'table.row',
      children: this.map(node => node.getState())
    }

    return state
  }
}

mixins(TableRow, containerQueryBlock)

export default TableRow
