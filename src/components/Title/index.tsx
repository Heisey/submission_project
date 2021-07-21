import { types } from '../../core'
import styles from './styles'

const Title: React.FC<types.TypographyProps> = (props) => {

  const {
    text = 'Enter Title Text'
  } = props

  return (
    <styles.Title>
      {text}
    </styles.Title>
  )
}

export default Title