import React from "react";
const Square = ({value,onClick}) => {

 const styles = value ? `square ${value}` : `square`
    return (
      <button className={styles} onClick={onClick}><p>{value}</p></button>
    );
}

export default Square;
