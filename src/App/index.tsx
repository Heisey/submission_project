import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Icon, SearchBar, Student } from '../components'
import { types } from '../core'
import styles from './styles'

interface filterTextOfArrayProps {
  (arr: types.StudentData[] | undefined, searchStr: string): void
}

function App() {

  const [studentData, studentDataHandler] = useState<types.StudentData[] | undefined>(undefined)
  const [filteredStudentData, filteredStudentDataHandler] = useState<types.StudentData[] | undefined>(studentData) 
  const [filteredTagData, filteredTagDataHandler] = useState<types.StudentData[] | undefined>(filteredStudentData) 
  const [searchValue, searchValueHandler] = useState('')
  const [tagSearchValue, tagSearchValueHandler] = useState('')
  const [openedCards, openedCardsHandler] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: 'https://api.hatchways.io/assessment/students'
        })

        const revisedData = data.students.map((entry: types.StudentData) => {
          entry.tags = []
          return entry
        })
        
        studentDataHandler(revisedData)
        filteredStudentDataHandler(revisedData)
        filteredTagDataHandler(revisedData)
      } catch (err) {
        console.log(err)
      }
    }

    if (studentData) {
      return 
    } else {
      fetchData()
    }
  }, [studentData])
  
  const filterTextOfArray: (filterTextOfArrayProps) = (arr, searchStr) => {
    if (!arr) {
      return
    }

    if (searchStr === '') {
      filteredStudentDataHandler(studentData)
      filterTagsOfArray(studentData, tagSearchValue)
      return
    }
    const filterText = arr.filter(student => `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`.includes(searchStr.toLowerCase()))

    filteredStudentDataHandler(filterText)
    if (!tagSearchValue) {
      filteredTagDataHandler(filterText)
      return
    }
    
    filterTagsOfArray(filterText, tagSearchValue)
  }

  const handleShowMore = (id: string) => {
    if (openedCards.length === 0) {
      openedCardsHandler([id])
      return
    }

    if (openedCards.includes(id)) {
      openedCardsHandler(openedCards.filter(cardId => cardId !== id))
      return
    }

    openedCardsHandler([...openedCards, id])
    return
  }

  const handleValue = (value: string) => {

    searchValueHandler(value)
    filterTextOfArray(studentData, value)
  }

  const filterTagsOfArray: (filterTextOfArrayProps) = (arr, searchStr) => {
    if (!arr) {
      return
    }

    if (searchStr === '') {
      return
    }
    
    const filterTags = arr.filter(student => student.tags?.join(' ~&~ ').toLowerCase().includes(tagSearchValue.toLowerCase()))

    filteredTagDataHandler(filterTags)
  }

  const handleTagValue = (value: string) => {
    tagSearchValueHandler(value)
    filterTagsOfArray(filteredStudentData, value)
  }

  const handleTags = (id: string, tag: string) => {

    const student = filteredStudentData?.filter((student) => {
      return student.id === id
    })[0]

    if (!student) {
      return
    }

    if (student.tags === undefined) {
      student.tags = []
    }

    student.tags = [...student.tags, tag]

    if (!filteredStudentData) {
      return
    }
    
    const freshFilteredData = filteredStudentData.map(x => x)

    const studentIndex = freshFilteredData.findIndex(staleStudent => staleStudent.id === student.id)

    freshFilteredData[studentIndex] = student
    
    filteredStudentDataHandler(freshFilteredData)
  }

  return (
    <styles.App>
      <SearchBar 
        initValue={searchValue}
        getValue={handleValue}
        placeholder='Search By Name'
      />
      <SearchBar
        initValue={tagSearchValue}
        getValue={handleTagValue}
        placeholder='Search By Tag'
      />
      {filteredTagData && filteredTagData.map((student: types.StudentData) => (

        <styles.studentContainer
          key={student.id}
        >
          <Student 
            city={student.city}
            company={student.company}
            email={student.email}
            firstName={student.firstName}
            grades={student.grades}
            id={student.id}
            lastName={student.lastName}
            pic={student.pic}
            skill={student.skill}
            isOpen={openedCards.includes(student.id)}
            tags={student.tags}
            tagsHandler={handleTags}
          />
          <styles.iconContainer>
            <Icon
              icon={openedCards.includes(student.id) ? 'minus' : 'plus'}
              id={student.id} 
              onClick={handleShowMore} 
            />
          </styles.iconContainer>
        </styles.studentContainer>
      ))}
    </styles.App>
  );
}

export default App;


