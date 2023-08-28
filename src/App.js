import tshirt from './assets/images/tshirt.png';
import wallet from  './assets/images/wallet.jpg'
import cup from  './assets/images/cup.jpg'
import Header from './components/Header/Header';
import Concept from './components/Concept/Concept';

const concepts = [
  {
    title: 'T-shirt',
    image: tshirt,
    description:
      'A white t-shirt',
    amount: '$35',
    add: 'add to cart'
  },
  {
    title: 'Wallet',
    image: wallet,
    description:
      'A Fancy wallet',
      amount: '$20',
    add: 'add to cart'
  },
  {
    title: 'Cup',
    image: cup,
    description:
      'A tea cup',
      amount: '$5',
    add: 'add to cart'
  },
];

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        <Concept
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
          amount={concepts[0].amount}
          add={concepts[0].add}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
          amount={concepts[1].amount}
          add={concepts[1].add}
        />
        <Concept
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
          amount={concepts[2].amount}
          add={concepts[2].add}
        />
      </ul>
    </div>
  );
}

export default App;
