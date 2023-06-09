import { CONTRACT_ADDRESS } from "../web3.config";
import React from "react";
import { HiCog8Tooth } from "react-icons/hi2";

function Intro({ totalNft, mintedNft, myNft }) {
  const ranNum = Math.floor(Math.random() * 1000) + 1;
  const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;
  return (
    <div className="bg-gradient-to-b from-transparent via-main  to-red-400 ">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 text-yellow-300 text-9xl truncate opacity-30 pointer-events-none">
          DA DEN BU
        </div>
        <div className="relative ">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="intro"
          />
          <div className="  w-40 h-40 rounded-full bg-white text-black flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Da Den Bu
          <div className="bg-main w-7 h-7 rounded-full ml-2 flex justify-center items-center text-gray-950">
            <HiCog8Tooth size={20} />
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-300">
          by
          <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          다덴부란(.env란 "environment"의 약어)은 소프트웨어 개발에서 자주
          사용되는 파일 형식 중 하나입니다. 이 파일은 소프트웨어 개발자들이
          프로젝트에서 사용되는 환경 변수(environment variable)를 저장하는 데
          사용됩니다.
        </div>
        <div className="py-4 flex text-center ">
          <div className="">
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">나의 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
