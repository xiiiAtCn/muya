/** @format */

import Muya from '.'
import EmojiPicker from './ui/emojiPicker'
import FormatPicker from './ui/formatPicker'
// import ImagePicker from '../lib/ui/imagePicker'
import CodePicker from './ui/codePicker'
import ImageSelector from './ui/imageSelector'
import ImageToolBar from './ui/imageToolbar'
import PreviewTools from './ui/previewTools'
import QuickInsert from './ui/quickInsert'
import TableColumnTools from './ui/tableColumnTools'
import TableDragBar from './ui/tableDragBar'
import TableTools from './ui/tableTools'
import ImageTransformer from './ui/transformer'

import FrontButton from './ui/frontButton'
import FrontMenu from './ui/frontMenu'
Muya.use(EmojiPicker)
Muya.use(FormatPicker)
// Muya.use(ImagePicker)
Muya.use(ImageSelector, {
  unsplashAccessKey: '-sVvwopZmrqHDmfY6ccXUXmMz6w4YWAmHZw9dRPVcAU'
})
Muya.use(ImageToolBar)
Muya.use(ImageTransformer)
Muya.use(CodePicker)

Muya.use(FrontButton)
Muya.use(FrontMenu)
Muya.use(TableColumnTools)
Muya.use(QuickInsert)
Muya.use(TableDragBar)
Muya.use(TableTools)
Muya.use(PreviewTools)

export default Muya
