import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { MdSwapCalls } from "react-icons/md";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);

    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  console.log(from);
  console.log(to);
  console.log(amount);
  console.log(convertedAmount);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className=" p-10  w-full h-screen flex flex-col items-center bg-slate-500 ">
        <div className=" border border-none rounded-xl shadow-2xl p-2 px-4  flex flex-col items-center w-[1000px] bg-slate-600">
          <h1 className="text-black-800 font-bold text-[30px] w-[300px]  my-3 grid place-content-center">
            Currency Convertor
          </h1>

          <div className="w-full">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
            ></InputBox>
          </div>
          <button
            onClick={swap}
            className="bg-blue-700 text-white p-1 border rounded-md text-xl cursor-pointer"
          >
            <MdSwapCalls />
          </button>
          <div className="w-full">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            ></InputBox>
          </div>

          <br></br>
          <div
            onClick={convert}
            className="bg-blue-600 text-white p-1 my-2 border rounded-md text-xl cursor-pointer"
          >
            Convert {from} to {to}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
