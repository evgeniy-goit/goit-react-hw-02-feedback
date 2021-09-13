import React from 'react';
import './StatisticsBar.scss';
import PropTypes from 'prop-types'

class StatisticsBar extends React.Component {
  static defaultProps = {};

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

render () {
  const {good, neutral, bad, total, positivePercentage} = this.props;
  
  return (
<ul className="assessment_list">
  <li className="assessment_item"><p className="mark_title">Neutral: </p><span className="mark">{neutral}</span></li>
  <li className="assessment_item"><p className="mark_title">Bad: </p><span className="mark">{bad}</span></li>
  <li className="assessment_item"><p className="mark_title">Total: </p><span className="mark">{total}</span></li>
  <li className="assessment_item"><p className="mark_title">Good: </p><span className="mark">{good}</span></li>
  <li className="assessment_item"><p className="mark_title">Positive feedback:</p><span className="mark">{positivePercentage}%</span></li>
</ul>
)
    };
};

export default StatisticsBar;