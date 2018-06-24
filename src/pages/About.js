import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>
        <h3 style={styles.header}>About</h3>
        <div style={styles.container}>
          <div style={styles.image}>
            <img src="https://avatars1.githubusercontent.com/u/835315?s=460&v=4" className="rounded-circle" alt="Eko Teguh Widodo" width="160" height="160" />
          </div>
          <div style={styles.content}>
            <div style={{ flex: 1 }}>
            </div>
            <div style={{ flex: 1 }}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea est fugiat necessitatibus quisquam repellat, aut reprehenderit beatae corrupti ducimus id enim voluptatibus quam perspiciatis delectus tempore adipisci cupiditate nostrum omnis?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea est fugiat necessitatibus quisquam repellat, aut reprehenderit beatae corrupti ducimus id enim voluptatibus quam perspiciatis delectus tempore adipisci cupiditate nostrum omnis?</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea est fugiat necessitatibus quisquam repellat, aut reprehenderit beatae corrupti ducimus id enim voluptatibus quam perspiciatis delectus tempore adipisci cupiditate nostrum omnis?</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  header: {
    padding: 10,
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  image: {
    flex: 1,
    textAlign: 'center',
    padding: 10
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: 10
  }
}

export default About
