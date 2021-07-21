import { types } from '../../core'
import styles from './styles'

const Text: React.FC<types.TypographyProps> = (props) => {

  const {
    text = 'Enter Text'
  } = props

  return (
    <styles.Text>
      {text}
    </styles.Text>
  )
}

export default Text