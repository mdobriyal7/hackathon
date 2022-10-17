import "./home.less";
import Pic from "../../assets/PicsArt.svg";
import AI from "../../assets/AI.svg";
import Data from "../../assets/Data.svg";
import Host from "../../assets/Host.svg";
import Icon1 from "../../assets/carbon_notebook-reference.svg";
import Icon2 from "../../assets/Vector.svg";
import Icon3 from "../../assets/Robot.svg";
import Icon4 from "../../assets/IdentificationCard.svg";
import Explore from "../../components/explore/explore";
import Challanges from "../../components/challanges/challanges";
import Muicard from "../../components/muicard/muicard";


const Home = () => {
  return (
    <>
      {/* top banner */}
      <div className="parent">
        <div className="banner ">
          <div className="container text-center d-flex align-self-center">
            <div className="row">
              <div className="col-1">
                <div className="line mx-auto"></div>
              </div>
              <div className="col-6 text-start">
                {/* <div className="line"></div> */}
                <h1 className="heading text-start">
                  Accelerate Innovation with Global AI Challenges
                </h1>

                <p className="para text-start">
                  AI challanges at Hackathon simulates real world problems.It is
                  a great place to put your AI/Data Science skills to test on
                  diverse datasets allowing you to foster learning through
                  competitions.
                </p>
                <button type="button" className="bttn btn btn-light">
                  Create Challange
                </button>
              </div>
              <div className="col">
                <img src={Pic} />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center submissions justify-content-around ">
          <div className="d-flex flex-row align-items-center ">
            <img className="m-3" src={AI} />
            <div className="d-flex flex-column align-items-start">
              <span className="subheading">100k+ </span>
              <span className="text">All Model Submissions</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex flex-row align-items-center ">
            <img className="m-3" src={Data} />
            <div className="d-flex flex-column align-items-start">
              <span className="subheading">50k+ </span>
              <span className="text">Data Scientists</span>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex flex-row align-items-center ">
            <img className="m-3" src={Host} />
            <div className="d-flex flex-column align-items-start">
              <span className="subheading">100+ </span>
              <span className="text">All Challanges Hosted</span>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column align-items-center">
          <h1 style={{ margin: "70px 0px 40px 0px" }}>
            Why Participate in <span className="section"> AI Challanges?</span>
          </h1>
          <div className="row" style={{padding:"0% 5% 0% 5%"}}>
            <div className="col-6 ">
              <div className="card d-flex align-items-start justify-content-center p-4 m-4 border border-0">
                <img src={Icon1} className="icon" />
                <span className="head">Prove Your Skills</span>
                <p className="subhead">
                  Gain substantial experience by solving real-world problems and
                  pit against others to come up with innovative solutions.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="card d-flex align-items-start justify-content-center p-4 m-4 border border-0">
                <img src={Icon2} className="icon" />
                <span className="head">Learn from community</span>
                <p className="subhead">
                  Learn from community One can look and analyze the solutions
                  submitted by the other Data Scientists in the community and
                  learn from them.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="card d-flex align-items-start justify-content-center p-4 m-4 border border-0">
                <img src={Icon3} className="icon" />
                <span className="head">Challenge yourself</span>
                <p className="subhead">
                  There is nothing for you to lose by participating in a
                  challenge. You can fail safe, learn out of the entire
                  experience and bounce back harder.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="card d-flex align-items-start justify-content-center p-4 m-4 border border-0">
                <img src={Icon4} className="icon" />
                <span className="head">Earn recognition</span>
                <p className="subhead">
                  You will stand out from the crowd if you do well in AI
                  challenges, it not only helps you shine in the community but
                  also earns rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Explore />
        <Challanges />
        <Muicard/>
      </div>
    </>
  );
};

export default Home;
