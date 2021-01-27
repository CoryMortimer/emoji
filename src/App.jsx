import { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import EmojiContainer from './Emoji/EmojiContainer'
import { Popover } from 'react-tiny-popover'

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    marginBottom: 16
  }
})

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState()
  const { container } = useStyles()

  const closePopover = () => setIsOpen(false)

  const onSelectEmoji = (emoji) => {
    setSelectedEmoji(emoji)
    closePopover()
  }

  return (
    <div className={container}>
      <h1>{selectedEmoji || 'None selected'}</h1>
      <Popover
        isOpen={isOpen}
        positions={['bottom']}
        onClickOutside={closePopover}
        content={<EmojiContainer onSelect={onSelectEmoji} />}
      >
        <button onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}>Open</button>
      </Popover>
    </div>
  )
}

export default App
