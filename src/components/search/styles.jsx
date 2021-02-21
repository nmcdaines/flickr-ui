import styled from 'styled-components';

export const SearchBox = styled.div`
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.35);
  background: #fff;
  font-size: 22px;
  padding: 10px 12px;
  text-align: left;

  display: flex;
  flex-direction: row;
  /* align-items: center; */

  position: relative;

  bottom: 50px;

  /* top: 0; */
  z-index: 100;
  transform: translateX(0);

  width: 100%;
  overflow: hidden;

  justify-content: center;
  align-items: center;


  /* margin: 0px 20px; */

  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 752px;
  }

  @media (min-width: 860px) {
    max-width: 820px;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 3px #2196F3;
  }
`;

export const SearchBoxInner = styled.div`
  flex-grow: 1;
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  font-size: 22px;

  &, &:hover, &:focus, &:active {
    outline: none;
    border: none;
  }
`;

export const TagElement = styled.span`
  border-radius: 4px;
  border: 1px solid #2196F3;
  background-color: rgba(33,150,243,0.15);
  color: #2196F3;

  font-size: 16px;
  line-height: 22px;

  margin-right: 10px;
  padding: 4px 10px;

  line-height: 34px;
`;

export const TagElementButton = styled.button`
  margin-left: 8px;
  border-radius: 4px;
  color: #2196F3;
  background: none;
  border: 1px solid #2196F3;
  border: none;
  /* background: rgba(0,0,0,0.1); */
  /* background: #2196F3; */

  &:hover {
    background: #2196F3;
    color: #fff;
  }
`;