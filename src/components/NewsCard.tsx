import { Button, Card, CardActions, CardContent, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

import { Article } from '../models/everything.model'

type Props = {
  article: Article
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
        <Button href={article.url} target='_blank' size='small'>
          Leer Más
        </Button>
      </CardActions>
    </Card>
  )
}
