import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import jsonp from 'jsonp';
import { useTags, useLoading } from '../../core/FlickrContext';
import Loader from "react-loader-spinner";
import { Cover } from '../cover';
import { SearchBox, Input, TagElement, TagElementButton } from './styles';

const FLICKR_URL = 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&';

const TagsGroup = () => {
  const [tags, setTags] = useTags();

  const onDeleteTag = (deleteIndex) => (e) => {
    e.stopPropagation();
    const updatedTags = tags.filter((value, index) => deleteIndex !== index);
    setTags(updatedTags);
  }

  return (
    <div>
      { tags && tags.map((tag, index) => (
        <TagElement>
          { tag }
          <TagElementButton
            onClick={onDeleteTag(index)}
          >
            x
          </TagElementButton>
        </TagElement>
      ))}
    </div>
  );
}

export const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [tags, setTags] = useTags();
  const loading = useLoading();
  const inputEl = useRef();

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

  const onInputClick = () => {
    if (inputEl === null) { return; }
    inputEl.current.focus();
  }

  return (
    <Cover>
      <SearchBox onClick={onInputClick}>
        
        <TagsGroup />
        <Input
          placeholder="Search Flickr..."
          onChange={onTextChange}
          // onKeyDown={() => }
          value={searchString}
          ref={inputEl}
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
