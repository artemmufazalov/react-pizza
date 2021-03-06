// Libs
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Assets
import { ReactComponent as AddPizzaPlus } from '../../assets/pizzaBlock/addPizzaPlus.svg';

// Redux
import { useAppDispatch } from '../../redux/store';
import { PizzaInterface } from '../../redux/slices/generalTypes';
import {
	selectDoughTypes,
	selectPizzaQuantityById,
} from '../../redux/slices/cart/selectors';
import { addPizza } from '../../redux/slices/cart/cartSlice';

interface PizzaBlockProps extends PizzaInterface {}

const PizzaBlock: React.FC<PizzaBlockProps> = ({
	id,
	title,
	price,
	imageUrl,
	sizes,
	types,
	category,
	rating,
}) => {
	const dispatch = useAppDispatch();

	const typesNames: string[] = useSelector(selectDoughTypes);
	const quantity: number = useSelector(selectPizzaQuantityById(id));

	const [activePizzaSize, setActivePizzaSize] = React.useState<number>(0);
	const [activePizzaType, setActivePizzaType] = React.useState<number>(0);

	const onClickAddPizza = () => {
		let doughIndex = activePizzaType,
			sizeIndex = activePizzaSize,
			pizza = {
				sizes,
				types,
				id,
				title,
				price,
				imageUrl,
				category,
				rating,
			};

		dispatch(addPizza({ pizza, doughIndex, sizeIndex }));
	};

	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<Link to={`pizza/${id}`}>
					<img
						className="pizza-block__image"
						src={imageUrl}
						alt="Pizza"
					/>
					<h4 className="pizza-block__title">{title}</h4>
				</Link>
				<div className="pizza-block__selector">
					<ul>
						{types.map((type, index) => (
							<li
								key={index}
								className={
									index === activePizzaType ? 'active' : ''
								}
								onClick={() => setActivePizzaType(index)}>
								{typesNames[type]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, index) => (
							<li
								key={index}
								className={
									index === activePizzaSize ? 'active' : ''
								}
								onClick={() => setActivePizzaSize(index)}>
								{size} ????.
							</li>
						))}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price">???? {price} ???</div>
					<button
						onClick={onClickAddPizza}
						className="button button--outline button--add">
						<AddPizzaPlus />
						<span>????????????????</span>
						{quantity > 0 && <i>{quantity}</i>}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PizzaBlock;
