/** @format */

// import '@/muya-v2/assets/styles/blockSyntax.css'
// import '@/muya-v2/assets/styles/index.css'
import { BLOCK_DOM_PROPERTY, CLASS_NAMES, MUYA_DEFAULT_OPTIONS } from '@/muya-v2/config'
import Editor from '@/muya-v2/editor'
import EventCenter from '@/muya-v2/event'
import Ui from '@/muya-v2/ui'
// import '@/muya-v2/assets/styles/index.css'
import '@/muya-v2/assets/styles/customStyle.less'
import '@/muya-v2/assets/styles/inlineSyntax.css'
import '@/muya-v2/assets/styles/prismjs/material-oceanic.css'

class Muya {
  static plugins = []

  static use(plugin, options = {}) {
    this.plugins.push({
      plugin,
      options,
    })
  }

  constructor(element, options = {}) {
    this.initial = false
    this.version = typeof MUYA_VERSION === 'undefined' ? 'dev' : MUYA_VERSION
    this.options = Object.assign({}, MUYA_DEFAULT_OPTIONS, options)
    this.domNode = getContainer(element, options)
    if (options.editable) {
      this.eventCenter = new EventCenter()
      this.domNode[BLOCK_DOM_PROPERTY] = this
      this.ui = new Ui(this)
    }
    this.editor = new Editor(this)
  }

  init() {
    this.editor.init()
    if (this.options.editable) {
      this.exportAPI()
      // UI plugins
      if (Muya.plugins.length) {
        for (const { plugin: Plugin, options: opts } of Muya.plugins) {
          this.ui[Plugin.pluginName] = new Plugin(this, opts)
        }
      }
    }
    this.initial = true
  }

  exportAPI() {
    const apis = {
      eventCenter: ['on', 'off', 'once'],
      editor: ['getState', 'getMarkdown', 'undo', 'redo', 'search', 'find', 'replace'],
    }

    Object.keys(apis).forEach(key => {
      for (const api of apis[key]) {
        this[api] = this[key][api].bind(this[key])
      }
    })
  }

  destroy() {
    if (Muya.plugins.length && this.ui) {
      for (const { plugin: Plugin } of Muya.plugins) {
        this.ui[Plugin.pluginName].destroy && this.ui[Plugin.pluginName].destroy()
      }
    }
    this.domNode[BLOCK_DOM_PROPERTY] = null
    this.editor.destroy()
  }
}

/**
 * [ensureContainerDiv ensure container element is div]
 */
function getContainer(originContainer, options) {
  const { spellcheckEnabled, hideQuickInsertHint } = options
  const newContainer = document.createElement('div')
  const attrs = originContainer.attributes
  // Copy attrs from origin container to new container
  Array.from(attrs).forEach(attr => {
    newContainer.setAttribute(attr.name, attr.value)
  })

  if (!hideQuickInsertHint) {
    newContainer.classList.add(CLASS_NAMES.MU_SHOW_QUICK_INSERT_HINT)
  }

  // newContainer.setAttribute('contenteditable', true)
  newContainer.setAttribute('autocorrect', false)
  newContainer.setAttribute('autocomplete', 'off')
  newContainer.setAttribute('spellcheck', !!spellcheckEnabled)
  originContainer.replaceWith(newContainer)

  return newContainer
}

export default Muya
