import { SiOpensea } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import { BsFillChatRightHeartFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Header({ account, setAccount }) {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );
      //   console.log(response);
      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogin = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickLogout = () => {
    setAccount("");
  };
  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <header className="max-w-screen-xl mx-auto  p-4 flex justify-between">
      <Link to="/">
        <div className="flex items-center text-main">
          <SiOpensea size={28} />
          <div className="ml-1 text-xl"> Ble-Chess</div>
        </div>
      </Link>
      <div className="flex items-center">
        {coinPrice && (
          <ul className="flex text-gray-400 text-sm mr-4 font-semibold">
            {coinPrice.map((v, i) => {
              return (
                <li className="ml-2" key={i}>
                  {v.symbol}: {(v.price / 1000).toLocaleString()}k₩
                </li>
              );
            })}
          </ul>
        )}
        {!account ? (
          <button
            onClick={onClickLogin}
            className="flex items-center p-2 bg-gray-800 rounded-full"
          >
            <div className="w-6 h-6 bg-main rounded-full flex justify-center items-center">
              <BiWallet size={20} />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        ) : (
          <div>
            <button
              className="flex items-center p-2 bg-gray-800 rounded-full"
              onClick={onClickLogout}
            >
              <div className="mr-1 w-7 h-7 bg-main rounded-full flex justify-center items-center">
                <BsFillChatRightHeartFill />
              </div>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)} 님 환영합니다
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
