import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardTitle, CardSubtitle, CardText, CardDeck, CardBody, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import axios from 'axios'

class Blog extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      currentPage: 1,
      postsPerPage: 9,
      isActive: false
    }

    this._clickPage = this._clickPage.bind(this)
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

  _featurePost(posts) {
    const resultPosts = []
    let threePosts = []
    posts.forEach((post, index) => {
      index += 1
      if (index % 3 === 0) {
        threePosts.push(post)
        resultPosts.push(threePosts)
        threePosts = []
      } else {
        threePosts.push(post)
      }

      if (index === posts.length) {
        resultPosts.push(threePosts)
      }
    })

    return resultPosts
  }

  _clickPage(event) {
    this.setState({ currentPage: Number(event.target.id) })
  }

  render() {

    const { currentPage, postsPerPage } = this.state

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = this.state.posts.slice(indexOfFirstPost, indexOfLastPost)

    const renderPosts = this._featurePost(currentPosts).map((post, index) => {
      return (
        <div key={index}>
          <CardDeck>
            {
              post.map(p => {
                return (
                  <Card key={p.id}>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt={p.title} />
                    <CardBody>
                      <CardTitle>
                        <Link to="" style={{ textDecoration: 'none' }}>{p.title}</Link>
                      </CardTitle>
                      <CardSubtitle>{p.body}</CardSubtitle>
                      <CardText>{p.time}</CardText>
                    </CardBody>
                  </Card>
                )
              })
            }
          </CardDeck>
          <br />
        </div>
      )
    })

    const pageNumbers = []
    for (let i = 0; i < Math.ceil(this.state.posts.length / postsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div key={number}>
          {
            number === 0 ? <PaginationItem disabled>
              <PaginationLink previous href={`/blog/${number}`} />
            </PaginationItem> : number === pageNumbers[pageNumbers.length - 1] ?
                <PaginationItem>
                  <PaginationLink next href={`/blog/${number}`} />
                </PaginationItem> :
                <PaginationItem>
                  <PaginationLink href={`/blog/${number}`}>
                    {
                      number
                    }
                  </PaginationLink>
                </PaginationItem>
          }
        </div>

      )
    })

    return (
      <div>
        <h3 style={styles.header}>Blog</h3>
        {
          renderPosts
        }
        <Pagination style={{ justifyContent: 'center' }}>
          {
            renderPageNumbers
          }
        </Pagination>
      </div>
    )
  }
}

const styles = {
  header: {
    padding: 10,
    textAlign: 'center'
  }
}

export default Blog
