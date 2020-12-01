import React from "react";
import "../styles.css";

const Titulo = (props) => {
  return(
    <header id="titulo"> { props.title } </header>
  );
}

export default Titulo;