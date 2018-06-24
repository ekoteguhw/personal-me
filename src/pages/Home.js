import React from 'react'
import Header from '../components/Header'
import { CardDeck, CardImg, Card } from 'reactstrap'
import axios from 'axios'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get("http://www.splashbase.co/api/v1/images/latest")
      .then(res => this.setState({ albums: res.data.images }))
      .catch(err => console.log(err))
  }

  _featureImage(images) {
    const resultImages = []
    let twoImages = []
    images.forEach((image, index) => {
      index += 1
      if (index % 2 === 0) {
        twoImages.push(image)
        resultImages.push(twoImages)
        twoImages = []
      } else {
        twoImages.push(image)
      }

      if (index === images.length) {
        resultImages.push(twoImages)
      }
    })

    return resultImages
  }

  render() {
    const albums = this._featureImage(this.state.albums)

    return (
      <div style={styles.container}>
        <Header heading="Welcome to PersonalMe" subheading="Personal web of Eko Teguh Widodo" />
        <div>
          <h3 style={styles.header}>Galeries</h3>
          {
            albums.map((album, index) => {
              return (
                <div key={index}>
                  <CardDeck>
                    {
                      album.map(a => {
                        return (
                          <Card key={a.id}>
                            <CardImg top width="100%" height="80%" src={a.url} alt={a.id} />
                          </Card>
                        )
                      })
                    }
                  </CardDeck>
                  <br />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const styles = {
  container: { marginTop: 10, textAlign: 'center' },
  header: {
    padding: 10,
    textAlign: 'center'
  }
}

export default Home
