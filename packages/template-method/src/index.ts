import { Te } from './Te';
import { Cafe } from './Cafe';

const drinks = [
  { name: 'Te', instance: new Te() },
  { name: 'Cafe', instance: new Cafe() },
];

drinks.forEach(drink => {
  console.log(`\nPreparando ${drink.name}:`);
  drink.instance.prepare().forEach(step => console.log(`- ${step}`));
});
