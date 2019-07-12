import React from 'react'

var AdditionalInfo = (props) => (
  <div className="moreInfoContainer">
    <div className="leftDetails">
      <h4 id="moreInfo"> More Info </h4>
      <div className="rowDetails"> {`Length: ${props.additionalInfo.length} minutes`} </div>
      <div className="rowDetails"> {`Released: ${props.additionalInfo.released}`} </div>
      <div className="rowDetails"> {`Rating: ${props.additionalInfo.rating}`} </div>
      <div className="rowDetails"> {`Studio: ${props.additionalInfo.studio}`} </div>
      <div className="rowDetails"> {`Language: ${props.additionalInfo.language}`} </div>
      <div className="rowDetailsmoreMovies">
        <img src='https://www.vudu.com/bluesteel/images/dma_small.svg' alt="Movies Anywhere"></img>
        <p>Movies Anywhere</p>
      </div>
    </div>
    <div className="rightDetails">
      <div className="rowDetailsmoreMovies">
        <h4 className="detailBox">UHD</h4>
        <div className="rowDetails"> {props.additionalInfo.uhd}  </div>
      </div>
      <div className="rowDetailsmoreMovies">
        <h4 className="detailBox">HDX</h4>
        <div className="rowDetails"> {props.additionalInfo.hdx} </div>
      </div>
      <div className="rowDetailsmoreMovies">
        <h4 className="detailBox">SD</h4>
        <div className="rowDetails"> {props.additionalInfo.sd} </div>
      </div>
      <div className="rowDetailsmoreMovies">
        <h4 className="detailBox">CC</h4>
        <div className="rowDetails"> {props.additionalInfo.cc} </div>
      </div>
    </div>
  </div>

)


export default AdditionalInfo;


