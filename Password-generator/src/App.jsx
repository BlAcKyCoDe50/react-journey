import { useState, useCallback, useEffect , useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charallowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [iscopied, setisCopied] = useState(false);

  
  
  //ref hook for keeping the reference of the password
  const passwordRef = useRef(null)
  //copy password function
  const copypassword = useCallback(()=>{
   //for providing the selection effect
   
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setisCopied(true)

    setTimeout(() => {
      setisCopied(false)
    }, 2000);
  },[password])

  const passwordchanger = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallowed) 
    {
      str += "0123456789";
    }
    if (charallowed) str += "@#$%^&*()_+";

    for (let i=0;i<length;i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
      // let char2 = Math.floor(Math.random()*)
    }
    setPassword(pass);
  }, [length, numberallowed, charallowed, setPassword]);

  useEffect(()=>passwordchanger() , [numberallowed , charallowed , length , passwordchanger])
  return (
    <>
      <div className='w-full max-w-md mx-auto shado w-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl text-center text-white mb-4'>Password Generator</h1>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-2 px-3 mb-5 rounded-xl bg-gray-200 text-gray-800'
          placeholder='Your password'
          readOnly
          ref={passwordRef} //password reference
          
        />
        <button 
  onClick={copypassword} // Attach the onClick event handler without calling the function immediately
  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
>
  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
  <span className="relative">Copy</span>

 
</button>
{iscopied && (
        <span className="mt-2 ml-2 text-sm font-medium text-green-500">
           Text copied!
        </span>
      )} 

        <div className='flex text-sm gap-x-2 px-4'>
        <div className='flex items-center gap-x-1 w-full'>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer w-full'
            onChange={(e) => { setLength(e.target.value); }}
          />
          
          <label className='ml-2 text-white'>Length: {length}</label>
        </div>
      </div>
      <input type="checkbox" 
      defaultChecked = {numberallowed}
      id="numberInput"
      className='ml-2'
      onChange={()=>setNumberAllowed((prev)=>!prev)}
      />
      <label htmlFor="numberInput" className='ml-1'>Numbers</label>    
      <input type="checkbox" 
      className='ml-2'
      defaultChecked = {charallowed}
      id='charInput'
      onClick={()=>setcharAllowed((prev)=>!prev)}
      />
      <label htmlFor="charInput" className='ml-1'>Characters</label>
      {/* <button className='outline-none bg-blue-700 text-white px-4 py-2 rounded-xl mb-4' onClick={passwordchanger}>Generate Password</button> */}
      </div>

    </>
  );
}

export default App;
