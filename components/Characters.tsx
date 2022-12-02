import React, { useState } from "react";
import { useQuery } from "react-query";
import Character from "./Character";

function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    // console.log(response.json)
    return response.json();
  };

  const { data, isPreviousData, isLoading, isError } = useQuery(["characters", page], fetchCharacters);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif" className="h-20 w-20" alt="" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-xl text-white">Error Occured 😢</div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
        {data.results.map((character: any) => (
          <Character character={character} />
        ))}
      </div>
      <div className="space-x-4 flex justify-between">
        <button
          disabled={page === 1}
          onClick={() => setPage((old) => old - 1)}
          className="bg-[#42B4CA] p-2 px-5 disabled:opacity-20 disabled:cursor-not-allowed rounded-md text-[#BFDE42] font-bold hover:scale-90 transition duration-200 disabled:hover:scale-100"
        >
          Previous
        </button>

        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((old) => old + 1)}
          className="bg-[#42B4CA] p-2 px-5 min-w-[100px] rounded-md text-[#BFDE42] font-bold hover:scale-90 transition duration-200 disabled:hover:scale-100"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;
