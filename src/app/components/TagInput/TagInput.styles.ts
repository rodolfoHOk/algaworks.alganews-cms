import styled from "styled-components";

export const Wrapper = styled.div`
  .ReactTags__selected {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .ReactTags__tag {
    background-color: #09F;
    color: #FFF;
    padding: 4px 8px;
    display: flex;
    align-items: center;
  }

  .ReactTags__remove {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 24px;
    height: 1em;
    border: 0;
    font-size: 1em;
    color: #FFF;
    background-color: transparent;
    cursor: pointer;
  }

  .ReactTags__tagInput {
    flex-grow: 1;
  }

  .ReactTags__tagInputField {
    width: 100%;
    padding: 4px 0;
    background-color: transparent;
    color: #274060;
    font-size: 1em;
    font-family: 'Lato', sans-serif;
    outline: none;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #CCC;
  }
`;
