import { useState } from "react";
function Calculator() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="  rounded-2xl glass p-5 shadow-lg">
        <div className="w-full mr-2">
          <input
            type="text"
            value = {text}
            disabled
            className="w-full py-4  text-2xl bg-primary-content text-primary  shadow-sm  px-4 py-2 rounded-2xl shadow-primary "
          />
        </div>
        <div className="mt-4 grid  grid-cols-4 gap-2">
          <input type="button" value={'.'} className="btn  border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e => setText(text + e.target.value)}/>
          <input type="button" value={'/'} className="btn  border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e => setText(text + e.target.value)} />
          <input type="button" value={'CE'} className="btn glass btn-ghost  border-none text-base-100  bg-primary w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e => setText(text.slice(0, -1))}/>
          <input type="button" value={'C'} className="btn glass btn-ghost border-none text-base-100 bg-primary w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e => setText('')} />


          <input type="button" value={'7'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'8'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'9'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'×'} className="btn glass btn-ghost border-none text-base-100 bg-primary w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + '*')}/>

          <input type="button" value={'4'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'5'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'6'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'+'} className="btn glass btn-ghost border-none text-base-100 bg-primary w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>

          <input type="button" value={'1'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'2'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'3'} className="btn border-none text-primary bg-base-300 w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'-'} className="btn glass btn-ghost border-none text-base-100 bg-primary w-16 h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>

        </div>
        
        <div className="grid gap-2 grid-cols-3 mt-2">
          <input type="button" value={'0'} className="btn border-none text-primary bg-base-300 w-full h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + e.target.value)}/>
          <input type="button" value={'='} className="btn glass btn-ghost border-none text-base-100 bg-primary w-full h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e => setText(eval(text))}/>
          <input type="button" value={'+'} className="btn glass  btn-ghost border-none text-base-100 bg-primary w-full h-16 rounded-2xl text-3xl shadow-sm shadow-primary" onClick={e =>setText(text + '+')}/>
        </div>
        
      </div>
    </div>
  )
}

export default Calculator;
