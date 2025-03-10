import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)
  const onButtonClick = () => {
    const pdfUrl = "https://1drv.ms/b/s!AkdDL6xyQrxa4n0JNR29K9Zyi620?e=cCYez1";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MY CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className="grid grid-cols-6 gap-4">
     
    <div><h1>my cv</h1>
         
      <Button onClick={onButtonClick} className="bg-black text-white hover:bg-amber-300 p-7 size-fit justify-between"> Download PDF</Button>
                   
                
    </div>
    </div>
  )
}

export default App
