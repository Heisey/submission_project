import { Formik } from 'formik'
import { FormField } from '..'
import styles from './styles'

interface SearchBarProps {
  initValue: string
  getValue(value: string): void,
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = (props) => {

  const {
    initValue,
    getValue,
    placeholder
  } = props

  const handleSubmit = () => {}

  const handleChange = (input: string) => {
    getValue(input)
  }

  return (
      <Formik
        initialValues={{
          name: initValue
        }}
        onSubmit={handleSubmit}
      >
        <styles.SearchBar>
          <FormField 
            id='test'
            placeholder={placeholder}
            handleChange={handleChange}
          />
        </styles.SearchBar>
      </Formik>
  )
}

export default SearchBar