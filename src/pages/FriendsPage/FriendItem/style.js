import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
   margin-top: 30px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #fff;
   box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.7);
   padding: 20px 30px;
   border-radius: 5px;
   cursor: pointer;
`;

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const AvatarBG = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: #cecece;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.h5`
   font-family: 'Roboto', sans-serif;
   font-weight: 500;
   font-size: 20px;
   line-height: 120%;
   letter-spacing: 0.05em;
   color: #000;
`;

export const Description = styled.span`
   display: inline-block;
   font-family: 'Roboto', sans-serif;
   font-weight: normal;
   font-size: 14px;
   letter-spacing: 0.05em;
   color: #fff;
`;

export const ChatButton = styled.a`
   display: inline-block;
   max-width: 25px;
   max-height: 25px;
`;