import React from 'react';

// var x = false
//
// let logX = () => {
//   console.log('first', x)
//   x = !x
//   console.log('second', x)
// }

class Hog extends React.Component{
  constructor(){
    super()
    this.changeDisplay = this.changeDisplay.bind(this)
    this.state = {
      display: true
    }
  }

  changeDisplay(){
    this.setState({
      display: !this.state.display
    })
  }

  render(){
    return (
              <div>
              <button onClick={this.changeDisplay}>Hide/Show {this.props.hog.name}</button>
                {this.state.display && <div>
                  <img src={require(`../../public/hog-imgs/${this.props.hog.name.replace(/\s/g, '_').toLowerCase()}.jpg`)}/>
                  <p>Name: {this.props.hog.name}</p>
                  <p>Specialty: {this.props.hog.specialty}</p>
                  {this.props.hog.greased ? <p>Greased: true</p> : <p>Greased: false</p>}
                </div>}
              </div>
    )
  }
}


// const Hog = ({hog}) => {
//   return(
//         <div>
//         <button onClick={logX}>Hide/Show</button>
//           {x && <div>
//             <img src={require(`../../public/hog-imgs/${hog.name.replace(/\s/g, '_').toLowerCase()}.jpg`)}/>
//             <p>Name: {hog.name}</p>
//             <p>Specialty: {hog.specialty}</p>
//             {hog.greased ? <p>Greased: true</p> : <p>Greased: false</p>}
//           </div>}
//         </div>
//   )
// }

export default Hog;
