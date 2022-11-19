import React from "react";
import Button from "@mui/material/Button";

const FormButtons = ({ submitting, dirty, reset }) => (
	<span>
		<Button onClick={reset} type="button" disabled={!dirty || submitting}>
			Reset
		</Button>
		<Button
			raised="true"
			color="primary"
			type="submit"
			disabled={!dirty || submitting}>
			Submit your dish
		</Button>
	</span>
);

export default FormButtons;
