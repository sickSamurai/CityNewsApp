import { Card, CardContent, Stack, Typography, Divider, CardActions, Button } from '@mui/material'
import { Articles } from '../types/Everything'
import React from 'react'

type Props = {
  article: Articles
}

export const NewsCard = ({ article }: Props) => {
  return (
    <Card>
      <CardContent>
        <Stack direction='column'>
          <Typography variant='h6'>
            <b>{article.title}</b>
          </Typography>
          <Divider variant='middle' />
          <Typography sx={{ m: 2 }} variant='body2'>
            <b>Author:</b> {article.author || 'desconocido'}
          </Typography>
          <Typography variant='body1'>{article.description}</Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button href={article.url} size='small'>
          Leer Más
        </Button>
      </CardActions>
    </Card>
  )
}
