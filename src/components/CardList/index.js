import React from 'react'
import Card from '../Card'
import { withGlobalState } from '../hocs/withGlobalState'

class CardListNoState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderBy: 'asc'
    }

    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    this.setState({
      orderBy: e.target.value
    })
  }

  render() {
    const { orderBy } = this.state
    const { citiesList } = this.props.state
    let sortedCitieslist = citiesList.sort()

    if (orderBy === 'desc') {
      sortedCitieslist.reverse()
    }

    if (sortedCitieslist.length === 3) {
      throw new Error('i crashed')
    }
    return (
      <>
        <select
          className='Select'
          value={orderBy}
          onChange={this.handleOnChange}
        >
          <option value='asc'>By name asc</option>
          <option value='desc'>By name desc </option>
        </select>
        <div className='CardLIst'>
          {sortedCitieslist.map((cities) => {
            return <Card key={cities} cities={cities} />
          })}
        </div>
      </>
    )
  }
}

export const CardList = withGlobalState(CardListNoState)
