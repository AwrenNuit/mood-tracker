import React, { useEffect, useState } from 'react';

export default function HomeCalendar(props) {

  const [month, setMonth] = useState('');
  const [year, setYear] = useState(props.year);

  useEffect(() => {
    switch(props.month){
      case 0:
        setMonth('January');
        break;
      case 1:
        setMonth('February');
        break;
      case 2:
        setMonth('March');
        break;
      case 3:
        setMonth('April');
        break;
      case 4:
        setMonth('May');
        break;
      case 5:
        setMonth('June');
        break;
      case 6:
        setMonth('July');
        break;
      case 7:
        setMonth('August');
        break;
      case 8:
        setMonth('September');
        break;
      case 9:
        setMonth('October');
        break;
      case 10:
        setMonth('November');
        break;
      case 11:
        setMonth('December');
        break;
      default:
        break;
    }
  }, []);

  return(
    <center>
      <h3>{month}</h3>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}