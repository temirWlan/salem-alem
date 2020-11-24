import styled from 'styled-components';

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Row = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const SearchForm = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 40px;
   z-index: 100;
`;

export const SearchInput = styled.input`
   display: inline-block;
   width: 90%;
   max-height: 100%;
   padding: 5px 10px;
   position: absolute;
   z-index: 99;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 20px;
   color: rgba(0, 0, 0, 0.6);
`;

export const IconBlock = styled.div`
   width: 30px;
   height: 30px;
`;

export const ClearButton = styled.a`
   display: none;
   width: 1px;
   height: 5px;
   position: relative;
   z-index: 100;

   &:before, &:after {
      content: '';
      display: inline-block;
      width: 2px;
      height: 15px;
      position: absolute;
      background-color: #000;
   }

   &:before {
      transform: rotate(45deg);
   }

   &:after {
      transform: rotate(-45deg);
   }
`;

const styles = {
   button: { 
      position: 'absolute', 
      top: '12px',
      left: '91%' 
   },
   form: {
      width: '90%'
   },
   friendsList: { 
      marginTop: '30px' 
   }
};

export default styles