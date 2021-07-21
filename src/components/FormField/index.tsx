import styles from './styles'

interface FormFieldProps {
  id: string
  labelText?: string
  placeholder?: string
  handleChange?(input: string): void
}

const FormField: React.FC<FormFieldProps> = (props) => {

  const {
    id,
    labelText,
    placeholder = 'place holder text',
    handleChange = () => {}
  } = props

  const onChange = (e: any) => {
    handleChange(e.target.value)
  }

  return (
    <styles.FormField>
      <styles.label htmlFor={id}>{labelText}</styles.label>
      <styles.input id={id} name={id} placeholder={placeholder} onChange={onChange} />
    </styles.FormField>
  )
}

export default FormField