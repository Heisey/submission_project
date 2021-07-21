import styled from 'styled-components/macro'

interface TagStylesProps {
  marginLeft?: string
}

export const Tag = styled.span<TagStylesProps>`
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: lightgray;
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0'};
  border-radius: 5px;
`