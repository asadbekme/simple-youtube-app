import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Main from '../main/Main'
import Channel from '../channel/Channel'
import VideoDetail from '../video-detail/VideoDetail'
import Search from '../search/Search'
import Navbar from '../navbar/Navbar'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/search/:id' element={<Search />} />
      </Routes>
    </Box>
  )
}

export default App

