import React from 'react'
import RadioToggle from '../components/RadioToggle'

const difficulties = ['easy', 'medium', 'hard', 'insanity']

class DifficultyBar extends React.Component {
  //Handles user toggling between different difficulties. Tells toggle button
  //if it is active

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  difficultyBar() {
    return difficulties.map((difficulty,index) => {
      if (difficulty === this.props.difficulty) {
        return <RadioToggle path={`/sudoku/new/${difficulty}`} key={index}  value={this.capitalizeFirstLetter(difficulty)} active={true} />;
      } else {
        return <RadioToggle path={`/sudoku/new/${difficulty}`} key={index} value={this.capitalizeFirstLetter(difficulty)} active={false} />;
      }
    });
  }

  render() {
    const bar = this.difficultyBar()
    return (
      <div className="btn-group " data-toggle="buttons">
        {bar}
      </div>
    );
  }
}

export default DifficultyBar