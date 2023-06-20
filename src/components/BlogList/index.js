import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(eachBlog => (
        <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
