import {useId} from 'react'
function InputBox(
    {
     label='Hello',
     amount=0,
     selectCurrency='usd',
     selectOptions=[],
     amountDisable=false,
     currencyDisable=false, 
     onAmountChange,
     onCurrencyChange }) {

    const AmountId=useId()
    return(
      <div className='bg-white w-140 h-35 rounded-xl'>
        <div className='flex p-4 justify-between'>
            <div>
              <label htmlFor={AmountId} className='block text-2xl text-gray-400' >
                {label}
              </label>
              <input
              id={AmountId}
              className='text-2xl mt-8 outline-none ' 
              type="number" value={amount} 
              placeholder='Amount'
              onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
              disabled={amountDisable}
              />
       
            </div>
            <div>
                <p className='block text-2xl text-gray-400 pl-8 '>Currency Type</p>
                <select 
                className='text-2xl mt-8 bg-gray-200 rounded-lg p-1 ml-20 outline-none pl-2  cursor-pointer'
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
                >
                    
                    {selectOptions.map(opt => (
                        <option key={opt} value={opt}>
                        {opt}
                        </option>
                    ))}
                </select>
            </div>
        </div>
      
      </div>
    )
}
export default InputBox;