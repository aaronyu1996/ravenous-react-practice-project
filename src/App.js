import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import BusinessList from './Components/BusinessList/BusinessList';
import Business from './Components/Business/Business';

const businesses = [
  {
    id: '1',
    imageSrc: 'https://some-image-url.com',
    name: 'Taco Place',
    address: '123 Taco Blvd.',
    city: 'TacoTown',
    state: 'TX',
    zipCode: '12345',
    category: 'Mexican',
    rating: 4.5,
    reviewCount: 90
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <SearchBar />  {/* Add SearchBar */}
      <BusinessList businesses={businesses}/>  {/* Add BusinessList */}
      {/* If you want to show a single Business component for testing */}
      {/* <Business /> */}
    </div>
  );
}
export default App;
