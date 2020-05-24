import React, { useState } from 'react';

export default function HomeCalendar(props) {

  const monthList = [
    "January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"
  ];
  const [month, setMonth] = useState(monthList[props.month]);
  const [year, setYear] = useState(props.year);

  const generateMonthTable = () => {
    const firstDay = (new Date(year, props.month)).getDay();
    let date = 1;
    let output = [];

    for(let i=0; i<6; i++) {
      let cells = [];
      for(let j=0; j<7; j++) {
        if(i === 0 && j < firstDay) {
          cells.push(<td key={j}></td>);
        }
        else if(date > (32 - new Date(year, props.month, 32).getDate())) {
          break;
        }
        else {
          cells.push(<td key={j}>{date}</td>);
          if(date === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()) {
            // add class to highlight/outline today's date
          }
          date++;
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