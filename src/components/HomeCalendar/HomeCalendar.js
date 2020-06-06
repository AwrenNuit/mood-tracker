import React, { useState, useEffect } from 'react';
import './HomeCalendar.css';
import { useSelector, useDispatch } from 'react-redux';

export default function HomeCalendar(props) {

  const dispatch = useDispatch();
  const mood = useSelector(state => state.calendar);
  const user = useSelector(state => state.user);
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [month, setMonth] = useState(monthList[props.month]);
  const [year, setYear] = useState(props.year);

  useEffect(() => {
    dispatch({type: `GET_CALENDAR`, payload: user.id});
  }, []);

  const generateMonthTable = () => {
    const moDate = new Date().getDate();
    const moYear = new Date().getFullYear();
    const moMonth = new Date().getMonth();
    const firstOfTheMonth = (new Date(year, props.month)).getDay();
    let dateOfTheMonth = 1;
    let output = [];

    for(let i=0; i<6; i++) {
      let cells = [];
      for(let j=0; j<7; j++) {
        if(i === 0 && j < firstOfTheMonth) {
          cells.push(<td key={j} className="calendar-empty-cell"></td>);
        }
        else if(dateOfTheMonth > (32 - new Date(year, props.month, 32).getDate())) {
          if(!cells[0]) {
            break;
          }
          else {
            cells.push(<td key={j} className="calendar-empty-cell"></td>);
          }
        }
        else {
          if(dateOfTheMonth === moDate && year === moYear && props.month === moMonth) {
            cells.push(<td key={j} className="calendar-today">{dateOfTheMonth}</td>);
          }
          else {
            cells.push(<td key={j}>{dateOfTheMonth}</td>);
          }
          dateOfTheMonth++;
        }
      }
      output.push(<tr key={i}>{cells}</tr>);
    }
    return output;
  }

  return(
    <center>
      <h3>{month} {year}</h3>
      {JSON.stringify(mood)}
      <table id="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {generateMonthTable()}
        </tbody>
      </table>
    </center>
  );
}