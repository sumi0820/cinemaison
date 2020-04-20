import React, { Component } from 'react'

const font = {
    fontFamily:'Times New Roman',
    fontSize:'20px',
    textAlign:'center'
}

const textBox = {
    width: '100%',
    maxWidth: '600px',    
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%'
}

const signature ={
    fontFamily:'Times New Roman',
    fontSize:'18px',
    textAlign:'right'
}

export class About extends Component {
    render() {
        return (
            <div className="container" >
            <div style={textBox}>
                <p style={font}>
               <h4>Welcome to Cinemaison</h4>
                Cinemaison is a review aggregator website for cinéphiles. <br/>
                <br/>
                You can post your movie reviews and make own favorite movie list.<br/>

                Enjoy your wonderful movie life.
                </p>    
                <p style={signature}>
                Cinemaison Owner<br/>
                Sumiya Ushiro
                </p>
            </div>
            </div>
        )
    }
}

export default About
