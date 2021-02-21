import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Card, CardMedia, CardActions } from '../../components/card';
import { Button } from '../../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

import { useTags } from '../../core/FlickrContext'; 

const PillBase = styled.span`
  background: rgba(0,0,0,0.4);
  color: #fff;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const DateTimePill = styled(PillBase)`
  position: absolute;
  left: 10px;
  top: 10px;
`;

const AuthorPill = styled(PillBase)`
  position: absolute;
  left: 10px;
  bottom: 10px;
`;


export const FlickrCard = ({
  tags = '',
  date_taken,
  published,
  link,
  media,
  author,
}) => {
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [searchTags, setTags] = useTags();
  const tagsArray = (tags || '').split(' ');
  const date = moment(date_taken || published);

  return (
    <Card>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <CardMedia url={media?.m} >
          <DateTimePill>
            <FontAwesomeIcon icon={faCalendar} />  <span style={{ marginLeft: '4px' }}>{ date.format('MMMM DD, YYYY') }</span>
          </DateTimePill>
          <AuthorPill>
            Photo by { author?.split(/\("(.*)"\)/gm)[1] }
          </AuthorPill>
        </CardMedia>
      </a>
      <CardActions>
        { !showMoreTags &&
          <>
            { tagsArray && tagsArray.slice(0,7).map((tag) => {
              return (
                <Button onClick={() => setTags([...searchTags, tag])}>
                  { tag }
                </Button>
              )
            })}

            { tagsArray.length >= 8 &&
              <Button onClick={() => setShowMoreTags(true)}>
                ...
              </Button>
            } 
          </>
        }

        { showMoreTags &&
          <>
            { tagsArray && tagsArray.map((tag) => {
              return (
                <Button onClick={() => setTags([...searchTags, tag])}>
                  { tag }
                </Button>
              )
            })}
          </>
        }

        
      </CardActions>
    </Card>
  );
}
