import { Box, List, ListItem } from '@mui/material'
import React from 'react'

import { Everything } from '../types/Everything'
import { NewsCard } from './NewsCard'

type Props = {
  isVisible: boolean
  news?: Everything
}

export const NewsList = ({ isVisible, news }: Props) => {
  if (!isVisible || news === undefined) return null
  else
    return (
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
