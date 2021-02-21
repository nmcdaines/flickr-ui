import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import jsonp from 'jsonp';
import { useTags, useLoading } from '../../core/FlickrContext';
import Loader from "react-loader-spinner";
import { Cover } from '../cover';

const FLICKR_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&';

const SearchBox = styled.div`
  border-radius: 16px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.35);
  background: #fff;
  font-size: 22px;
  padding: 10px 20px;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;

  bottom: 30px;

  /* top: 0; */
  z-index: 100;
  transform: translateX(0);
`;

const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  font-size: 22px;
`;

const TagElement = styled.span`
  border-radius: 4px;
  border: 1px solid #2196F3;
  background-color: rgba(33,150,243,0.15);
  color: #2196F3;

  font-size: 16px;
  line-height: 22px;

  margin-right: 10px;
  padding: 4px 10px;
`;

const TagElementButton = styled.button`
  margin-left: 8px;
  border-radius: 4px;
  color: #2196F3;
  /* border: 1px solid #2196F3; */
  border: none;
  background: rgba(0,0,0,0.2);
`;

export const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [tags, setTags] = useTags();
  const loading = useLoading();

  useEffect(() => {
    jsonp(`${FLICKR_URL}${tags.length > 0 && `tags=${tags.join(',')}`}`);
  }, [tags]);

  const onTextChange = (e) => {
    const { value = '' } = e.target;

    if (value.length === 1 && value === ' ') {
      setSearchString('');
    } else if (value.length > 0 && value.indexOf(' ') > 0) {
      setTags([ ...tags, value.slice(0, value.length - 1) ]);
      setSearchString('');
    } else {
      setSearchString(value);
    }
  }

  

  return (
    <Cover>
    <SearchBox>
      
      { tags && tags.map((tag, index) => {

        return (
          <TagElement>
            { tag }
            <TagElementButton
              onClick={
                () => setTags(
                  tags.filter((value, tagIndex) => tagIndex !== index)
                )
              }
            >
              x
            </TagElementButton>
          </TagElement>
        )
      }) }
      <Input
        placeholder="Search Flickr..."
        onChange={onTextChange}
        value={searchString}
      />

      { loading && 
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={28}
          width={28}
          timeout={3000} //3 secs
        />
      }
    </SearchBox>
    </Cover>
  )
}
