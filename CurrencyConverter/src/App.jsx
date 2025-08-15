import { useState } from "react";
import InputBox from "./Components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const currencyInfo = useCurrencyInfo(from) || {};
  const Options = Object.keys(currencyInfo);


  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33230886/pexels-photo-33230886/free-photo-of-modern-architecture-at-new-york-oculus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="w-auto h-auto p-8 bg-white/30 border-white/50 border-2 rounded-xl backdrop-blur-sm">
      <form onSubmit={(e)=>{
        e.preventDefault()
         convert()
         }}>
          <div className="mb-2">
            <InputBox
            label="From"
            selectOptions={Options}
            amount={amount}
            selectCurrency={from}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(v) => {
              const num = Number(v);
              if (num < 0) {
                setAmount(0);
              } else {
                setAmount(v);
              }
            }}
            />
          </div>
          <div className='flex justify-center w-full'>
            <button 
            type='button'
            className='bg-blue-700 rounded-xl px-4 py-1.5 text-white text-2xl border-3 border-white flex justify-center items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2 '
            onClick={swap}>
              Swap
            </button>
          </div>
          <div className="mt-2">
            <InputBox
            label="To"
            selectOptions={Options}
            amount={convertedAmount}
            selectCurrency={to}
            onCurrencyChange={(currency)=>setTo(currency)}
            amountDisable
            />
          </div>  
          <div className="mt-6">
            <button type='submit' className="bg-blue-700 text-white text-3xl w-full py-4 rounded-xl"> 
              Convert {from.toUpperCase()} to {to.toUpperCase()} 
            </button>
          </div>
         </form>     
      </div>
    </div>
  );
}

export default App;
