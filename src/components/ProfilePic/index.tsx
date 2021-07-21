import styles from './styles'

interface ProfilePicProps {
  imageSrc: string
}

const ProfilePic: React.FC<ProfilePicProps> = (props) => {

  const {
    imageSrc
  } = props
  return (
    <styles.ProfilePic src={imageSrc} />
  )
}

export default ProfilePic