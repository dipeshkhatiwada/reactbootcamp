import React from 'react';
import logo from './logo.svg';
import './App.css';

class App  extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone:false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem:""
      });
    }
  }
  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list:updatedList
    })
  }
  UpdateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return (
      <div>
        <img src={logo} width="100" height="100" className="logo" />
        <h1 className="container">LCO TODO App</h1>
        <div>
          Add an Item....
          <br/>
          <input 
          type="text" className="input-text"
            placeholder="Write TODO" required
            value={this.state.newItem} 
            onChange={e => this.UpdateInput(e.target.value)}
             />
          <button
           className="add-btn"
           onClick={()=>this.addItem(this.state.newItem)}
           disabled={!this.state.newItem.length}
           >Add TODO</button>
          <div className="list">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={()=>{}} 
                    />
                    {item.value}
                    <button
                     className="btn"
                     onClick={()=>this.deleteItem(item.id)}
                     >Delete</button>
                  </li>
                );
              })}
              <li>

              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


// function App(){
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" />
//         <p>Learn React at LCO</p>
//       </header>
//     </div>
//   );
// }

export default App;