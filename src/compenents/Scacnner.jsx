import React from "react";
import "../compenents/scanner.css";
const Scacnner = () => {
  return (
    <>
      <h1>Scanner</h1>
      <div className="containers">
        {/* *************************first*********************** */}

        <div className="scanner scanner1">
<input className="search" type="text" placeholder="Search"/>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>
<div className="hi" >bollinger bands(BBANDS upperband) </div>

        </div>
{/* *************************second*********************** */}
        <div className="scanner scanner2">
          <div className="firstdiv">
            <select>
              <option>Indices</option>
              <option>Equity</option>
              <option>Future</option>
            </select>

            <select>
              <option>Nifty Spot</option>
              <option>banking spot</option>
              <option>finnifty spot</option>
            </select>
          </div>
          <div className="x">
            <select>
              <option>X</option>
            </select>
          </div>
          <div className="startend">
            <div>Start Time</div>
            <div>End time</div>
          </div>

          <div className="time">
            <form action="date">
              <input type="time" value="09:30" />
            </form>
            <form action="date">
              <input type="time" value="15:00" />
            </form>
          </div>
          <div className="satisfy">
            <div>which satisfy</div>

            <label class="radio-label">
              <input type="radio" name="satisfaction" value="satisfy" checked />
              Satisfy
            </label>
            <label class="radio-label">
              <input type="radio" name="satisfaction" value="not_satisfy" />
              Not Satisfy
            </label>
          </div>

          <input type="checkbox" />
          <label for="vehicle1">Duplicate results</label>
          <select>
            <option>Timeframe</option>
            <option>1 min</option>
            <option>2 min</option>
            <option>3 min</option>
            <option>5 min</option>
            <option>10 min</option>
            <option>15 min</option>
          </select>
        </div>
{/* *************************third*********************** */}

        <div className="scanner scanner3">
          <div className="math-stock">
            <div className="math-number">
            
              <div className="math">
                Math operation
                </div>
                <div className="operations">
                  <div  className="inner">+</div>
                  <div className="inner">-</div>
                  <div className="inner">*</div>
                  <div className="inner">/</div>
                  <div className="inner">Number</div>
                </div>
              
            </div>
            <div className="stockltp">
              <div className="stock">Stock</div>
              <div className="inner">stock LTP</div>
            </div>
          </div>

          <div>comparison / cross</div>
          <div className="four">
            <div className="inner"> `{'>'}` </div>
          <div className="inner">`{'<'}`</div>
          <div className="inner" >`{'>='}`</div>
          <div className="inner">`{'<='}`</div>
          </div >
          

          <div className="inner">cross from above to below</div>
          <div className="inner">cross from below to above</div>

          <div>Binary Operation</div>
          <div className="orand">
            <div className="inner">OR</div>
          <div className="inner">AND</div>
          <div className="inner">SUBTRACT</div>
          </div>
          
        </div> 
      </div>
      <div className="drag">DRAG SOMETHING HERE</div>
    </>
  );
};

export default Scacnner;
