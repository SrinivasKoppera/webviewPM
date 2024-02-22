import GameplayScreen from "./game-play-screen";
import React, { useState, useEffect } from "react";
import SignInScreen from "../../atoms/modal/modal";
import LadderScreen from "../lader/lader-screen";
import CongratulationsPopUp from "../playgame/congratulations-pop-up";
import CrisesPopUp from "../playgame/crises-pop-up";
import { useNavigate } from "react-router-dom";
// import { getAttemptDetails } from "../../redux/gameattempts/actions";
// import { useDispatch } from "react-redux";
const GameplayContainer = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const [increaseYear, setIncreaseYear] = useState(1947);
  const [increaseValue, setIncreaseValue] = useState(0);

  const [removedIndices, setRemovedIndices] = useState([]);

  const onClickForIncrease = () => {
    setRemovedIndices((prevIndices) => [...prevIndices, increaseValue]);
    setIncreaseValue((prevValue) => prevValue + 1);
    setIncreaseYear((prevYear) => prevYear + 1);
  };

  const [inputX, setInputX] = useState(0);
  const [inputY, setInputY] = useState(0);

  const [currentYear, setCurrentYear] = useState(1947);
  const [Gdp, setGdp] = useState(270000);
  const [yearData, setYearData] = useState({});
  const [congratsPopupData, setCongratsPopupData] = useState(null);
  const [crisesData, setCrisesData] = useState(null);
  const [showPopup, setPopup] = useState(false);

  const [showCrisesPopup, setCrisesPopup] = useState(false);

  const [numberofattempts, setNumberofAttempts] = useState(1);

  const onAttempts = () => {
    if (numberofattempts < 3) {
      setNumberofAttempts(numberofattempts + 1);
    } else if (numberofattempts === 3) {
      setNumberofAttempts(1);
    }
  };

  const onPopupclose = () => {
    setPopup(false);
    if (counterIncrement === 9) {
      navigate("/attempts");
      const details = {
        dateandtime: Date.now(),
        counterIncrement: counterIncrement,
      };
      //   dispatch(getAttemptDetails(details));
    }
  };

  const onCrisesPopupClose = () => {
    setCrisesPopup(false);
    if (counterIncrement === 9) {
      navigate("/attempts");
      const details = {
        dateandtime: Date.now(),
        counterIncrement: counterIncrement,
      };
      //   dispatch(getAttemptDetails(details));
    }
  };

  const popupMessages = {
    1947: {
      condition1:
        "You seem to have carried away by only one aspect of nation running. In the process, you may have harmed the prosperity of the nation.",
      condition2:
        "You are prone to take aggressive stances, which may not be in the overall interests of the nation in the long run.",
      condition3:
        "You are economically strong. But keep an eye on defense preparedness.",
      condition4:
        "You like to assume that defense can be secured by diplomacy and other means. But a minimum deterrent is essential to avoid crises.",
    },
    1948: {
      condition1:
        "A hawkish stand in a war year is good for public consumption. But being a poor nation, getting swayed by emotion may harm the citizens.",
      condition2: "Keep an eye on finances.",
      condition3: "Don’t take for granted the defense preparedness.",
      condition4: "You are too pacifistic.",
    },
    1949: {
      condition1:
        "Organisation capability to scale up may not match your intentions.",
      condition2:
        "Development of infrastructure and social welfare too needs your attention.",
      condition3:
        "Laxity in defense expenditure immediately after a war may not be wise.",
      condition4: "Security of the country needs employing enough resources.",
    },
    1950: {
      condition1:
        "For a newly integrated nation, probably administrative, social and developmental needs cannot be mortgaged to defence splurge",
      condition2:
        "Try to keep in check the urge to spend more on defence needs.",
      condition3:
        "Good job. But keep in mind the defence capability cannot built suddenly.",
      condition4: "Keeping a credible deterrent capacity, is necessary.",
    },
    1951: {
      condition1:
        "The export boom should not lead to extravagancy on Defence expenditure",
      condition2:
        "Be more considerate towards Developmental, Social and Administrative needs also.",
      condition3: "Defence needs also demand your attention",
      condition4: "A defence crisis impact national morale.",
    },
    1952: {
      condition1: "A defence crisis impact national morale.",
      condition2: "Good choice of defence spend. But think of the costs.",
      condition3:
        "Is this strategy of concentrating more on Developmental expenditure is sustainable?. Think",
      condition4: "You may be taking a huge risk by sacrificing defence needs.",
    },
    1953: {
      condition1:
        "Do you want to fritter away precious foreign exchange on defence or rather use it to build capacities to be self reliant?",
      condition2: "Is this your one-off tilt towards defence expenditure?",
      condition3: "Be mindful of defence capability.",
      condition4:
        "Security is an essential precondition for national prosperity",
    },
    1954: {
      condition1: "A long term defence solution is a stronger economy",
      condition2:
        "Keep your defence expenditure in check. Developmental expenditure suffers.",
      condition3:
        "Try to balance your urge to be economically stronger with the need to have a credible deterrent ",
      condition4: "Don’t ignore defence needs.",
    },
    1955: {
      condition1: "Defence needs are important, but so are developmental needs",
      condition2: "Aim for a reasonable developmental spend also.",
      condition3: "Be vigilant towards  defence needs",
      condition4: "Defence is as important as your developmental needs.",
    },
    1956: {
      condition1: "Don’t rush the scaling up of defence capabilities",
      condition2:
        "Try to be more considerate of Social, Developmental and administrative needs also.",
      condition3: "Take a look at your defence preparedness",
      condition4: "Don’t stifle your defence capabilities.",
    },
    1957: {
      condition1:
        "It is good to be vigilant against increasing threat perceptions. But also keep in mind the crises like suez canal, their impact on the availability of important goods, inflationary effect etc.,",
      condition2:
        "Can’t fault your cautious approach to defence. Hope you have struck balance.",
      condition3:
        "This is time for increasing the tempo on economic front. But not at the cost of defence.",
      condition4: "Time for you to revise your defence doctrine.",
    },
    1958: {
      condition1: "You job is as tricky as it gets. Cant find fault.",
      condition2: "Good job. But be on guard.",
      condition3:
        "Take a look at your security perception. Better be safe than sorry.",
      condition4:
        "By starving defence machine, you may be putting nation at risk",
    },
    1959: {
      condition1:
        "May be economic might is needed to gain that defence muscle. ",
      condition2:
        "Keep doing good work. But development can’t be sacrificed continuously.",
      condition3:
        "May be its time to really get out of comfort zone and take a hard look at defences.",
      condition4: "You need to increase your defence capabilities",
    },
    1960: {
      condition1:
        "An increasing foreign exchange shortage is likely to put your modernisation plan at check.",
      condition2:
        "By all means push for modernisation. Also note that developmental work is a long gestation project.",
      condition3: "Be more realistic in assessing national security.",
      condition4: "Your defence expenditure is inadequate.",
    },
    1961: {
      condition1:
        "You are borrowing from foreign countries and world bank etc., for developmental needs. A lot of diplomatic effort is made towards this end. Don’t you think any indiscriminate step up in defence may attract adverse reactions. ",
      condition2: "Your dilemma cannot be taken lightly. Good luck!",
      condition3: "Caution in defence matters is important",
      condition4: "You are on a dangerous path.",
    },
    1962: {
      condition1: "Unfortunate that you have to face a war. ",
      condition2: "Desperate days need desperate measures",
      condition3:
        "Your careless attitude in the face of adversity is not good.",
      condition4: "You are doomed to failure.",
    },
    1963: {
      condition1:
        "Stretching beyond the realms of possibilities is not advised.",
      condition2: "Keep doing the delicate balancing work.",
      condition3: "Pull up your socks and smell the rot.",
      condition4: "Even after setbacks you have not learnt the lesson",
    },
    1964: {
      condition1: "Striking a Balance is the key.",
      condition2:
        "Good luck with balancing development needs with defence needs.",
      condition3: "Learn from your mistakes.",
      condition4: "You need to introspect on your theory of security.",
    },
  };

  // const popupImges = {
  //   1947: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""

  //   },
  //   1948: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1949: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1950: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1951: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1952: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1953: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1954: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1955: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1956: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1957: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1958: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1959: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1960: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1961: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1962: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1963: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  //   1964: {
  //     image1:"",
  //     image2:"",
  //     image3:"",
  //     image4:""
  //   },
  // };

  const yearValues = {
    1947: { llx: 111, lly: 68, ulx: 506, uly: 139, ulxy: 574, GMX: 139 },
    1948: { llx: 190, lly: 68, ulx: 866, uly: 238, ulxy: 935, GMX: 238 },
    1949: { llx: 121, lly: 70, ulx: 584, uly: 151, ulxy: 655, GMX: 151 },
    1950: { llx: 133, lly: 94, ulx: 441, uly: 166, ulxy: 535, GMX: 166 },
    1951: { llx: 150, lly: 75, ulx: 715, uly: 187, ulxy: 789, GMX: 187 },
    1952: { llx: 151, lly: 78, ulx: 561, uly: 188, ulxy: 639, GMX: 188 },
    1953: { llx: 157, lly: 95, ulx: 674, uly: 196, ulxy: 769, GMX: 196 },
    1954: { llx: 156, lly: 110, ulx: 856, uly: 195, ulxy: 965, GMX: 195 },
    1955: { llx: 152, lly: 133, ulx: 924, uly: 190, ulxy: 1057, GMX: 190 },
    1956: { llx: 169, lly: 156, ulx: 1096, uly: 212, ulxy: 1252, GMX: 212 },
    1957: { llx: 224, lly: 222, ulx: 1476, uly: 280, ulxy: 1699, GMX: 280 },
    1958: { llx: 223, lly: 247, ulx: 1496, uly: 279, ulxy: 1744, GMX: 279 },
    1959: { llx: 214, lly: 275, ulx: 1712, uly: 267, ulxy: 1987, GMX: 267 },
    1960: { llx: 225, lly: 310, ulx: 1832, uly: 281, ulxy: 2141, GMX: 281 },
    1961: { llx: 250, lly: 420, ulx: 2061, uly: 312, ulxy: 2481, GMX: 312 },
    1962: { llx: 379, lly: 445, ulx: 2609, uly: 474, ulxy: 3054, GMX: 474 },
    1963: { llx: 647, lly: 482, ulx: 3362, uly: 808, ulxy: 3844, GMX: 808 },
    1964: { llx: 683, lly: 557, ulx: 3749, uly: 854, ulxy: 4306, GMX: 854 },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "inputX") {
      setInputX(value);
      console.log("xxxx--value", value);
    } else if (name === "inputY") {
      console.log("Y------", value);
      setInputY(value);
    }
  };

  const handleSliderChange1 = (event) => {
    const { name, value } = event.target;
    if (name === "rangeInputX") {
      setInputX(value);
    } else if (name === "rangeInputY") {
      setInputY(value);
    }
  };

  const [counterIncrement, setcount] = useState(0);

  const handlegamecount = () => {
    setcount((prevCount) => prevCount + 1);
    console.log("-------------------", counterIncrement);
  };

  const handleAllocate = () => {
    if (currentYear <= 1964) {
      // onClickForIncrease();
      handlegamecount();
      onAttempts();
      let storedX = inputX;
      if (
        inputX <= yearValues[currentYear].llx ||
        inputX <= yearValues[currentYear].ulx
      ) {
        storedX = inputX;
      } else if (inputX > yearValues[currentYear].ulx) {
        storedX = yearValues[currentYear].ulx;
      }

      let storedY = inputY;
      if (inputY > yearValues[currentYear].lly) {
        if (inputY < yearValues[currentYear].ulxy - storedX) {
          storedY = inputY;
        } else if (inputY > yearValues[currentYear].uly - storedX) {
          storedY = yearValues[currentYear].ulxy;
        }
      } else if (inputY < yearValues[currentYear].lly) {
        storedY = yearValues[currentYear].lly;
      }

      const gdp = parseInt(7100 + 5.48 * storedX + -2.82 * storedY);
      setGdp(gdp);

      setYearData((prevData) => ({
        ...prevData,
        [currentYear]: { x: storedX, y: storedY, gdp: gdp },
      }));

      if (storedX >= yearValues[currentYear].ulx) {
        onClickForIncrease();
        setCongratsPopupData({
          year: currentYear,
          message: popupMessages[currentYear].condition1,
          gdp: Gdp,
        });

        setCurrentYear((prevYear) => prevYear + 1);
        setPopup(true);
      } else if (
        storedX >= yearValues[currentYear].GMX &&
        storedX < yearValues[currentYear].ulx
      ) {
        onClickForIncrease();
        setCongratsPopupData({
          year: currentYear,
          message: popupMessages[currentYear].condition2,
          gdp: Gdp,
        });

        setCurrentYear((prevYear) => prevYear + 1);
        setPopup(true);
      } else if (
        storedX >= yearValues[currentYear].llx &&
        storedX < yearValues[currentYear].GMX
      ) {
        onClickForIncrease();
        setCongratsPopupData({
          year: currentYear,
          message: popupMessages[currentYear].condition3,
          gdp: Gdp,
        });

        setCurrentYear((prevYear) => prevYear + 1);
        setPopup(true);
      } else if (storedX < yearValues[currentYear].llx) {
        setCrisesData({
          year: currentYear,
          message: popupMessages[currentYear].condition4,
          gdp: Gdp,
        });

        setCrisesPopup(true);
      }
    } else {
      alert("Allocation complete. Cannot allocate for years beyond 1964.");
    }
    // setInputX("")
    // setInputX
  };

  // useEffect(() => {
  //   console.log("---year data", yearData);
  // }, [yearData]);
  // console.log(congratsPopupData);

  return (
    <>
      <GameplayScreen
        handleInputChange={handleInputChange}
        inputX={inputX}
        inputY={inputY}
        handleAllocate={handleAllocate}
        Gdp={Gdp}
        increaseYear={increaseYear}
        increaseValue={increaseValue}
        removedIndices={removedIndices}
        handleSliderChange1={handleSliderChange1}
        numberofattempts={numberofattempts}
      />
      {showPopup && (
        <CongratulationsPopUp
          congratsPopupData={congratsPopupData}
          onPopupclose={onPopupclose}
        />
      )}

      {showCrisesPopup && (
        <CrisesPopUp
          onCrisesPopupClose={onCrisesPopupClose}
          crisesData={crisesData}
        />
      )}
    </>
  );
};

export default GameplayContainer;
