
import { default as Emojies } from './emojies'

export const Emoji = ({ index }: { index: number | string }) => {
  const Emoji = Emojies['Emoji' + index.toString() as keyof typeof Emojies]

  if (!Emoji) return null
  return (<Emoji />)
}
