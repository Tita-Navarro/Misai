
import React, { useState } from 'react';
import axios from 'axios';
import useToken from '../../../controller/useToken'
//material
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "20px",
		boxShadow: "0 0 20px #9A9594",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
			"& label.Mui-focused": {
				color: "#C8A79C",
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					borderColor: "#C8A79C",
				},
				"&:hover fieldset": {
					borderColor: "#C8A79C",
				},
				"&.Mui-focused fieldset": {
					borderColor: "#C8A79C",
				},
			},
		},
	},
	btnback: {
		margin: "5px",
		color: "black",
		border: "1px solid #c1bebd",
	},
	divbtn: {
		display: "flex",
		justifyContent: "flex-end",
	},
	title: {
		display: "flex",
		justifyContent: "center",
		color: "938A95",
	},
}));


const UpdateCategory = () => {
    const classes = useStyles();
	const { token } = useToken()
	const [description, setDescription] = useState('')

	const submitValue = () => {
		axios.post('https://genericapiv1.azurewebsites.net/v1/shop/categories',
	         {
				description
			 },
			{
				headers: { Authorization: `Bearer ${token}`}
			})
			.then(function (response) {
				console.log(response);
			})

	}

	return (
        <div>

			<form className={classes.root}>
				<Typography className={classes.title} variant="h4" gutterBottom>
					{" "}
					Add Category{" "}
				</Typography>
				<TextField
					id="description"
					label="Description"
					variant="outlined"
				/>
				<TextField id="picture" label="Picture" variant="outlined" />
				<AddAPhotoIcon style={{ width: 100 }} />
				<div className={classes.divbtn}>
					<Button style={{ width: 10 }} className={classes.btn}>
						<CheckCircleIcon style={{ fontSize: 30 }} onClick={submitValue} />
					</Button>
					<Button style={{ width: 10 }} className={classes.btn}>
						<CancelIcon style={{ fontSize: 30 }} />
					</Button>
				</div>
			</form>
		</div>
	)
}
export default UpdateCategory;
