import styled from "styled-components";

const ImpressionsBtn = styled.button`
	font-size: 0.8rem;
	background: #EDE7FF;
	color: #754CFF;
	border-radius: 10px;
	padding: 0.5rem 1rem;

	&.current {
		background: #754CFF;
		color: white;
		box-shadow: var(--active-btn-shadow);
	}
`;

export default ImpressionsBtn;