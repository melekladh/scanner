import React from "react";
import '../compenents/style.css'
const Leaderboard = () => {
  return (
    <>
      <div className="Leaderboard">Unfluke</div>
      <div className="Basic">Leaderboard</div>
      {/* ********first************ */}
      <div className="wrapper">
      <div className="parent">
      <div className="container" style={{ display: "flex" }}>
        <div className="image image1">
          <img src="https://coingain.vercel.app/images/svg/crown.svg"></img>
        </div>
        <div className="First 1">
          <div className="firstone">First one </div>
          <div className="profit"> strategy_name</div>
          <div className="firstone">calmar ratio</div>
          <div className="profit">3.22</div>
        </div>
        <div className="both">
          <div className="firstone">overall profit</div>

          <div className="profit">370845</div>
        </div>
        <div>
          <div className="firstone">avg daily profit</div>
          <div className="profit">303.47</div>
        </div>
        <div>
          <div className="firstone">win</div>
          <div className="profit">0.65%</div>
        </div>
      </div>
      {/* <div className='logo'>
    <img src='https://coingain.vercel.app/images/svg/ani-18.png'></img>

</div> */}
      {/* *********second******** */}
      <div className="container translate" style={{ display: "flex" }}>
        <div className="image image2">
          <img src="https://coingain.vercel.app/images/svg/cup.svg"></img>
        </div>
        <div className="first">
          <div className="firstone">Second 2 </div>
          <div className="profit"> strategy_name</div>
          <div className="firstone">calmar ratio</div>
          <div className="profit">3.22</div>
        </div>
        <div className="both">
          <div className="firstone">overall profit</div>

          <div className="profit">370845</div>
        </div>
        <div>
          <div className="firstone">avg daily profit</div>
          <div className="profit">303.47</div>
        </div>
        <div>
          <div className="firstone">win</div>
          <div className="profit">0.65%</div>
        </div>
      </div>
      {/* ********third************ */}
      <div className="container" style={{ display: "flex" }}>
        <div className="image image3">
          <img src="https://coingain.vercel.app/images/svg/medal.svg" style={{height:'70px',width:'70px'}} ></img>
        </div>
        <div className="first">
          <div className="firstone">Third 3 </div>
          <div className="profit"> strategy_name</div>
          <div className="firstone">calmar ratio</div>
          <div className="profit">3.22</div>
        </div>
        <div className="both">
          <div className="firstone">overall profit</div>

          <div className="profit">370845</div>
        </div>
        <div>
          <div className="firstone">avg daily profit</div>
          <div className="profit">303.47</div>
        </div>
        <div>
          <div className="firstone">win</div>
          <div className="profit">0.65%</div>
        </div>
      </div>
      {/* <img src='https://coingain.vercel.app/images/svg/ani-18.png'></img> */}
      </div>
      <div className="cards">
      <div className="table ">
        <div>Rank</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
      </div>
      <div className="table">
        <div>Name</div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'orange' }}></div>
          strategy_name        </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'yellow' }}></div>
          strategy_name        </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'peachpuff' }}></div>
          strategy_name       </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'lightgoldenrodyellow' }}></div>
          strategy_name
        </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'blue' }}></div>
          strategy_name      </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'yellow' }}></div>
          strategy_name
        </div>
        <div className="user">
          <div className="user-icon" style={{ backgroundColor: 'lightgreen' }}></div>
          strategy_name       </div>
      </div>
      <div className="table">
        <div>Calmar Ratio</div>
        <div>3.96</div>
        <div>3.96</div>
        <div>3.96</div>
        <div>3.96</div>
        <div>3.96</div>
        <div>3.96</div>
        <div>3.96</div>
      </div>
      <div className="table">
        <div>Overall Profit</div>
        <div>	381845</div>
        <div>	381845</div>
        <div>	381845</div>
        <div>	381845</div>
        <div>	381845</div>
        <div>	381845</div>
        <div>	381845</div>
      </div>
      <div className="table">
        <div>Win %(Day)</div>
        <div>0.65</div>
        <div>0.65</div>
        <div>0.65</div>
        <div>0.65</div>
        <div>0.65</div>
        <div>0.65</div>
        <div>0.65</div>
      </div>
      
    </div>
      </div>
    </>
  );
};

export default Leaderboard;
