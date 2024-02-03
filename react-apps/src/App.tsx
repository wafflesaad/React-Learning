import axios from 'axios';
import { table } from 'console';
import React, {useState, useEffect} from "react";

interface Props{
  color: string,
  size: string
}

const App = (props:Props)=> {
    //define the state and the setter
    const [APIlist, setAPIlist] = useState<JSX.Element[] | undefined>(undefined);

    const cellStyle: React.CSSProperties = {
      border: "1px solid black",
      padding: "10px"
    };
    //On load invoke method to genrate list
    useEffect(() => {  let url = "https://api.publicapis.org/entries?category=Animals";
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then(resp => {
        let listOfEntries = resp.data.entries;
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let i=1;
        let entryDetails = listOfEntriesAsArray.map((entryDetail: [string, any])=>{
          return(
          // <li key={i++}>
          //   <a href={entryDetail[1]["Link"]} target="_blank" rel="noreferrer">{entryDetail[1]["API"]}</a>
          //   </li>
          <tr >
            <td style={cellStyle}>{entryDetail[1]["API"]}</td>
            <td style={cellStyle}>{entryDetail[1]["Link"]}</td>
          </tr>
          )
        })
        setAPIlist(entryDetails);
      })
    .catch(err => {
        console.log(err.toString())
    });
    }, []);


    const tableStyle: React.CSSProperties = { color:props.color, fontSize:props.size, border: "1px solid black", borderCollapse: "collapse"}
 

  return (
      <>
        <h2>APIs List</h2>

        <table style={tableStyle}>
          {APIlist}
        </table>

        <br/>

           
    </>
);
}

export default App;
