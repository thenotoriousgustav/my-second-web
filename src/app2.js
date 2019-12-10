import React, { Component } from 'react';
import Background from './bg1.png';
import {Button} from './components';
class App extends Component {
    render(){  
      return(
          <div style={styles.background}>
          <div style={styles.overlay}>
                <div style={styles.container}>
                    <div style={gogreen}>
                      GO GREEN
                        <div style={styles.h1}>
                            Make it green
                            <div style={styles.h2}>
                                Now more than ever. Our planet is need our
                            </div>
                        </div>  
                        </div>
                        <div style={styles.wrapperInput}> 
                            <Button title="Do it now"/>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
  }
  
  let w = window.innerWidth;
  let h = window.innerHeight;
  const styles = {
    background: {
      display: 'flex',
      backgroundImage: `url(${Background})`,
      height: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right:0,
      backgoundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  }, 
  overlay: {
     backgroundColor: "rgba(81, 77, 67, 0.7)",
     height: h,
     width: '100%'
  }, 
  container: {
    display:'flex',
     flexDirection: 'column',
     alignItems: 'center',
     fontFamily: 'Poppins'
  },
  gogreen: {
    alignSelf: 'center',
    marginTop: '50px',
    borderStyle: 'solid',
    borderWidth: '8px',
    maxWidth: '50px',
    color: "rgb(255, 255, 255)",
    justifyContent: 'center',
    padding: '10px'
  },
  h1: {
    alignSelf: 'center', 
    marginTop: 50, 
    color: 'white', 
    fontSize: 48, 
    textAlign: 'center',
    maxWidth: 700,
    fontFamily: 'Poppins'
  },
  h2: { 
    color: 'orange', 
    textAlign: 'center',
    maxWidth: 700,
    fontFamily: 'Poppins'
  },
  wrapperInput: {
    display: 'flex',
     alignSelf: 'center', 
     marginTop: 60
  },
 }
  
  export default App;
  
   