import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface NewsCardProps {
  title: string;
  link: string;
  score: number;
  author: string;
  age: string;
  numberOfComments: number;
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
`

const StyledCardActions = styled(CardActions)`
  margin-top: auto;
  margin-left: 8px;
  margin-right: 8px;
`

const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="subtitle1">{props.title}</Typography>
        <Typography variant="body2">
          {`
            ${props.score} points | 
            by ${props.author} | 
            ${props.age} | 
            ${props.numberOfComments} comments
          `}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size="small" href={props.link} target="_blank">Learn More</Button>
      </StyledCardActions>
    </StyledCard>
  )
}

export default NewsCard;
