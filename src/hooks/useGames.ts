import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug:string;

}
export interface Game
{
  id:number;
  name:string;
  background_image:string;	
  parent_platforms:{platform:Platform}[];
  metacritic:number;
}
interface GameFetchResponse
{
  count:number;
  result:Game[]
}
const useGames= () =>{
const [games,setGames]=useState<Game[]>([]);
const [error,setError]=useState('');
const [isLoading,setLoading]=useState(false);
   useEffect(()=>{
    const controller =new AbortController();
    setLoading(true);
    apiClient.get<GameFetchResponse>("/games",{signal:controller.signal})
    .then((res)=>{
      setGames(res.data.result);
      setLoading(false);
    })
    .catch((err)=>{
      if(err instanceof CanceledError) return;
      setError(err.message)
      setLoading(false);
    });
    return()=>controller.abort();
   },[]);
   return {games,error,isLoading};
  }

  export default useGames;