import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  iconButton: {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: 24,
    cursor: 'pointer'
  }
})

const EmojiButton = ({ onClick, children }) => {
  const { iconButton } = useStyles()

  return (
    <button onClick={onClick} className={iconButton}>{children}</button>
  )
}

export default EmojiButton
