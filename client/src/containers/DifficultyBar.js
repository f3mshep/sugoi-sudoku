import React from 'react'
import RadioToggle from '../components/RadioToggle'

const difficulties = ['easy', 'medium', 'hard', 'insanity']

class DifficultyBar extends React.Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  difficultyBar() {
    return difficulties.map(difficulty => {
      if (difficulty === this.props.difficulty) {
        return <RadioToggle path={difficulty} value={this.capitalizeFirstLetter(difficulty)} active={true} />
      } else {
        return <RadioToggle path={difficulty} value={this.capitalizeFirstLetter(difficulty)} active={false} />;
      }
    });
  }

  render() {
    const bar = this.difficultyBar()
    debugger
    return (
      <div className="btn-group " data-toggle="buttons">
        {bar}
      </div>
    );
  }
}

export default DifficultyBar