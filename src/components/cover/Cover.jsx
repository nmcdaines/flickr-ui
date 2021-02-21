import React from 'react';
import styled from 'styled-components';

const Picture = styled.picture`
  position: relative;
  box-sizing: border-box;

  &:after {
    content: '';
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    background: linear-gradient(180deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 3.5%,rgba(0,0,0,.379) 7%,rgba(0,0,0,.377) 10.35%,rgba(0,0,0,.375) 13.85%,rgba(0,0,0,.372) 17.35%,rgba(0,0,0,.369) 20.85%,rgba(0,0,0,.366) 24.35%,rgba(0,0,0,.364) 27.85%,rgba(0,0,0,.361) 31.35%,rgba(0,0,0,.358) 34.85%,rgba(0,0,0,.355) 38.35%,rgba(0,0,0,.353) 41.85%,rgba(0,0,0,.351) 45.35%,rgba(0,0,0,.35) 48.85%,rgba(0,0,0,.353) 52.35%,rgba(0,0,0,.36) 55.85%,rgba(0,0,0,.371) 59.35%,rgba(0,0,0,.385) 62.85%,rgba(0,0,0,.402) 66.35%,rgba(0,0,0,.42) 69.85%,rgba(0,0,0,.44) 73.35%,rgba(0,0,0,.46) 76.85%,rgba(0,0,0,.48) 80.35%,rgba(0,0,0,.498) 83.85%,rgba(0,0,0,.515) 87.35%,rgba(0,0,0,.529) 90.85%,rgba(0,0,0,.54) 94.35%,rgba(0,0,0,.547) 97.85%,rgba(0,0,0,.55));
  }
  
  height: 100%;
  display: block;
`;

const Container = styled.div`
  position: relative;
  height: 300px;
`;

const BackgroundContainer = styled.div`
  height: 300px;
  max-height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Cover = ({ children }) => {

  return (
    <Container>
      <BackgroundContainer>
        <Picture>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=5399&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=5399&amp;h=594 2x"
            media="(min-width: 5200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=5199&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=5199&amp;h=594 2x"
            media="(min-width: 5000px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4999&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4999&amp;h=594 2x"
            media="(min-width: 4800px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4799&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4799&amp;h=594 2x"
            media="(min-width: 4600px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4599&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4599&amp;h=594 2x"
            media="(min-width: 4400px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4399&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4399&amp;h=594 2x"
            media="(min-width: 4200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4199&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=4199&amp;h=594 2x"
            media="(min-width: 4000px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3999&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3999&amp;h=594 2x"
            media="(min-width: 3800px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3799&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3799&amp;h=594 2x"
            media="(min-width: 3600px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3599&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3599&amp;h=594 2x"
            media="(min-width: 3400px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3399&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3399&amp;h=594 2x"
            media="(min-width: 3200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3199&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=3199&amp;h=594 2x"
            media="(min-width: 3000px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2999&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2999&amp;h=594 2x"
            media="(min-width: 2800px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2799&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2799&amp;h=594 2x"
            media="(min-width: 2600px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2599&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2599&amp;h=594 2x"
            media="(min-width: 2400px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2399&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2399&amp;h=594 2x"
            media="(min-width: 2200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2199&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=2199&amp;h=594 2x"
            media="(min-width: 2000px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 2x"
            media="(min-width: 1800px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 2x"
            media="(min-width: 1600px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 2x"
            media="(min-width: 1400px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 2x"
            media="(min-width: 1200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 2x"
            media="(min-width: 1000px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 2x"
            media="(min-width: 800px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 2x"
            media="(min-width: 600px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 2x"
            media="(min-width: 400px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 2x"
            media="(min-width: 200px)"/>
          <source
            srcset="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 1x, https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 2x"/>
          <img class="_29Gk3" alt="" role="presentation"
            src="https://images.unsplash.com/photo-1590808100071-3654286139a4?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000"/>
        </Picture>
      </BackgroundContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  )
}
