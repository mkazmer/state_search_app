import React, { Component } from 'react'
import Master from './inc/us-states.json'

import Header from './components/Header.js'
import Search from './components/Search.js'
import SortBar from './components/SortBar.js'
import StateContainer from './components/StateContainer.js'
import PageChange from './components/PageChange.js'
import './App.scss'

const itemsPerPage = 10

const initializeList = states => {
  const updated = states.map(state => {
    let d = new Date(state.statehood_date)
    const date = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/')
    state.statehood_date = date
    return state
  })
  return updated
}

class App extends Component {
  state = {
    states: initializeList(Master.states),
    sortBy: 'name',
    ascOrder: true,
    page: itemsPerPage
  }

  searchList = searchValue => {
    const search = initializeList(Master.states).map(state => {
      let found = false
      Object.values(state).forEach(stateValue => {
        if (
          String(stateValue)
            .toUpperCase()
            .indexOf(searchValue.toUpperCase()) >= 0
        ) {
          found = true
        }
      })
      if (found) {
        return state
      } else return undefined
    })
    const filteredSearch = this.sortList(
      this.state.sortBy,
      search.filter(x => x !== undefined),
      !this.state.ascOrder
    )
    this.setState({ ...this.state, page: itemsPerPage, states: filteredSearch })
  }

  sortList = (sortBy, list, notAscOrder) => {
    const newList = list.sort((a, b) => {
      if (a[`${sortBy}`] < b[`${sortBy}`]) {
        return -1
      }
      if (a[`${sortBy}`] > b[`${sortBy}`]) {
        return 1
      }
      return 0
    })

    if (notAscOrder) {
      return newList.reverse()
    }

    return newList
  }

  changeSortOrder = sortBy => {
    if (sortBy === this.state.sortBy) {
      this.setState({
        ...this.state,
        states: this.state.states.reverse(),
        ascOrder: !this.state.ascOrder
      })
    } else {
      const sortedList = this.sortList(sortBy, this.state.states)
      this.setState({ ...this.state, states: sortedList, sortBy, ascOrder: true })
    }
  }

  changePage = change => {
    if (change === 'inc') {
      this.setState({ ...this.state, page: this.state.page + itemsPerPage })
    } else if (change === 'dec') {
      this.setState({ ...this.state, page: this.state.page - itemsPerPage })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container">
          <Search searchList={this.searchList} />
          <SortBar
            changeSortOrder={this.changeSortOrder}
            sortBy={this.state.sortBy}
            ascOrder={this.state.ascOrder}
          />
          <div className="results-container">
            {Object.keys(this.state.states).map((id, i) => {
              const pageCount = this.state.page
              const state = this.state.states[id]

              if (i < pageCount && i >= pageCount - itemsPerPage) {
                return <StateContainer key={state.name} state={state} />
              } else return null
            })}
          </div>
          <PageChange
            changePage={this.changePage}
            page={this.state.page}
            length={this.state.states.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    )
  }
}

export default App
