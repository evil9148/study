import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment/moment';
import { fnGetTime } from '../js/time';
import { AppContext } from '../App';

const CompTimeDisplay = () => {
  const {_year, _setYear, _month, _setMonth, _date, _setDate, _hour, _setHour, _min, _setMin, _sec, _setSec} = useContext(AppContext)
  const fnSetTime = () => {
    

  }

  useEffect(() => {

  }, [])
  return (
    <div>
      <b>{_year}</b>
      <b>{_month}</b>
      <b>{_date}</b>
      <b>{_hour}</b>
      <b>{_min}</b>
      <b>{_sec}</b>
    </div>
  );
};

export default CompTimeDisplay;