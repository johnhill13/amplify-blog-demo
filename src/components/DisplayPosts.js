import React, { Component } from 'react'
import { listPosts } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayPosts extends Component {
    componentDidMount = async () => {
        this.getPosts()
    }

    getPosts = async () => {
        const result = await API.graphql(graphqlOperation(listPosts))
        console.log("All Posts:", JSON.stringify(result.data.listPosts.items))
    }

    
    render() {
        return (
            <div>
                <di>hello world</di>
            </div>
        );
    }
}

export default DisplayPosts;
