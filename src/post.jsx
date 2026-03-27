import { use } from "react"

export default function Posts({postsProimise}){

    const posts = use(postsProimise)
    console.log(posts)
    return(
        <div className="card">
            <h1>All Posts are here</h1>
            <p>{posts.length}</p>
        </div>
    )
}