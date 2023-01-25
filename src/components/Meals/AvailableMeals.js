import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Krunch Burger',
    description: 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Krunch With Fries N Drink',
    description: 'Krunch + 1 regular Fries + 1 regular Drink',
    price: 470,
  },
  {
    id: 'm3',
    name: 'Rice N Spice',
    description: 'Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce',
    price: 320,
  },
  {
    id: 'm4',
    name: 'Zingeratha',
    description: 'Crispy chicken, sliced onions, tangy imli chutney, mint mayo, wrapped in a soft paratha',
    price: 320,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
