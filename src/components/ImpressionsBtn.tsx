import styled from "styled-components";

const ImpressionsBtn = styled.button`
  font-size: 0.8rem;
  background: #ede7ff;
  color: #754cff;
  border-radius: 10px;
  padding: 0.5rem 1rem;

  &.current {
    background: #754cff;
    color: white;
    box-shadow: var(--active-btn-shadow);
  }
`;

export default ImpressionsBtn;
