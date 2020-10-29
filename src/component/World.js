import React,{Component} from 'react'
import Axios from 'axios'

class World extends Component{
    constructor(){
      super();
      this.state={
        data:[]
      }
    }

    componentDidMount(){
      Axios.get('https://corona.lmao.ninja/v2/countries').then(responce=>{
        console.log(responce.data);
        this.setState({data:responce.data})
      })
    }
  
    render(){
  
      return(
        <div className="row">
          <div className="col-md-12">
            <table className="table table-primary table-bordered table-striped">
              <thead>
                <tr>
                  <td>country</td>
                  <td>Total cases</td>
                  <td>Recovered</td>
                  <td>Death</td>
                </tr>
              </thead>
              <tbody>
               {
                 this.state.data.map((itm,key)=>{
                   return(
                     <tr>
                       <td>{itm.country}
                       <img style={{width:'64px' ,marginLeft:'10px'}} src={itm.countryInfo.flag}></img>
                       </td>
                       <td>{itm.cases}</td>
                       <td>{itm.recovered}</td>
                       <td>{itm.deaths}</td>
                       
                     </tr>
                   )
                 })
               }
              </tbody>

            </table>

          </div>
        </div>
      )
      
  }
  }

  export default World 