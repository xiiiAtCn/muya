/** @format */

import copyIcon from '@/muya-v2/assets/icons/copy/2.png'
import Parent from '@/muya-v2/block/base/parent'
import ScrollPage from '@/muya-v2/block/scrollPage'
import logger from '@/muya-v2/utils/logger'
import { h, toHTML } from '@/muya-v2/utils/snabbdom'

const debug = logger('code:')

const renderCopyButton = () => {
  const selector = 'a.mu-code-copy'
  const iconVnode = h(
    'i.icon',
    h(
      'i.icon-inner',
      {
        style: {
          background: `url(${copyIcon}) no-repeat`,
          'background-size': '100%',
        },
      },
      '',
    ),
  )

  return h(
    selector,
    {
      attrs: {
        title: 'Copy content',
        contenteditable: 'false',
      },
    },
    iconVnode,
  )
}

class Code extends Parent {
  static blockName = 'code'

  static create(muya, state) {
    const code = new Code(muya, state)

    code.append(ScrollPage.loadBlock('codeblock.content').create(muya, state))

    return code
  }

  get path() {
    const { path: pPath } = this.parent

    return [...pPath]
  }

  constructor(muya) {
    super(muya)
    this.tagName = 'code'
    this.classList = ['mu-code']
    this.createDomNode()
    this.createCopyNode()
    if (muya.options.editable) {
      this.listen()
    }
  }

  getState() {
    debug.warn('You can never call `getState` in code')
  }

  createCopyNode() {
    this.domNode.innerHTML = toHTML(renderCopyButton())
  }

  listen() {
    const { eventCenter, editor } = this.muya
    const clickHandler = event => {
      event.preventDefault()
      event.stopPropagation()
      const codeContent = this.firstContentInDescendant()
      console.log(codeContent.text)
      editor.clipboard.copy('copyCodeContent', codeContent.text)
    }

    const mousedownHandler = event => {
      event.preventDefault()
    }

    const copyHandler = event => {
      event.preventDefault()
      // get text representation of clipboard
      let text = (event.originalEvent || event).clipboardData.getData('text/plain')
      // insert text manually
      console.log(text)
      document.execCommand('insertHTML', false, text)
    }

    this.domNode.addEventListener('paste', copyHandler)

    eventCenter.attachDOMEvent(this.domNode.firstElementChild, 'click', clickHandler)
    eventCenter.attachDOMEvent(this.domNode.firstElementChild, 'mousedown', mousedownHandler)
  }
}

export default Code
