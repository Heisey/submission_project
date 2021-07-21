import { Field } from 'formik'
import styled from 'styled-components/macro'

export const label = styled.label``

export const input = styled(Field)`
  width: 100%;
  font-size: 20px;
  padding: 10px 0;
  padding-left: 20px;
  text-transform: capitalize;
  border-left: none;
  border-top: none;
  border-right: none;
`