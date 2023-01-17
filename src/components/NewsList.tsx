import { Box, List, ListItem } from '@mui/material'
import React from 'react'

import { useMySelector } from '../redux/hooks/useMySelector'
import { NewsCard } from './NewsCard'
import { NoNewsCard } from './NoNewsCard'

export const NewsList = () => {
  const { articles } = useMySelector(state => state.newsReducer)
  const { infoIsVisible } = useMySelector(state => state.uiReducer)

  if (!infoIsVisible || !articles) return null
  if (articles.length == 0) return <NoNewsCard />

  const ArticlesCards = articles.map((article, index) => (
    <ListItem key={index}>
      <NewsCard article={article} />
    </ListItem>
  ))

  return (
    <Box sx={{ m: 2, width: '70%', height: '70%' }}>
      <List>{ArticlesCards}</List>
    </Box>
  )
}
