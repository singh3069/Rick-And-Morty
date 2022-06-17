import React, { useState } from 'react'
import Image from "next/image";
import loadingSvg from "../public/loading.svg";
import { GET_ALL_CHARACTERS } from './queries';
import { useQuery } from '@apollo/client';


export default function Characters() {
  const [page , setPage] = useState(1);
  const {loading, error, data : character} = useQuery(GET_ALL_CHARACTERS , {
    variables: {
      page: page
    }
  })
  console.log({character})
  // const intialState = results;
  // const [search, setSearch] = useState("");
  // const [characters, setCharacters] = useState(intialState.characters);
  if(loading) {
    return(
      <div className='text-center'>
        <Image src={loadingSvg} alt="search" className='bg-none' />
      </div>
    )
  }
  if(error) return <p>Error: {error.message}</p>
  return (
    <>
    <div className='text-center space-x-4 flex justify-center'>
      <button onClick={()=>setPage(page-1)} disabled={page === 1}
    style={{
      cursor: page === 1 ? 'not-allowed' : 'pointer'
    }}
    className='border-2 border-black p-1 rounded-md'>Previous Page
    </button>

      <p className='text-center'>Showing Page <span className='text-green-500'>{page}</span> out of 42 </p>
      <button onClick={()=>setPage(page+1)} className='border-2 border-black p-1 rounded-md'>Next Page</button>

    
    </div>
    <div className='flex flex-row h-full flex-wrap justify-evenly'>
            {
              character.characters.results.map((char:any)=>{
                return <div key={char.id} className="my-2 relative border-4 border-green-500">
                  <Image src={char.image} alt={'characterImages'} width={300} height={300} />
                  <h1 className='font-semibold uppercase pl-1'> {char.name}</h1>
                  <p className='absolute top-1 right-2 border-2 border-black rounded-md'
                  style={{
                    backgroundColor: char.status === 'Alive' ? '#198754' : '#dc3545',
                    padding:'2px'
                  }}
                  >{char.status}</p>
                  </div>
              })
            }
            
    </div>
    </>
    
  )
}