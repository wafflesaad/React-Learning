import Lg from "./components/ListGroup.tsx"

function App() {
  let arr: any = ["fsd", "isb", 31231]

  const handleSelect = (item: string)=>{
    console.log(item);
    
  }

  return <div><Lg arr={arr} heading="Unga Bunga" onSelect={handleSelect} /></div>;
}

export default App
