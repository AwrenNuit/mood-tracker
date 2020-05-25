import React, { useState } from 'react';
import './HomeCalendar.css';

export default function HomeCalendar(props) {

  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [month, setMonth] = useState(monthList[props.month]);
  const [year, setYear] = useState(props.year);

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
          cells.push(<td key={j}></td>);
        }
        else if(dateOfTheMonth > (32 - new Date(year, props.month, 32).getDate())) {
          break;
        }
        else {
          cells.push(<td key={j}>{dateOfTheMonth}</td>);
          if(dateOfTheMonth === moDate && year === moYear && month === moMonth) {
            // add class to highlight/outline today's date
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
      <table>
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