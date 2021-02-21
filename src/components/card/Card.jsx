import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);
  overflow: hidden;

  transition: opacity 0.4s ease 0s,transform 0.4s ease 0s,box-shadow 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);


  ${(props) => Boolean(props.onClick) && `
    cursor: pointer;

    
  `}  

  &:hover { 
    box-shadow: 0 9px 12px -6px rgba(0,0,0,0.15), 0 18px 32px 3px rgba(50,50,93,0.1), 0 8px 49px 7px rgba(0,0,0,0.08);
  }
`;

export const CardMedia = styled.div`
  background-image: ${(props) => props.url ? `url("${props.url}")` : 'none'};
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top: 56%;
  position: relative;
`;

export const CardBody = styled.div`
  padding: 20px 20px;
  position: relative;
`;

export const CardActions = styled.div`
  padding: 10px 10px;
`;
