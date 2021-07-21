import styled from 'styled-components/macro'

interface SimpleContainerProps {
  paddingBottom?: string
  paddingLeft?: string
  paddingTop?: string
}

export const simpleContainer = styled.div<SimpleContainerProps>`
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : '0'};
  padding-top: ${props => props.paddingTop ? props.paddingTop : '0'};
  padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0'};
`

export const imageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`