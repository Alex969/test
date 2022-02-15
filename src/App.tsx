import './App.css';
import Carousel from 'react-elastic-carousel';
import Card from './components/Card';
import { useFetch } from './hooks/useFetch';

const breakPoints = [
  { width: 375, itemsToShow: 2.1 },
  { width: 768, itemsToShow: 2.2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1280, itemsToShow: 3 },  
];

function App() {

  const { loading, customerData } = useFetch('https://api.jsonbin.io/b/6107fbe9f14b8b153e05e714');

  const handlePublicInformationTrack = (): string | undefined => {
    // @ts-ignore: Object is possibly 'null'.
    if(customerData
    .personal
    .publicInfo
    .courtAndInsolvencies
    .length !== 0) {
      return "OFF TRACK"
    } else {
      return "ON TRACK"
    } 
  }
  
  const handleCreditUtilisationTrack = () => {
    // @ts-ignore: Object is possibly 'null'.
    for (let i = 0; i < customerData.accounts.length; i ++) {
          // @ts-ignore: Object is possibly 'null'.
      if (customerData.accounts[i].accountCategory === "credit_cards") {
            // @ts-ignore: Object is possibly 'null'.
        if (customerData.accounts[i].overview.balance.amount >= (customerData.accounts[i].overview.limit.amount)/ 2) {
          return "OFF TRACK"
        } else {
          return "ON TRACK"
        } 
      }
    }
  }

  const handleElectoralRollTrack = () => {
    // @ts-ignore: Object is possibly 'null'.
    for (let j = 0; j < customerData.personal.electoralRoll.length; j++) {
      // @ts-ignore: Object is possibly 'null'.
      if (customerData
        .personal
        .electoralRoll[j]
        .current === true) {
          return "ON TRACK"
        } else {
          return "OFF TRACK"
        }
    }
  }

  return (
    <>
      <div className='App'>
        <h1 className="title">Insights</h1>
        <Carousel 
        breakPoints={breakPoints}
        isRTL={false}>
        {loading ? <div>Getting your insight ready ...</div> : 
        <Card 
          header={"Public information"} 
          body={'Bankruptcies and individual voluntary arrangements can damage your score'} 
          impact={"HIGH IMPACT"}
          track={
            handlePublicInformationTrack()}
          />}

        {loading ? <div>Getting your insight ready ...</div> :
        <Card 
          header={"Credit utilisation"} 
          body={'Using more than 50% of your available credit can damage your score'} 
          impact={"MEDIUM IMPACT"}
          track={handleCreditUtilisationTrack()} 
          />}

        {loading ? <div>Getting your insight ready ...</div> : 
        <Card 
          header={"Electoral roll"} 
          body={'Being on the electoral roll can improve your score'} 
          impact={"MEDIUM IMPACT"}
          track={handleElectoralRollTrack()} 
          />}

        </Carousel>
      </div>
    </>
  );
}

export default App;
