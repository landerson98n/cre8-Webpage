import styled from "styled-components"

export const Container = styled.button`
    background-color: var(--button_color) ;
    display: flex;
    width: 386px;
    height: 96px;
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    @media only screen and (max-width: 1024px) {
      width: 286px;
      height: 86px;
    }
    @media only screen and (max-width: 425px) {
      width: 320px;
      height: 39px;
      border-radius: 8px;
    }
    @media only screen and (max-width: 355px) {
      width: 260px;
      height: 39px;
    }
 `; 

export const Text = styled.div`
    width: 100%;
    & h1{
      font-family: 'Be Vietnam Pro';
      font-size: 23px;
      font-weight: 400;
      color: white;
      text-align: center;
      @media only screen and (max-width: 1024px) {
        font-size: 16px;
      }
      @media only screen and (max-width: 425px) {
        font-size: 15px;
      }
    }
`; 
