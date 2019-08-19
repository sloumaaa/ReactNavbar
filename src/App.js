import React from 'react';
import Nav from './Nav';

function App() {

  var obj0 ={ 
    namenav :"Home",
    contientsousnav : 0 ,
    sounav : [],
    lien:'#'
  };
  var obj1 ={ 
    namenav :"Services",
    contientsousnav : 1,
    sounav : ['For entenpreneurs', 'For students', 'For hoppyists'],
    lien:'#'
  };
  var obj2 ={ 
    namenav :"Contact",
    contientsousnav : 0,
    sounav:[],
    lien:'#'
  };
  var tabnavlist=[];
  tabnavlist.push(obj0,obj1,obj2);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '550px', borderBottom: 'solid blue' }}>
      
      {tabnavlist.map(x => <Nav navobj={x}  />)}
   
    </div>
  );

}

export default App;
