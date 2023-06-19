import { createContext, useEffect, useState } from "react";
import CompCount from "./components/CompCount";
import CompMoney from "./components/CompMoney";
import CompQuitStep from "./components/CompQuitStep";
import CompTimeDisplay from "./components/CompTimeDisplay";
import { fnGetTime } from "./js/time";
export const AppContext = createContext()

function App() {
  const [_year, _setYear] = useState('')
  const [_month, _setMonth] = useState('')
  const [_date, _setDate] = useState('')
  const [_hour, _setHour] = useState('')
  const [_min, _setMin] = useState('')
  const [_sec, _setSec] = useState('')
  const [_disabled, _setDisabled] = useState('')

  const fnSetTime = (startStamp) => {
    let quitStamp = Date.now() - startStamp
    let quitTime = parseInt(quitStamp / 1000)
    let remain
    let quitDays = parseInt(quitTime / (60 * 60 * 24))
    quitDays = (quitDays < 10) ? '0' + quitDays : quitDays
    remain = quitTime % (60 * 60 * 24)
    let quitHour = parseInt(remain / (60 * 60))
    quitHour = (quitHour < 10) ? '0' + quitHour : quitHour
    remain = remain % (60 * 60)
    let quitMin = parseInt(remain / 60)
    quitMin = (quitMin < 10) ? '0' + quitMin : quitMin
    let quitSec = parseInt(remain % 60)
    quitSec = (quitSec < 10) ? '0' + quitSec : quitSec
    console.log(quitSec);

    return { quitDays, quitHour, quitMin, quitSec }
  }

  const fnStartClick = () => {
    let startStamp = Date.now()
    if (window.localStorage.getItem('quitStampStorage')) {
      fnSetTime(JSON.parse(window.localStorage.getItem('quitStampStorage')))
    } else {
      fnSetTime(startStamp)
    }

  }



  const fnSetState = () => {
    const { quitDays, quitHour, quitMin, quitSec } = fnSetTime()

  }


  useEffect(() => {
    let intervalId
    intervalId = setInterval(() => {
      fnSetState()
    }, 1000);
    return (() => {
      clearInterval(intervalId)
    })
  }, [])

  return (
    <AppContext.Provider value={{
      _year, _setYear, _month, _setMonth, _date, _setDate, _hour, _setHour, _min, _setMin, _sec, _setSec
    }}>
      <h1>Quit Smoke!!<i className="fa-solid fa-ban-smoking"></i></h1>
      <CompTimeDisplay />
      <CompCount />
      <CompQuitStep />
      <CompMoney />
      <button onClick={fnStartClick} disabled={_disabled}>금연하기</button>
      <button>실패(reset)</button>
    </AppContext.Provider>
  );
}

export default App;
