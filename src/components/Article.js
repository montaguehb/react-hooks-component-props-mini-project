import React from 'react'

const Article = ({post: {title, date, preview, minutes}}) => {
  const emojis = minutes >= 30? '🍱'.repeat(Math.ceil(minutes/10)):'☕️'.repeat(Math.ceil(minutes/5))
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}.</small>
        <p>{preview} • {emojis} {minutes} min read</p>
    </article>
  )
}

export default Article