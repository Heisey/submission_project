import styles from './styles'

interface TagProps {
  marginLeft?: string
  text?: string
}

const Tag: React.FC<TagProps> = (props) => {

  const {
    text = 'Enter Tag Text',
    marginLeft
  } = props

  return (
    <styles.Tag
      marginLeft={marginLeft}
    >
      {text}
    </styles.Tag>
  )
}

export default Tag