/** @format */

import { CLASS_NAMES } from '@/muya-v2/config'
import emojis from '@/muya-v2/config/emojis.json'

/**
 * check if one emoji code is in emojis, return undefined or found emoji
 */
export const validEmoji = text => {
  return emojis.find(emoji => {
    return emoji.aliases.includes(text)
  })
}

/**
 * check edit emoji
 */

export const checkEditEmoji = node => {
  if (node && node.classList.contains(CLASS_NAMES.MU_EMOJI_MARKED_TEXT)) {
    return node
  }

  return false
}
