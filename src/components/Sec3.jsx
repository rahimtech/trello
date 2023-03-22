import CARD from "./Card";
import "../css/output.css";
import staypage from "../img/staypage.PNG";
import analix from "../img/monitor.PNG";
import saffron from "../img/saff.jpg";
const Sec3 = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly  mx-auto ">
        <span>
          <CARD
            link="https://staypage.rahimiblog.ir"
            img={staypage}
            name="StayPage Project"
            desc="HTML/CSS/JS/JQ"
          />
        </span>
        <span className="my-4 md:my-0">
          <CARD
            link="https://analix.rahimiblog.ir"
            img={analix}
            name="Analysis Project"
            desc="HTML/CSS/JS/JQ/Bootstrap/PHP/SQL"
          />
        </span>
        <span>
          <CARD
            link="https://saffron.rahimiblog.ir"
            img={saffron}
            name="Saffron Project"
            desc="HTML/CSS/JS/JQ"
          />
        </span>
      </div>
    </div>
  );
};

export default Sec3;
