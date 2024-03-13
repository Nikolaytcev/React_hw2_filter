import { Component } from 'react'

export class Toolbar extends Component {

  render() {
    return (
      <div className='filters'>
        {this.props.filters.map((filter, i) => filter === this.props.selected ? 
        <button className='filter selected' key={i} onClick={() => this.props.onSelectedFilter(filter)}>{filter}</button> : 
        <button className='filter' key={i} onClick={() => this.props.onSelectedFilter(filter)}>{filter}</button>)}
      </div>
    )
  }
}

