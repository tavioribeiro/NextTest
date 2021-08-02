
import Head from 'next/head';

//==============================
import { ChakraProvider } from "@chakra-ui/react"
import { Fade, ScaleFade, Slide, SlideFade, Box, Button, useDisclosure, Collapse} from "@chakra-ui/react";

import Link from 'next/link';


function Sobre()
{
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
            
            <h1>Sobre</h1>

            <div className="box">
                <p>Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável.</p>
            
            </div>
            
          
           
            <br/>
            <br/>
        {/*
            <Link href="/">
                <a>HOME</a>
            </Link>
            */}
            <form action="/">
                <input type="submit" value="Home" className="btn btn-outline-primary btn-sm" />
            </form>




            <br/>

            <Link
                href="/"
                passHref>
                <Button
                className="btn btn-outline-primary btn-sm"
                component="a">
                Home (Rápido)
                </Button>
            </Link>
          </div>
        
        </div>
    
        </>
      );
}


export default Sobre;
