import styled from "@emotion/styled";

const StyledForm = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  margin-top: 20px;
  max-width: 375px;
  width: 90%;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }
`;

export default StyledForm;
