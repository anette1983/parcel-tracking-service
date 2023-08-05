import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  gap: 8px;
  margin-bottom: 8px;
  margin-top: 20px;
  max-width: 325px;
  width: 80%;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }

  & input {
    /* padding: 6px;
    margin-top: 10px;
    font-family: inherit;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px; */
  }
`;

export default StyledForm;
