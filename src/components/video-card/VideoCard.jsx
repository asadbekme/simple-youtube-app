import { Stack, Card, CardContent, CardMedia, Typography, Avatar } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { colors } from '../../constants/colors'
import moment from 'moment'

const VideoCard = ({ video }) => {
  // console.log(video)

  return (
    <Card sx={{ width: '308px', boxShadow: 'none', borderRadius: 0 }}>
      <CardMedia 
        image={video?.snippet?.thumbnails?.high?.url} 
        alt={video?.snippet?.title}
        sx={{ width: '350px', height: '180px' }}
      />

      <CardContent sx={{ background: colors.primary, height: '210px', position: 'relative' }}>
        <>
          <Typography my={'5px'} sx={{ opacity: '.4'}}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant='subtitle1' fontWeight={'bold'}>
            {video?.snippet?.title.slice(0, 52)}
          </Typography>
          <Typography variant='subtitle2' sx={{ opacity: '.6' }}>{video?.snippet?.description.slice(0, 77)}</Typography>
        </>
        <>
          <Stack 
            direction={'row'}
            alignItems={'center'}
            position={'absolute'}
            bottom={'10px'}
            gap={'5px'}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant={'subtitle2'} color={'gray'}>
              {video?.snippet?.channelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '4px' }} />
          </Stack>
        </>
      </CardContent>
    </Card>
  )
}

export default VideoCard