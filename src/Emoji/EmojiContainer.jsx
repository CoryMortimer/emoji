import { makeStyles } from '@material-ui/styles';
import EmojiList from './EmojiList'
import Speech from './Speech'

const useStyles = makeStyles({
  container: {
    background: 'rgba(133,131,126, 0.3)',
    borderRadius: 10,
    overflow: 'auto',
    maxHeight: 300,
    maxWidth: 300,
    padding: '8px 0 8px 8px'
  },
  speechContainer: {
    textAlign: 'right'
  }
})

const EmojiContainer = ({ onSelect }) => {
  const { container, speechContainer } = useStyles()

  return (
    <div className={container}>
      <div className={speechContainer}>
        <Speech onSelect={onSelect}/>
      </div>
      <div onClick={(event) => onSelect(event.target.innerText)}>
        <EmojiList />
      </div>
    </div>
  )
}

export default EmojiContainer
