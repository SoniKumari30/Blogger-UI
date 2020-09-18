import React from 'react'
import axios from 'axios'
//import {Link} from 'react-router-dom'

class PostShow extends React.Component {
    constructor (){
        super()
        this.state = {
            post:{},
            user:{},
            comments:[]
        }
    }
    componentDidMount(){
        
        const id = this.props.match.params.id

        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
              
              const post = response.data
              this.setState({post})

              axios.get(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
              .then((response) => {
                  
                  const user = response.data
                  this.setState({user})
    
              })

          }) 

          
              
          

          axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((response) => {
              
              const comments = response.data
              this.setState({comments})
          })
    }

    render(){
        
        return(
            <div>
                
                <h1>USER NAME:{this.state.user.username}</h1>
                <h1>TITLE:{this.state.post.title}</h1>
                <h2>BODY: {this.state.post.body}</h2>

                <hr />

                <h3>COMMENTS</h3>
                   
                 <ul>
                    {
                     this.state.comments.map((comment) => {
                    return <li key={comment.id}> { comment.body} </li>
                    })
                    }
                   
               </ul>
               <hr />
               <p><Link to={`/users/${this.state.user.id}`}>more posts from author : {this.state.user.username}</Link></p>
                
                      
            </div>
        )
    }
}
export default PostShow