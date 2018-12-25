import React from 'react';
import moment from 'moment'
import './MovesList.scss';

const MovesList = (props) => {
  const movesPreview = props.moves.map((move, i) => {
    if (props.contact.name === move.to) {
      return (
        <li key={i} className="moves-list-item">
          <p>
            <span>At:</span>
            {moment(+move.at).format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <p>
            <span>Amount:</span>
            {move.amount}
          </p>
        </li>
      )
    }
  });

  return (
    <div className="moves-list">
    <h1>Moves:</h1>
      <ul>
        {movesPreview}
      </ul>
    </div>
  );
}

export default MovesList;
