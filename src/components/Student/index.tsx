import React, { useState } from "react";
import { ProfilePic, Tag, Text, Title } from "..";
import { types } from '../../core'
import styles from './styles'

interface ExtendedStudentData extends types.StudentData {
  isOpen: boolean
  tagsHandler:(id: string, tag: string) => void
}

const Student: React.FC<ExtendedStudentData> = (props) => {

  const {
    company,
    email,
    firstName,
    grades,
    id,
    isOpen,
    lastName,
    pic,
    skill,
    tags,
    tagsHandler
  } = props

  const [formValues, formValuesHandler] = useState('')

  const averageGrades = (grades: string[]) => {
    let sum = 0
    grades.forEach((grade: string) => {
      sum+= parseFloat(grade)
    })

    return sum / grades.length
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    formValuesHandler(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formValues)
    if (!formValues) {
      return
    }
    tagsHandler(id, formValues)
    
    formValuesHandler('')
  }

  return (
    <styles.Student>
      <styles.imageContainer>
        <ProfilePic imageSrc={pic} />
      </styles.imageContainer>
      <styles.simpleContainer paddingLeft='40px'>
        <Title text={`${firstName} ${lastName}`} />
        <styles.simpleContainer paddingLeft='20px'>
          <Text text={`Email: ${email}`} />
          <Text text={`Company: ${company}`} />
          <Text text={`Skill: ${skill}`} />
          <Text text={`Average: ${averageGrades(grades)}%`} />
        </styles.simpleContainer>
        
        {isOpen && (
          <styles.simpleContainer paddingLeft='20px' >
            {grades.map((grade, i) => (
              <div>Test {i + 1}: {grade}</div>
            ))}
          </styles.simpleContainer>
        )}

        <styles.simpleContainer paddingTop={isOpen ? '20px' : '0px'} paddingBottom='20px' paddingLeft='20px'>
          {tags && tags.map((tag, i) => (
            <Tag key={tag} marginLeft={i !== 1 ? '0px' : '10px'} text={tag} />
          ))}
          
        </styles.simpleContainer>
        
        <styles.simpleContainer paddingLeft='20px'>
          <form
            onSubmit={handleSubmit}
          >
            <styles.tagInput type='text' placeholder="Add a tag" value={formValues} onChange={handleChange}  id='tag' name='tag' />
          </form>
        </styles.simpleContainer>
        
      </styles.simpleContainer>
    </styles.Student>
  )
}

export default Student