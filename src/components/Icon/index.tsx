import styles from './styles'

interface IconProps {
  icon: string
  size?: string
  color?: string
  onClick?(id?: string): void
  id?: string
}
const Icon: React.FC<IconProps> = (props) => {

  const {
    icon,
    color = 'grey',
    id,
    size = '50px',
    onClick = (id?: string) => {}
  } = props

  const renderIcon = () => {
    switch(icon) {
      case 'minus':
        return <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      case 'plus':
        return <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      default: 
        return <path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
    }
  }

  const viewBow = () => {
    switch(icon) {
      case 'minus':
        return ['448', '512']
      case 'plus':
        return ['448', '512']
      default: 
        return ['512', '512']
    }
  }

  const calcWidth = (x: number, y: number, size: string): string => {
    const factor = x / y

    const sizeVal = parseFloat(size.split('px')[0])
    return `${factor * sizeVal}px`
  }

  const handleOnClick = () => {
    if (!id) {
      onClick()
      return
    }

    onClick(id)
    return
  }

  return (
    <styles.Icon
      height={size}
      width={calcWidth(parseInt(viewBow()[0]), parseInt(viewBow()[1]), '50px')}
      xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewBow()[0]} ${viewBow()[1]}`}
      fill={color}
      stroke={color}
      onClick={handleOnClick}
    >
      {renderIcon()}
    </styles.Icon>
  )
}

export default Icon