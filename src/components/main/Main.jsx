import React, { useEffect, useState } from 'react'
import { Box, Stack, Container, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import Category from '../category/Category'
import Videos from '../videos/Videos'
import { ApiService } from '../../service/apiService'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        // console.log(data)
        setVideos(data.items)
      } catch(error) {
        console.log(error)
      }
    } 

    getData()
  }, [selectedCategory])

  const selectedCategoryHandler = (category) => {
    setSelectedCategory(category)
  }

  return (
    <Stack>
      <Category selectedCategory={selectedCategory} selectedCategoryHandler={selectedCategoryHandler} />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{ color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main