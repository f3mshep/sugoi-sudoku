import React from 'react'
import RadioToggle from '../components/RadioToggle'

const difficulties = ['easy', 'medium', 'hard', 'very hard']

class DifficultyBar extends React.Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  difficultyBar() {
    return difficulties.map(difficulty => {
      if (difficulty === this.props.difficulty) {
        return <RadioToggle value={this.capitalizeFirstLetter(difficulty)} active={true} />
      } else {
        return <RadioToggle value={this.capitalizeFirstLetter(difficulty)} active={false} />;
      }
    });
  }

  render() {
    const bar = this.difficultyBar()
    debugger
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {bar}
      </div>
    );
  }
}

export default DifficultyBar