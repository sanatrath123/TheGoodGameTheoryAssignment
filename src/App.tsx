import { useEffect, useState } from 'react';
import useGetQuotes from './hooks/useGetQuotes';
import Card from './components/Card';
import Loader from "./components/Loading"

type QuotesType = Array<string>;

const App = () => {
  //data came from custom hook
  const data = useGetQuotes();
  const [quote, setQuote] = useState<QuotesType>([]);
 

  useEffect(() => {
    if (data.length > 0) {
      setQuote(data);
      setLoader(false)
    }
  }, [data]);


  //looader
  const [looader , setLoader ] = useState<boolean>(true)
   

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex '>
     { looader ?<Loader/> :
      quote && quote.map((item,i)=>(
        <Card
        key={i}
        quote={item}
        />
      ))
     }

    </div>
  );
};

export default App;
