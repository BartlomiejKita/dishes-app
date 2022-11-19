import styled from "styled-components";
import { Field } from "redux-form";

export const Inputbox = styled.div`
  position: relative;
  max-width: 100%;
  height: 50px;
  margin-bottom: 50px;
  &:last-child {
  margin-bottom: 0;
`;

export const Input = styled(Field)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	border: 2px solid #000;
	outline: none;
	background: none;
	padding: 10px;
	border-radius: 10px;
	font-size: 1.2em;
	box-sizing: border-box;

	&:focus ~ span {
		transform: translateX(-13px) translateY(-35px);
		font-size: 1em;
	}

	&:not(:placeholder-shown) ~ span {
		color: red;
		transform: translateX(-13px) translateY(-35px);
		font-size: 1em;
	}

	&:valid ~ span {
		color: #006633;
		transform: translateX(-13px) translateY(-35px);
		font-size: 1em;
	}
`;

export const Span = styled.span`
	position: absolute;
	top: 14px;
	left: 20px;
	font-size: 1em;
	transition: 0.6s;
	font-family: sans-serif;
`;
