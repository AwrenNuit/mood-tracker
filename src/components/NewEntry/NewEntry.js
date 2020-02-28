import React from 'react';

export default function NewEntry() {

  return(
    <center>
      <div>
        <h3>How are you feeling today?</h3>
        <input type="radio" name="mood" />Great
        <input type="radio" name="mood" />Meh
        <input type="radio" name="mood" />Bad
      </div>
      <div>
        <h3>Did you meet your food goals?</h3>
        <input type="radio" name="mood" />Yes
        <input type="radio" name="mood" />No
      </div>
      <div>
        <h3>Did you meet your movement goals?</h3>
        <input type="radio" name="mood" />Yes
        <input type="radio" name="mood" />No
      </div>
      <div>
        <h3>How well did you sleep last night?</h3>
        <input type="radio" name="mood" />Great
        <input type="radio" name="mood" />Meh
        <input type="radio" name="mood" />Bad
      </div>
      <div>
        <h3>Did you have therapy today?</h3>
        <input type="radio" name="mood" />Yes
        <input type="radio" name="mood" />No
      </div>
      <div>
        <h3>Any additional thoughts?</h3>
        <textarea maxLength="300"></textarea>
      </div>
    </center>
  );
}