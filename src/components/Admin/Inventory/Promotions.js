import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PostAddIcon from '@material-ui/icons/PostAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import UpdatePromotion from '../DataManipulation/UpdatePromotion';


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  maxWidth: 450,
	  margin: "10px",
	},
	container:{
		display: 'flex',
		flexWrap: "wrap",
      	justifyContent: 'space-around',
	},
	details: {
	  display: 'flex',
	  flexDirection: 'column',
	  fontWeight: 'bolder',

	},
	content: {
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	cover: {
	  width: 100,
	  height: 100,
	  paddingLeft: theme.spacing(10),
	  paddingBottom: theme.spacing(10),
	  aligitems:'flexEnd',

	},
	controls: {
	  display: 'flex',
	  alignItems: 'center',
	  paddingLeft: theme.spacing(30),
	  paddingBottom: theme.spacing(10),

	},

	icon: {
	  height: 40,
	  width: 40,
	  aligitems:'flexEnd',
	},
  }));


const Promotions = ({promotionsData}) =>{
	const classes = useStyles();
	const promotions = promotionsData;
	const [flag, setFlag] = useState(false);

	const handleAddPromotion = (e) => {
		e.preventDefault();
		setFlag(true)
	}
	const handlePromotionList = (e) => {
		e.preventDefault();
		setFlag(false)
	}

	const  data = promotions.map((data) =>

		<Card className={classes.root}>
		<div className={classes.details}>
			<CardContent className={classes.content}>
			<Typography component="p" variant="body1">
				Name: {data.description}
			</Typography>
			</CardContent>
			<CardContent className={classes.content}>
			<Typography component="p" variant="body1">
				Discount (%): {data.percentDiscount}
			</Typography>
			</CardContent>
			<CardContent className={classes.content}>
			<Typography component="p" variant="body1">
				Start Date: {data.startDate}
			</Typography>
			</CardContent>
			<CardContent className={classes.content}>
			<Typography component="p" variant="body1">
				End Date: {data.endDate}
			</Typography>
			</CardContent>
			<div className={classes.controls}>
			<IconButton aria-label="edit">
			<EditIcon/>
			</IconButton>
			<IconButton aria-label="delete">
			<DeleteIcon />
			</IconButton>
		</div>
		</div>

		<CardMedia
			className={classes.cover}
			image={`https://genericapiv1.azurewebsites.net/v1/shop/promotions/${data.promotionID}/image`}
			alt="img"
		/>
		</Card>
    )


	return(
		<div style={{ textAlign: "center " }}>
		{flag === false
		?
			(
				<div className={classes.container}>
					<IconButton onClick = {handleAddPromotion} aria-label="addButton">
					<PostAddIcon className={classes.icon}/>
					<p>Add promotion</p>
					</IconButton>
					{data}
				</div>
			)
			: null}
		{flag === true
			?
				(
					<>
					<Button onClick={handlePromotionList} className={classes.btn} style={{marginTop: "20px"}}> <ArrowBackIosIcon style={{fontSize: 15 }}/> Back </Button>
					<UpdatePromotion setFlag={setFlag}/>
					</>
				)
			: null}
			</div>

	)
}

export default Promotions;
