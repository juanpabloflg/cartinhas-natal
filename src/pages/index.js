import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Button, StyledInput, HelperText, FormControl, Label } from "@mui/material";
import Link from "next/link";
import Sobre from "./Sobre";


export default function Home() {

  const styles = {
    intro: {
      backgroundImage: 'url(/public/img/BackgroundVermelho.png)',
      height: '100vh', 
      paddingTop: '2%',
    },

    navigator: {
      background: "rgba(255,255,255,0.2)", 
      display:"flex",
      alignItems: "center",
      borderRadius: "30px",
      padding: "10px 0px",
      justifyContent: "center",
      fontSize: "15px",
      border: "2px solid white",
      maxWidth:"85%",
      margin: "0% 15%",
    },

    buttonNav: {
      color:'white', 
      fontFamily:'Poppins', 
      fontSize:'12px',
    },

    conecte: {
      backgroundColor: 'green', 
      color:'white', 
      fontFamily:'Poppins',
      fontSize:'12px',
    },

    noel: {
      fontFamily:'Poppins', 
      fontSize:'20px',
    },

    buttonsTitle: {
      backgroundColor: '#CFBD2E', 
      color:'white', 
      fontFamily:'Poppins', 
      fontSize:'1p5x',
      marginLeft: "10%", 
      height:"60%",
      width: "60%",
    },

    gruopBottonsTitle: {
      display:'flex',
      gap:'5%',
      height:"15vh",  
    },

    title: {
      fontSize:'80px', 
      fontFamily:'Poppins',
      marginLeft: "10%", 
    },

    groupTitle: {
      maxWidth:'85%',
      display: "flex",
      flexDirection: "column",
      gap: "4vh",
    },

    noelGroup: {
      display: 'Flex', 
      justifyContent:'center', 
      gap:'12%',
      maxWidth:"85%",
      margin: "0% 15%",
      alignItems: "center",
      marginTop: "9vh",
    },
  };


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* O HTML vai dentro desta <div></div> */}
      <div style={styles.intro}> 

        <nav style={styles.navigator}>
          <h3 style={styles.noel}>Papai Noel</h3>
          <Link href="/Sobre" passHref><Button style={styles.buttonNav} variant="text">Sobre</Button></Link>
          <Link href="/Pedido" passHref><Button style={styles.buttonNav} variant="text">Faça um pedido</Button></Link>
          <Link href="/Apadrinhamento" passHref><Button style={styles.buttonNav} variant="text">Apadrinhar</Button></Link>
          <Link href="/Login" passHref><Button style={styles.buttonNav} variant="text">Cadastra-se</Button></Link>
          <Link href="/Login" passHref><Button style={styles.conecte} variant="text">Login</Button></Link>
        </nav>

        <span style={styles.noelGroup}>
          <div style={styles.groupTitle}>
            <p style={styles.title}>Neste natal, faça a alegria de uma criança!</p>
            <div style={styles.gruopBottonsTitle}>
              <Button style={styles.buttonsTitle} variant="text">Apadrinhar</Button>
              <Button style={styles.buttonsTitle} variant="text">Faça um pedido</Button>
            </div>
          </div>
          <img src="./img/papai.png" alt="Descrição da imagem" className="minha-imagem"/>
        </span>

      </div>

      <Sobre/>
    </>
  );
}
