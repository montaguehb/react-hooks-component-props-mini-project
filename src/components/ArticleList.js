import React from 'react'
import Article from './Article'

const ArticleList = ({article}) => {
    const ArticleList = article.map(post => <Article post={post} key={post.id}/>)
    return (
        <main>{ArticleList}</main>
    )
}

export default ArticleList