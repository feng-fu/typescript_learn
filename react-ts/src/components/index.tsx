import * as React from "react"


export class Top extends React.Component<{}, null> {
  render() {
    return (
      <header style={styles}>
        I am Header.
      </header>
    )
  }
}

export class Content extends React.Component<{}, null> {
  render () {
    return (
      <div style={styleContent}>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        <div>I am Content.</div>
        
      </div>
    )
  }
}

export class Foot extends React.Component<{},null> {
  render () {
    return (
      <div style={styles}>
        I am Footer.
      </div>
    )
  }
}

const styles = {
  height: '30px',
  lineHeight: '30px',
  backgroundColor: 'green'
}

const styleContent = {
  flex: 1,
  backgroundColor: 'orange'
}