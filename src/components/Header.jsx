import React from 'react'

const headerStyle={
  fontSize : 20,
  fontFamily : 'TimesNewRoman',
  backgroundColor : 'yellow',
  justifyContent : 'center',
}

function Header (){
    const nama = 'Suci Amanah'
    return (
        <header style={headerStyle}><h1>{nama}</h1></header>
      )
} 
export default Header




