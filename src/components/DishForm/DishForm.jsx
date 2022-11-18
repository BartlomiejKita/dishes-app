import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { postDish } from "../../services/api";
import FormButtons from "../Buttons/Buttons";

const convertToNumber = (value) => value && Number(value);

let DishForm = (props) => {
	const { handleSubmit, dirty, reset, submitting, typeValue } = props;

	return (
		<>
			<form onSubmit={handleSubmit(postDish)}>
				<div>
					<label htmlFor="name">Dish name:</label>
					<Field
						name="name"
						component="input"
						type="text"
						placeholder="Write your dish name"
						required
					/>
				</div>
				<div>
					<label htmlFor="preparation_time">Preparation time:</label>
					<Field
						name="preparation_time"
						component="input"
						type="time"
						step="1"
						required
					/>
				</div>
				<div>
					<label htmlFor="type">Dish type:</label>
					<Field name="type" component="select" required>
						<option />
						<option value="pizza">Pizza</option>
						<option value="soup">Soup</option>
						<option value="sandwich">Sandwich</option>
					</Field>
				</div>
				{typeValue === "pizza" && (
					<div>
						<div>
							<label htmlFor="no_of_slices">Number of slices:</label>
							<Field
								name="no_of_slices"
								component="input"
								type="number"
								placeholder="Choose number of slices"
								min="0"
								max="12"
								normalize={convertToNumber}
								required
							/>
						</div>
						<div>
							<label htmlFor="diameter">Diameter:</label>
							<Field
								name="diameter"
								component="input"
								type="number"
								placeholder="Choose size"
								min="14"
								max="42"
								step="0.1"
								normalize={convertToNumber}
								required
							/>
						</div>
					</div>
				)}
				{typeValue === "soup" && (
					<div>
						<label htmlFor="spiciness_scale">Spiciness scale:</label>
						<Field
							name="spiciness_scale"
							component="input"
							type="number"
							placeholder="Choose level of spiciness"
							min="0"
							max="10"
							normalize={convertToNumber}
							required
						/>
					</div>
				)}
				{typeValue === "sandwich" && (
					<div>
						<label htmlFor="slices_of_bread">Slices of bread:</label>
						<Field
							name="slices_of_bread"
							component="input"
							type="number"
							placeholder="Choose how many slices of bread"
							min="0"
							normalize={convertToNumber}
							required
						/>
					</div>
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
		name: "",
		type: "",
		preparation_time: "00:15:00",
		no_of_slices: 4,
		diameter: 14,
		spiciness_scale: 5,
		slices_of_bread: 2,
	},
})(DishForm);
