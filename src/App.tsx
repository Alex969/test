import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
import { useFetch } from './hooks/useFetch';

const breakPoints = [
  { width: 375, itemsToShow: 2.2 },
  { width: 768, itemsToShow: 2.2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1280, itemsToShow: 3 },  
];

function App() {

  const res = useFetch('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714');
  
  console.log(res.data);
  
  return (
    <>
      <div className='App'>
      <h1 className="title">Insights</h1>
        <Carousel 
        breakPoints={breakPoints}
        isRTL={false}>
        <Card 
          header={"Public information"} 
          body={'Bankruptcies and individual voluntary arrangements can damage your score'} 
          impact={"HIGH IMPACT"}
          track={"OFF TRACK"} />
        <Card 
          header={"Credit utilisation"} 
          body={'Using more than 50% of your available credit can damage your score'} 
          impact={"MEDIUM IMPACT"}
          track={"ON TRACK"} />
        <Card 
          header={"Electoral roll"} 
          body={'Being on the electoral roll can improve your score'} 
          impact={"MEDIUM IMPACT"}
          track={"ON TRACK"} />
        </Carousel>
      </div>
    </>
  );
}

export default App;
