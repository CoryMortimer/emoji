import { emoji } from 'emoji-unicode-map';
import EmojiButton from './EmojiButton'

const EmojiList = () => {
  return (
    <>
      {Object.keys(emoji).map((icon) => {
        return <EmojiButton key={icon}>{icon}</EmojiButton>
      })}
    </>
  )
}

export default EmojiList
