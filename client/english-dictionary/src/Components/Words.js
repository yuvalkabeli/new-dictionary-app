import React from 'react';
import { nanoid } from 'nanoid'

// A component the makes each word clickable and linked to the words definition
export default function Words({ renderDefinitions, words, setSelectedPart, capitalize }) { //[ 'A', 'univalve', 'mollusk', 'of' ]
  return (
    <div>
      {words.map((word) => <span key={nanoid()}><span
        style={{ cursor: 'pointer', color: '#0645ad', textDecoration: 'underline' }}
        onClick={() => {
          setSelectedPart('none')
          word = word.replace(/[^a-zA-Z ]/g, "")
          if (!word)
            word = '_'
          return renderDefinitions(capitalize(word))
        }}
      >
        {word}</span>&nbsp;&nbsp;</span>)}
    </div>
  )
}