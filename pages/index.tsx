import type { NextPage } from "next";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Charecters from "../components/Characters";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[url('https://ic.c4assets.com/brands/rick-and-morty/25061866-e35b-405b-9cb4-cb71748e9592.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90{&resize}')] bg-no-repeat bg-cover pb-6 px-6 scrollbar-track-transparent transparent-scrollbar scrollbar-thumb-[#303640] scrollbar-thumb-rounded-full scrollbar-thin">

      <Head>
        <title>Rick and Morty Character</title>
        <link rel="icon" href="/img/morty.jpeg" />
        <meta name="theme-color" content="#BFDE42"></meta>
      </Head>
       
       <div className="w-screen fixed backdrop-blur-md top-0 bottom-0 bg-black/10"/>

      <div className="z-10 ">
        <QueryClientProvider client={queryClient}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" className=" w-full px-8 sm:w-1/2 mx-auto my-8"/>
          <Charecters />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default Home;
