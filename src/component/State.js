import React, { Component } from 'react'
import Axios from 'axios'
import {Accordion,Card,Button} from 'react-bootstrap'

class State extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {}
    }
  }

  componentDidMount() {
    Axios.get("https://api.covid19india.org/state_district_wise.json").then((response) => {
      this.setState({ stateData: response.data });
    })
  }

  render() {
    let keys = Object.keys(this.state.stateData)
    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion defaultActiveKey="0">
            {
              keys.map((itm,key)=>{
                let districts=this.state.stateData[itm].districtData
                let district_keys=Object.keys(districts)
                let active_cases=0;
                let total_cases=0;
                let total_deaths=0;
                let total_recover=0
                let district_list=[]

                for(let x in districts){
                  active_cases+=districts[x].active
                  total_cases+=districts[x].confirmed
                  total_deaths+=districts[x].deceased
                  total_recover+=districts[x].recovered

                  let ob=districts[x]
                  ob["district_name"]=x

                  district_list.push(ob)

                }

                console.log("#####",district_list)
                return(
                  <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                      {itm} <span className="btn-dark mr-2 p-1">-Total Cases -{total_cases}</span> <span className="btn-dark mr-2 p-1">Active {active_cases} </span>  <span className="btn-dark mr-2 p-1">Recovered {total_recover}</span>  <span className="btn-dark mr-2 p-1">Deths {total_deaths}</span>
          </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={key}>
                    <Card.Body>
                      <table className="table table-bordered table-strip">
                        <thead>
                          <tr>
                            <td>Districts</td>
                            <td>confirmed cases</td>
                            <td>Active</td>
                            <td>Recorved</td>
                            <td>Deths</td>
                          </tr>
                        </thead>
                        <tbody>
                         {
                           district_list.map((itm,key)=>{
                             return(
                             <tr>
                               <td>{itm.district_name}</td>
                               <td>{itm.confirmed}</td>
                               <td>{itm.active}</td>
                               <td>{itm.recovered}</td>
                               <td>{itm.deceased}</td>
                             </tr>
                             )
                           })
                         }
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                )
              })
            }
           
          </Accordion>
        </div>
      </div>
    )

  }
}

export default State