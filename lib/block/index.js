/** @format */

import ScrollPage from '@/muya-v2/block/scrollPage'
// leaf block
import Frontmatter from '@/muya-v2/block//extra/frontmatter'
import AtxHeading from '@/muya-v2/block/commonMark/atxHeading'
import CodeBlock from '@/muya-v2/block/commonMark/codeBlock'
import Code from '@/muya-v2/block/commonMark/codeBlock/code'
import HTMLBlock from '@/muya-v2/block/commonMark/html'
import HTMLContainer from '@/muya-v2/block/commonMark/html/htmlContainer'
import Paragraph from '@/muya-v2/block/commonMark/paragraph'
import SetextHeading from '@/muya-v2/block/commonMark/setextHeading'
import ThematicBreak from '@/muya-v2/block/commonMark/thematicBreak'
import DiagramBlock from '@/muya-v2/block/extra/diagram'
import DiagramContainer from '@/muya-v2/block/extra/diagram/diagramContainer'
import MathBlock from '@/muya-v2/block/extra/math'
import MathContainer from '@/muya-v2/block/extra/math/mathContainer'
import Table from '@/muya-v2/block/gfm/table'
import Cell from '@/muya-v2/block/gfm/table/cell'
import TableRow from '@/muya-v2/block/gfm/table/row'
import TableInner from '@/muya-v2/block/gfm/table/table'
// container block
import BlockQuote from '@/muya-v2/block/commonMark/blockQuote'
import BulletList from '@/muya-v2/block/commonMark/bulletList'
import ListItem from '@/muya-v2/block/commonMark/listItem'
import OrderList from '@/muya-v2/block/commonMark/orderList'
import TaskList from '@/muya-v2/block/gfm/taskList'
import TaskListItem from '@/muya-v2/block/gfm/taskListItem'
// content
import AtxHeadingContent from '@/muya-v2/block/content/atxHeadingContent'
import CodeBlockContent from '@/muya-v2/block/content/codeBlockContent'
import LangInputContent from '@/muya-v2/block/content/langInputContent'
import ParagraphContent from '@/muya-v2/block/content/paragraphContent'
import SetextHeadingContent from '@/muya-v2/block/content/setextHeadingContent'
import TableCellContent from '@/muya-v2/block/content/tableCell'
import ThematicBreakContent from '@/muya-v2/block/content/thematicBreakContent'
// Attachment Block
import HTMLPreview from '@/muya-v2/block/commonMark/html/htmlPreview'
import DiagramPreview from '@/muya-v2/block/extra/diagram/diagramPreview'
import MathPreview from '@/muya-v2/block/extra/math/mathPreview'
import TaskListCheckbox from '@/muya-v2/block/gfm/taskListCheckbox'

// Register itself
ScrollPage.register(ScrollPage)
ScrollPage.register(Paragraph)
ScrollPage.register(ParagraphContent)
ScrollPage.register(AtxHeading)
ScrollPage.register(AtxHeadingContent)
ScrollPage.register(SetextHeading)
ScrollPage.register(SetextHeadingContent)
ScrollPage.register(BlockQuote)
ScrollPage.register(ThematicBreak)
ScrollPage.register(ThematicBreakContent)
ScrollPage.register(CodeBlock)
ScrollPage.register(Code)
ScrollPage.register(LangInputContent)
ScrollPage.register(CodeBlockContent)
ScrollPage.register(OrderList)
ScrollPage.register(ListItem)
ScrollPage.register(BulletList)
ScrollPage.register(TaskList)
ScrollPage.register(TaskListItem)
ScrollPage.register(TaskListCheckbox)
// Table
ScrollPage.register(Table)
ScrollPage.register(TableInner)
ScrollPage.register(TableRow)
ScrollPage.register(Cell)
ScrollPage.register(TableCellContent)
// HTML
ScrollPage.register(HTMLBlock)
ScrollPage.register(HTMLPreview)
ScrollPage.register(HTMLContainer)
// Math
ScrollPage.register(MathBlock)
ScrollPage.register(MathPreview)
ScrollPage.register(MathContainer)
// FrontMatter
ScrollPage.register(Frontmatter)
// Diagram
ScrollPage.register(DiagramBlock)
ScrollPage.register(DiagramContainer)
ScrollPage.register(DiagramPreview)

export default ScrollPage
