import React from 'react'

function Character({character}) {
  return (
    <div className={`bg-[#42B4CA]/60 border-4 border-[#BFDE42] text-white flex items-center m-4 rounded-lg shadow-lg w-full aspect-[4/1] relative -left-4 sm:w-[375px]`}>
        <img className="h-32 w-32 rounded-md" src={character.image} alt="" />
        <div className="ml-5">
            <h3 className="text-base">{character.name}</h3>
            <p className="text-sm">{character.status} - {character.species}</p>
            <p className="text-xs text-[#BFDE42] mt-3">Last seen on</p>
            <p className="text-xs italic">{character.location.name}</p>
        </div>
    </div>
  )
}

export default Character