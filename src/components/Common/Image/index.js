/** @format */

const Image = (props) => {
	return (
		<div className={props.ImgContainer}>
			<img className={props.classImg} src={props.image} alt={props.title} title={props.title} />
		</div>
	)
}

export default Image
