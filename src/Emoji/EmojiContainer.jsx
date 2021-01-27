import { makeStyles } from '@material-ui/styles';
import EmojiList from './EmojiList'

const useStyles = makeStyles({
  container: {
    background: 'rgba(133,131,126, 0.3)',
    borderRadius: 10,
    overflow: 'auto',
    maxHeight: 300,
    maxWidth: 300,
    padding: '8px 0 8px 8px'
  }
})

const EmojiContainer = ({ onSelect }) => {
  const { container } = useStyles()

  return (
    <div className={container} onClick={onSelect}>
      <EmojiList />
    </div>
  )
}

export default EmojiContainer
