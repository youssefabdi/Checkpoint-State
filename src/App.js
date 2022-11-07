import { Component } from 'react';
import youssef  from './youssef.jpg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {

      SHOWWW : false,
      Person : { 
                fullName : "Mr. ABDI Youssef",
                bio : "I hold a Mechatrnic Engineer", 
                imgSrc: youssef, 
                profession:"I'm an Engineer"
              },
    }
    this.clikk = this.clikk.bind(this);
  }
  


  clikk(){
    this.setState(function (previous){
      return{
        SHOWWW : !previous.SHOWWW ,
      }
    });
  }

  render(){
    if(this.state.SHOWWW)
    return (
      <div className='App'>
        <button onClick={this.clikk}>HIDEE</button>
        <br/>
        <img className='img' src={youssef} alt="Personalimg" width="250" />
        <h1 className='name'>{this.state.Person.fullName}</h1>
        <h2 className='style'>{this.state.Person.bio}</h2>
        <h2 className='style'>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
      
      <button  onClick={this.clikk}>SHOWWW</button>
     
      );
  }
}

export default App;