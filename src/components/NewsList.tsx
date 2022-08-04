import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Link,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material'

import { Everything } from '../types/Everything'
import { NewsCard } from './NewsCard'

type Props = {
  isVisible: boolean
  news?: Everything
}
export const NewsList = ({ isVisible, news }: Props) => {
  return !isVisible || news === undefined ? null : (
    <Box sx={{ m: 2, width: '70%', height: '70%' }}>
      <List>
        {news.articles.map((article, index) => (
          <ListItem key={index}>
            <NewsCard article={article} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
