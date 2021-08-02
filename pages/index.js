/*
  import logo from './logo.svg';
  import './App.css';

  function App()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  export default App;

*/

//import logo from './logo.svg';

//import './Bootstrap/bootstrap-5.0.2-dist/css/bootstrap.min.css';
//import './App.css';
//import './style.css';
//import './Bootstrap/bootstrap-5.0.2-dist/css/bootstrap.min.css';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';




import { useState } from 'react';
import { useEffect } from 'react';
import { stockData } from "../public/data.js";
import axios from 'axios';

import pic from "../public/assets/a.svg";
import pic1 from "../public/assets/statistics.png";


//==============================
import { ChakraProvider } from "@chakra-ui/react"
import { Fade, ScaleFade, Slide, SlideFade, Box, Button, useDisclosure, Collapse} from "@chakra-ui/react";


//==============================


//var status = false;

//var tempEmpresa;




function App()
{
  var server = "https://nodetest15.herokuapp.com";
  var niuEmpresa = new Empresa("", "", "", "");

  var status = false;
  var [hey, setCompany] = useState(niuEmpresa);
  var [isLoggedIn, setIsLoggedIn] = useState(0);
  var [resultado, setResultado] = useState([]);  



  //const { isOpen, onOpen } = useDisclosure();

  const { 
    isOpen: isOpenInfo, 
    onToggle: onToggleInfo
  } = useDisclosure()

  useEffect(()=>
  {
    axios.get(server + "/api/get/").then((response)=>
    {
      console.log(response.data);
      setResultado(response.data);
      
      onToggleInfo();
      //onToggle();
    })
  }, []);


useEffect(() => {
  const intervalId = setInterval(() => 
  { 
    axios.get(server + "/api/get/").then((response)=>
    {
      console.log(response.data);
      setResultado(response.data);
    })

  }, 10000)
  return () => clearInterval(intervalId); //This is important
},[])



  const subimit = () =>
  {
    var d = new Date();
    var n = d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
    //console.log(n);

    var a = document.getElementById('data1').value;
    var b = document.getElementById('data2').value;
    var c = document.getElementById('data3').value;
    var d = n;

    axios.post
    (
      server + "/api/insert", 
      {
        a: a, 
        b: b, 
        c: c, 
        d: d
      }
    ).then(()=>
    {
      //alert("Inserido");
      axios.get(server + "/api/get/").then((response)=>
      {
        console.log(response.data);
        setResultado(response.data);
      })
      //setResultado();
    });
  }


  const deleti = () =>
  {
    var b = document.getElementById('data2').value;

    axios.post
    (
      server + "/api/deleti", 
      {
        b: b, 
      }
    ).then(()=>
    {
      //alert("Inserido");
      axios.get(server + "/api/get/").then((response)=>
      {
        console.log(response.data);
        setResultado(response.data);
      })
      //setResultado();
    });
  }

  const att = () =>
  {
    var d = new Date();
    var n = d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
    //console.log(n);

    var a = document.getElementById('data1').value;
    var b = document.getElementById('data2').value;
    var c = document.getElementById('data3').value;
    var d = n;

    axios.post
    (
      server + "/api/att", 
      {
        a: a, 
        b: b, 
        c: c, 
        d: d
      }
    ).then(()=>
    {
      //alert("Inserido");
      axios.get(server + "/api/get/").then((response)=>
      {
        console.log(response.data);
        setResultado(response.data);
      })
      //setResultado();
    });
  }

  function Greeting(props)
  {
    //const isLoggedIn = props.isLoggedIn;
    
    if(isLoggedIn === 1)
    { 
      return [/*
        <table className="table table-dark table-striped"  key="{item5}">
          <thead key="{item6}">
            <tr key="{item7}">
              <th scope="col" key="{item8}">Company</th>
              <th scope="col" key="{item9}">Ticker</th>
              <th scope="col" key="{item10}">Stock Price</th>
              <th scope="col" key="{item11}">Time Elapsed</th>
            </tr>
          </thead>
          <tbody>
            <tr key="{item12}">
              <td key="{item1}">{hey.company}</td>
              <td key="{item2}">{hey.ticker}</td>
              <td key="{item3}">{hey.stockPrice}</td>
              <td key="{item4}">{hey.timeElapsed}</td>
            </tr>
          </tbody>
        </table>*/
      ]
    }
    else if (isLoggedIn === 0)
    {
      //console.log(hey.company);
      
      return [

        <h6 key="{item13}">Pesquise</h6>,


        //<h4 key="{item1}">Fazer login</h4>,
        /*
        <p key="{item2}">{hey.company}</p>,
        <p key="{item3}">{hey.ticker}</p>,
        <p key="{item4}">{hey.stockPrice}</p>,
        <p key="{item5}">{hey.timeElapsed}</p>*/
      ]
      //return <h1>Fazer login</h1>;
    }
    else
    {
      return [
        <h6 key="{item14}">Não encontrado!</h6>,
      ]
    }
  }



  function setText()
  {
    const val = document.querySelector('input').value;
    setCompany(hey = searchJson(val));  //FUNÇÃO PARA ATT A INTERFACE
  }





  function searchJson(value)
  {
    for (var i = 0; i < stockData.length; i++)
    {
      if (stockData[i].ticker === value)
      {
        setIsLoggedIn(status = 1); 
        
        var temporary = new Empresa("", "", "", "");
        temporary.company = stockData[i].company;
        temporary.ticker = stockData[i].ticker;
        temporary.stockPrice = stockData[i].stockPrice;
        temporary.timeElapsed = stockData[i].timeElapsed;
        
        return temporary;
      }
    }
    setIsLoggedIn(status = 2); 
  }

  

  return(
    <>
    <Head>
      <meta charset="utf-8" />
        <title>Stock Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
        <link rel="icon" href="./assets/statistics.png" />
      </Head>

    <div className="App-header">
      <div className="App">
        <div class="parent">
          <div class="div1">
            <h1 className="h11">STOCK TEST</h1>
          </div>
          <div class="div2">
            <img className="imageHeader" src="./assets/a.svg" alt="testing" width="60px" height="60px" />
          </div>
        </div>
      

        
        <hr className="line"></hr>

        <form>
          <input id="data1" className="form-control form-control-sm" type="text" placeholder="Empresa"></input>
          <br></br>
          <input id="data2" className="form-control form-control-sm" type="text" placeholder="ID"></input>
          <br></br>
          <input id="data3" className="form-control form-control-sm" type="text" placeholder="Preço"></input>
          <br></br>
          
        </form>


        <hr className="line"></hr>
        

        <div class="parent2">
          <div class="div12"> 
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => subimit() }>Criar</button>
          </div>
          <div class="div22">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => att() }>Atualizar</button>
          </div>
          <div class="div32">
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => deleti() }>Deletar</button>      
          </div>
        </div>

        

    
        <br></br>
      
        <ChakraProvider>
          
        <Collapse in={isOpenInfo} animateOpacity>
        <table className="table "  key="{item5}">
          <thead key="{item6}">
            <tr key="{item7}">
              <th scope="col" key="{item8}">Empresa</th>
              <th scope="col" key="{item9}">ID</th>
              <th scope="col" key="{item10}">Preço</th>
              <th scope="col" key="{item11}">Última Atualização</th>
            </tr>
          </thead>

          
         
            
            {resultado.map((val)=>
              {
                return[
                  <tbody>
                    <tr key="{item12}">
                      <td key="{item1}">{val.company}</td>
                      <td key="{item2}">{val.ticker}</td>
                      <td key="{item3}">{val.stockPrice}</td>
                      <td key="{item4}">{val.timeElapsed}</td>
                    </tr>
                  </tbody>
                ]
              })}
              </table>
              </Collapse>
          </ChakraProvider>
            
          <br/>
          <br/>

{/*
            <Link href="/sobre">
                <a>SOBRE</a>
            </Link>
*/}
          <form action="/sobre">
            <input type="submit" value="Sobre" className="btn btn-outline-primary btn-sm" />
        </form>
              

        <br/>

        <Link
                href="/sobre"
                passHref>
                <Button
                className="btn btn-outline-primary btn-sm"
                component="a">
                Sobre (Rápido)
                </Button>
            </Link>

      </div>
    
    </div>

    </>
  );
}


function CapsLock(props)
{
  const a = props.content;
  const b = a.toUpperCase();

  return <h5>{b}</h5>
}




class Empresa
{
  constructor(company, ticker, stockPrice, timeElapsed)
  {
    this.company = company;
    this.ticker = ticker;
    this.stockPrice = stockPrice;
    this.timeElapsed = timeElapsed;
  }
}



export default App;

