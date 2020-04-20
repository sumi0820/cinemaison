import React from 'react'

const footer = {
    backgroundColor:'#0890B5',
    fontSize:'16px',
    position:'absolute',
    left:'0',
    bottom:'0',
    right:'0'
}

const Footer = () => {
        return (
        <div>
            <div className="row" style={footer}>
                <div className="col-md-12" >
                    <div className="footer p-3 mt-4 text-center text-light">
                    Developed By:
                    <span className="text-warning font-weight-normal">
                        Sumiya Ushiro
                    </span>
                    , Using <i className="fab fa-react" /> React JS &amp; Redux JS
                    integrated with Firebase &amp; external movies data API
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Footer
