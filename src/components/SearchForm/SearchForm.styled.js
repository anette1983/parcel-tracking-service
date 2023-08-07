import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
  margin-top: 20px;
  max-width: 375px;
  width: 80%;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }

`;

export default StyledForm;
