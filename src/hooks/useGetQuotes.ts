
import { useEffect, useState } from 'react'

type QuotesType= string[]

const useGetQuotes = ():QuotesType => {
 //create a state variable for return QuotesType data
 const [data , setData] = useState<QuotesType>([])

 //fetch function 
 const FetchData =async ()=>{
    try {
      const data = await  fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      const Json = await data.json()
      setData(Json)
    } catch (error) {
      console.log("ERROR WHILE FETCH QUOTES")
    }
    }

    //this useEfffect call only one time becayse of [] dependency
    useEffect(()=>{
        FetchData()
        //function is after the page is rander
          },[])
        
       return data
}

export default useGetQuotes