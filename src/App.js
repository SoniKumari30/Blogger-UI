import React from 'react' 
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './project/Home'
import UsersList from './project/UsersList'
import PostsList from './project/PostsList'
import UserShow from './project/UserShow'
import PostShow from './project/PostShow'

function App () {
    return (
        <BrowserRouter>
        <div>
            <h1>Apps</h1>
            <Link to="/home">Home </Link> |
            <Link to="/users">Users </Link> |
            <Link to="/posts">Posts </Link>
            


            <Route path="/home" component={Home} exact={true} />
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow} />
            <Route path="/posts" component={PostsList} exact={true}/>
            <Route path="/posts/:id" component={PostShow} />
        


            

            
        </div>
        
        </BrowserRouter>
        
    )
}

export default App