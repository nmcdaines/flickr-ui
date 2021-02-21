import React, { useState, useEffect, useRef } from 'react';
import jsonp from 'jsonp';
import { useTags, useLoading } from '../../core/FlickrContext';
import Loader from "react-loader-spinner";
import { Cover } from '../cover';
import { SearchBox, SearchBoxInner, Input, TagElement, TagElementButton } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon icon={faTimes} />
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

  const onSearchEnter = (e) => {
    let keyPressed = e.keyCode || e.which;
    if (keyPressed === 13 && e.target.value.length > 0 && e.target.value !== ' ') {
      e.stopPropagation();

      setTags([...tags, e.target.value]);
      setSearchString('');

      if (inputEl !== null) {
        inputEl.current.blur();
      }
    }
  }

  return (
    <Cover>
      <SearchBox onClick={onInputClick}>
        <SearchBoxInner>
          <Input
            placeholder="Search image tags"
            onChange={onTextChange}
            onKeyDown={onSearchEnter}
            value={searchString}
            ref={inputEl}
          />
          <TagsGroup />
        </SearchBoxInner>
        

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
