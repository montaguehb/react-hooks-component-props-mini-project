import React from 'react'

const addEmojis = minutes =>  minutes >= 30? '🍱'.repeat(Math.ceil(minutes/10)):'☕️'.repeat(Math.ceil(minutes/5))

const Article = ({post: {title, date, preview, minutes}}) => {
  const emojis = addEmojis(minutes)
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}.</small>
        <p>{preview} {emojis}</p>
    </article>
  )
}

export default Article