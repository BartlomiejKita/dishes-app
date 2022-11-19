import React from "react";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";
import { postDish } from "../../services/api";
import FormButtons from "../Buttons/Buttons";
import { Inputbox, Input, Span } from "./DishForm.styled";

const convertToNumber = (value) => value && Number(value);

let DishForm = (props) => {
	const { handleSubmit, dirty, reset, submitting, typeValue } = props;

	return (
		<>
			<form onSubmit={handleSubmit(postDish)}>
				<Inputbox>
					<Input
						name="name"
						component="input"
						type="text"
						placeholder=" "
						required
					/>
					<Span htmlFor="name">Dish name:</Span>
				</Inputbox>
				<Inputbox>
					<Input
						name="preparation_time"
						component="input"
						type="time"
						step="1"
						required
					/>
					<Span htmlFor="preparation_time">Preparation time:</Span>
				</Inputbox>
				<Inputbox>
					<Input name="type" component="select" required>
						<option />
						<option value="pizza">Pizza</option>
						<option value="soup">Soup</option>
						<option value="sandwich">Sandwich</option>
					</Input>
					<Span htmlFor="type">Dish type:</Span>
				</Inputbox>
				{typeValue === "pizza" && (
					<div>
						<Inputbox>
							<Input
								name="no_of_slices"
								component="input"
								type="number"
								placeholder=" "
								min="1"
								max="12"
								normalize={convertToNumber}
								required
							/>
							<Span htmlFor="no_of_slices">Number of slices:</Span>
						</Inputbox>
						<Inputbox>
							<Input
								name="diameter"
								component="input"
								type="number"
								placeholder=" "
								min="14"
								max="42"
								step="0.1"
								normalize={convertToNumber}
								required
							/>
							<Span htmlFor="diameter">Diameter:</Span>
						</Inputbox>
					</div>
				)}
				{typeValue === "soup" && (
					<Inputbox>
						<Input
							name="spiciness_scale"
							component="input"
							type="number"
							placeholder=" "
							min="1"
							max="10"
							normalize={convertToNumber}
							required
						/>
						<Span htmlFor="spiciness_scale">Spiciness scale:</Span>
					</Inputbox>
				)}
				{typeValue === "sandwich" && (
					<Inputbox>
						<Input
							name="slices_of_bread"
							component="input"
							type="number"
							placeholder=" "
							min="1"
							normalize={convertToNumber}
							required
						/>
						<Span htmlFor="slices_of_bread">Slices of bread:</Span>
					</Inputbox>
				)}
				<FormButtons submitting={submitting} dirty={dirty} reset={reset} />
			</form>
		</>
	);
};

const selector = formValueSelector("DishForm");

DishForm = connect((state) => {
	const typeValue = selector(state, "type");
	return {
		typeValue,
	};
})(DishForm);

export default reduxForm({
	form: `DishForm`,
	initialValues: {
		preparation_time: "00:00:00",
		type: "pizza",
	},
})(DishForm);
