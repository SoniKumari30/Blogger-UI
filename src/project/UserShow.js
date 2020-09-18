import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
    constructor (){
        super()
        this.state = {
            user:{},
            posts:[]
            
        }
    }
    componentDidMount(){
        
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => {
              
              const user = response.data
              this.setState({user})

          })
        
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then((response) => {
              
              const posts = response.data
              this.setState({posts})
          }) 


    }
            
    render(){
        
        return(
            <div>
    
                <h2>USER NAME:{this.state.user.username}</h2>
                <h3>POSTS WRITTEN BY USER </h3>
                    <ul>
                     {
                        this.state.posts.map((users) => {
                           return <li key={users.id}><Link to={`/users/${users.id}`}> { users.title}</Link></li>})
                     }
                    </ul>
               
            </div>
        )
    }
}
export default UserShow