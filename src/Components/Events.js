import React, { Component } from 'react';

export class Events extends Component {
  render() {
    return (
      <div>
        <h1><center>Register Now for</center></h1>
        <h5><center>Upcoming Events</center></h5>
        <br/>
        <div className="d-flex justify-content-center">
          <div className="card mx-3" style={{ width: '20rem' ,borderRadius:'15px', border: '1px solid grey', background:'white', color:'black'}}>
            <img
              src="./images/workshop.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: '300px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Workshop</h5>
              <p className="card-text">
              Enhance your skills with the cisco community exclusive workshop with amazing speaker xyz.
              </p><br/><br/><br/><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>

          <div className="card mx-3" style={{ width: '20rem',borderRadius:'15px', border: '1px solid grey' , background:'white', color:'black'}}>
            <img
              src="./images/hackathon.png"
              className="card-img-top"
              alt="..."
              style={{ height: '300px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Techathon</h5>
              <p className="card-text">
              Code and compete with talented commuity members and win exciting prizes.
              </p><br/><br/><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>

          <div className="card mx-3" style={{ width: '20rem', borderRadius:'15px',border: '1px solid grey' , background:'white', color:'black'}}>
            <img
              src="./images/webinar.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: '300px', objectFit: 'cover', borderRadius:'15px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Webinar</h5>
              <p className="card-text">Get the chance to listen to the industry experts and get their insights on the emerging tech.</p><br/><br/><br/><br/>
              <button type="button" class="btn btn-dark" data-mdb-ripple-color="dark">Register now</button>
            </div>
          </div>
         
          
        </div>
        <br/>
      </div>
    );
  }
}

export default Events;