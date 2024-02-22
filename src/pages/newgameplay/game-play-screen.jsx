import AttemptsAndGamePlayHeader from "../../atoms/attemptsgameplayheader/attempts-game-play-header-screen";
import { HiOutlineLightBulb } from "react-icons/hi";
import AllocateSVGComponent from "../../assets/svg/allocatesvg/allocatesv";
import LadderScreen from "../lader/lader-screen";
import { Link } from "react-router-dom";
import {
  welfareImage,
  defenseImage,
} from "../../assets/images/attemptspageimage";
import { useState, useEffect } from "react";
import RupeesSVGComponent from "../../assets/svg/rupeessvg/rupeessvg";
import "./game-play-style.css";
import CongratulationsPopUp from "../playgame/congratulations-pop-up";
import CrisesPopUp from "../playgame/crises-pop-up";
import SignInScreen from "../../atoms/modal/modal";
const GameplayScreen = ({
  handleInputChange,
  inputY,
  inputX,
  handleAllocate,
  Gdp,
  increaseYear,
  increaseValue,
  removedIndices,
  handleSliderChange1,
  numberofattempts,
}) => {
  const customRange = [10, 100, 300, 500, 800, 1000];
  const maxCustomValue = Math.max(...customRange);
  const [defenseSliderValue, setDefenseSliderValue] = useState(0);
  const [defenseInputValue, setDefenseInputValue] = useState(0);

  const [congratulationModel, oncCongratulationModel] = useState(false);
  const [crisesModel, setCrisesModel] = useState(false);

  const [sliderValue, setSliderValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [isUp, setIsUp] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUp((prev) => !prev);
    }, 777);

    return () => clearInterval(interval);
  }, []);

  // const onClickLeftLabels = (labelValue) => {
  //   setDefenseSliderValue(labelValue);
  //   setDefenseInputValue(labelValue);
  // };

  // const onClickRightLabels = (labelValue) => {
  //   setSliderValue(labelValue);
  //   setInputValue(labelValue);
  // };

  return (
    <>
      {/* <SignInScreen modelData={CrisesPopUp}/> */}
      <div className="new-game-play-main-container">
        <AttemptsAndGamePlayHeader numberofattempts={numberofattempts} />
        <div className="rupees-and-hint-container">
          <div className="rupees-and-hint-inner-container">
            <h2 className="total-budget-heading">
              {Gdp} <span className="cr-text-style">Cr.</span>
            </h2>
            <button className="hint-button">
              <Link to="/hint-page" className="hint-button">
                <HiOutlineLightBulb className="hint-icon-style" />
                <span className="hint-text">Hint</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="mobile-and-medium-devices">
          <div className="mobile-devices-container">
            <div className="mobile-devices-left-label-and-range-container">
              <div className="input-labels-container">
                <span
                  onClick={() => onClickLeftLabels(1000)}
                  className="range-label"
                >
                  1000
                </span>
                <span
                  onClick={() => onClickLeftLabels(800)}
                  className="range-label"
                >
                  800
                </span>
                <span
                  onClick={() => onClickLeftLabels(500)}
                  className="range-label"
                >
                  500
                </span>
                <span
                  onClick={() => onClickLeftLabels(300)}
                  className="range-label"
                >
                  300
                </span>
                <span
                  onClick={() => onClickLeftLabels(100)}
                  className="range-label"
                >
                  100
                </span>
                <span
                  onClick={() => onClickLeftLabels(10)}
                  className="range-label"
                >
                  10
                </span>
              </div>
              <div className="range-input-container">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  onChange={handleSliderChange1}
                  name="rangeInputX"
                  className="range-input-bar"
                />
              </div>
            </div>
            <div className="mobile-devices-image-and-input-container">
              <img
                src={defenseImage}
                alt="defenseImage"
                className="mobile-devices-category-image"
              />
              <h4 className="category-name">Defense</h4>
              <div className="user-enter-input-field-container">
                <RupeesSVGComponent className="rupee-icon" />
                <div className="input-and-in-cross-container">
                  <input
                    type="text"
                    name="inputX"
                    value={inputX}
                    onChange={handleInputChange}
                    className="user-enter-input"
                  />
                  <span className="in-cross-text">IN CRORES</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-devices-container">
            <div className="mobile-devices-left-label-and-range-container">
              <div className="input-labels-container">
                <span
                  onClick={() => onClickLeftLabels(1000)}
                  className="range-label"
                >
                  1000
                </span>
                <span
                  onClick={() => onClickLeftLabels(800)}
                  className="range-label"
                >
                  800
                </span>
                <span
                  onClick={() => onClickLeftLabels(500)}
                  className="range-label"
                >
                  500
                </span>
                <span
                  onClick={() => onClickLeftLabels(300)}
                  className="range-label"
                >
                  300
                </span>
                <span
                  onClick={() => onClickLeftLabels(100)}
                  className="range-label"
                >
                  100
                </span>
                <span
                  onClick={() => onClickLeftLabels(10)}
                  className="range-label"
                >
                  10
                </span>
              </div>
              <div className="range-input-container">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  className="range-input-bar"
                  onChange={handleSliderChange1}
                  name="rangeInputY"
                />
              </div>
            </div>
            <div className="mobile-devices-image-and-input-container">
              <img
                src={welfareImage}
                alt="defenseImage"
                className="mobile-devices-category-image"
              />
              <h4 className="category-name">Welfare</h4>
              <div className="user-enter-input-field-container">
                <RupeesSVGComponent className="rupee-icon" />
                <div className="input-and-in-cross-container">
                  <input
                    type="text"
                    value={inputY}
                    name="inputY"
                    onChange={handleInputChange}
                    className="user-enter-input"
                  />
                  <span className="in-cross-text">IN CRORES</span>
                </div>
              </div>
            </div>
          </div>

          <div className="allocate-btn-container mobile-device-allocation-btn">
            <button className="allocate-btn" onClick={handleAllocate}>
              <AllocateSVGComponent className="allocation-icon" />
              Allocate
            </button>
          </div>
        </div>

        <div className="medium-and-large-devices">
          <div className="medium-and-large-devices-middle-container">
            <div className="medium-and-large-devices-left-container">
              <div className="left-labels-and-range-input-container">
                <div className="left-labels-container">
                  <span
                    onClick={() => onClickLeftLabels(1000)}
                    className="large-range-label"
                  >
                    1000
                  </span>
                  <span
                    onClick={() => onClickLeftLabels(800)}
                    className="large-range-label"
                  >
                    800
                  </span>
                  <span
                    onClick={() => onClickLeftLabels(500)}
                    className="large-range-label"
                  >
                    500
                  </span>
                  <span
                    onClick={() => onClickLeftLabels(300)}
                    className="large-range-label"
                  >
                    300
                  </span>
                  <span
                    onClick={() => onClickLeftLabels(100)}
                    className="large-range-label"
                  >
                    100
                  </span>
                  <span
                    onClick={() => onClickLeftLabels(10)}
                    className="large-range-label"
                  >
                    10
                  </span>
                </div>
                <div className="range-bar">
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    // value={}
                    onChange={handleSliderChange1}
                    name="rangeInputX"
                    className="medium-range-input"
                  />
                </div>
              </div>
              <div className="large-devices-image-container">
                <img
                  src={defenseImage}
                  alt="defenseImage"
                  className="medium-devices-image defense-image"
                />
                <h4 className="category-name">Defense</h4>
                <div className="large-devices-input-and-rupee">
                  <RupeesSVGComponent className="rupee-icon" />
                  <div className="large-devices-input-and-in-cross-container">
                    <input
                      type="text"
                      name="inputX"
                      value={inputX}
                      onChange={handleInputChange}
                      className="large-device-user-enter-input"
                    />
                    <span className="large-devices-in-cross-text">
                      IN CRORES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="medium-and-large-devices-sea-saw-container">
              <div className="sea-saw-tri">
                <div className={`seesaw ${isUp ? "up" : "down"}`}>
                  <div className="board">
                    {/* Top-left text */}
                    <div className="text top-left">Reality</div>
                    {/* <div className="text top-left">{defenseInputValue}</div> */}
                    {/* Top-right text */}
                    <div className="text top-right">Vision</div>
                    {/* <div className="text top-right">{inputValue}</div> */}
                  </div>
                </div>
                <img
                  src="https://res.cloudinary.com/dzxemuctv/image/upload/v1707242101/tri_sz4c1o.png"
                  alt="tri"
                  className="tri"
                />
              </div>
            </div>

            <div className="medium-and-large-devices-right-container">
              <div className="large-devices-image-container right-image-padding">
                <img
                  src={welfareImage}
                  alt="welfareImage"
                  className="medium-devices-image"
                />
                <h4 className="category-name">Welfare</h4>
                <div className="large-devices-input-and-rupee">
                  <RupeesSVGComponent className="rupee-icon" />
                  <div className="large-devices-input-and-in-cross-container">
                    <input
                      type="text"
                      value={inputY}
                      name="inputY"
                      onChange={handleInputChange}
                      className="large-device-user-enter-input"
                    />
                    <span className="large-devices-in-cross-text">
                      IN CRORES
                    </span>
                  </div>
                </div>
              </div>
              <div className="right-labels-and-range-input-container">
                <div className="right-range-bar">
                  <input
                    type="range"
                    min="10"
                    max={maxCustomValue}
                    step="10"
                    // value={inputY}
                    onChange={handleSliderChange1}
                    className="medium-range-input"
                    name="rangeInputY"
                  />
                </div>
                <div className="right-labels-container">
                  <span
                    onClick={() => onClickRightLabels(1000)}
                    className="large-range-label"
                  >
                    1000
                  </span>
                  <span
                    onClick={() => onClickRightLabels(800)}
                    className="large-range-label"
                  >
                    800
                  </span>
                  <span
                    onClick={() => onClickRightLabels(500)}
                    className="large-range-label"
                  >
                    500
                  </span>
                  <span
                    onClick={() => onClickRightLabels(300)}
                    className="large-range-label"
                  >
                    300
                  </span>
                  <span
                    onClick={() => onClickRightLabels(100)}
                    className="large-range-label"
                  >
                    100
                  </span>
                  <span
                    onClick={() => onClickRightLabels(10)}
                    className="large-range-label"
                  >
                    10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="allocate-btn-container large-device-allocation-btn">
          <button className="allocate-btn" onClick={handleAllocate}>
            <AllocateSVGComponent className="allocation-icon" />
            Allocate
          </button>
        </div>
        <div>
          <LadderScreen
            increaseYear={increaseYear}
            increaseValue={increaseValue}
            removedIndices={removedIndices}
          />
        </div>
      </div>
    </>
  );
};

export default GameplayScreen;
