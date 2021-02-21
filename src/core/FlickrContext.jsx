import React, { useState, useEffect } from 'react';

const FlickrContext = React.createContext(undefined);
const TagsContext = React.createContext(undefined);
const SetTagsContext = React.createContext(undefined);
const LoadingContext = React.createContext(true);

export const FlickrProvider = ({ children }) => {
  const [flickrData, setFlickrData] = useState({});
  const [tags, setTags] = useState(['nature', 'birds']);
  const [loading, setLoading] = useState(true);

  const setTagsFn = (changedTags = []) => {
    setLoading(true);

    const tagSet = new Set();

    setTags(changedTags.filter((tag) => {
      if (tagSet.has(tag)) { return undefined; }
      tagSet.add(tag);
      return tag;
    }));
  }

  useEffect(() => {
    window.jsonFlickrFeed = (value) => {
      if (!value) { return; }
      setLoading(false);
      setFlickrData(value?.items);
    };

    return () => {
      // remove function 'jsonFlickrFeed' from window on component unmount
      window.jsonFlickrFeed = undefined;
    }
  }, []);

  return (
    <>
      <FlickrContext.Provider value={flickrData}>
        <TagsContext.Provider value={tags}>
          <SetTagsContext.Provider value={setTagsFn}>
            <LoadingContext.Provider value={loading}>
              { children }
            </LoadingContext.Provider>
          </SetTagsContext.Provider>
        </TagsContext.Provider>
      </FlickrContext.Provider>
    </>
  );
}

export const useFlickr = () => {
  const context = React.useContext(FlickrContext);
  if (context === undefined) {
    throw new Error('useFlickr must be used within a FlickrProvider');
  }
  return context;
}

export const useTags = () => {
  const tagsContext = React.useContext(TagsContext);
  const setTagsContext = React.useContext(SetTagsContext);
  if (tagsContext === undefined || setTagsContext === undefined) {
    throw new Error('useTags must be used within a FlickrProvider');
  }
  return [tagsContext, setTagsContext];
}

export const useLoading = () => {
  const context = React.useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a FlickrProvider');
  }
  return context;
}
