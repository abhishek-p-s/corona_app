import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import States from './State'
import Axios from 'axios'

class India extends Component {
  constructor() {
    super();
    this.state={
      data:{}
    }
  }

  componentDidMount(){
    Axios.get("https://corona.lmao.ninja/v2/countries/india").then(responce=>{
      console.log(responce)
      this.setState({data:responce.data})

    })
  }

  render() {

    return (
      <div className="row">
        <div className="col-md-12">
          <img src="https://www.countryflags.io/in/shiny/64.png" />
          <h3>INDIA</h3>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3  ">
              <Card className="badge badge-danger" style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                  <Card.Title>ACTIVE CASES</Card.Title>
    <h3>{this.state.data.active}</h3>
                  <Card.Text>
    </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3  ">
              <Card className="badge badge-primary" style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                  <Card.Title>RECOVERD</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text>
                   
    </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3  ">
              <Card className="badge badge-success" style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                  <Card.Title>TOTAL CASES</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text>
                   
    </Card.Text>

                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3  ">
              <Card className="badge badge-warning" style={{ width: '18rem' }}>
                <Card.Body className="text-center">
                  <Card.Title>DETHS</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text className="text-center">
                    
    </Card.Text>

                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-12 p-3">
          <States></States>

          </div>
        </div>
      </div>

    )

  }
}

export default India