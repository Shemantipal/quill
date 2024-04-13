import React from 'react'

function NoteSection({ notes }) {
  return (
    <div className='mt-10 max-w-2xl'>
      {notes && notes.length > 0 ? (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
          <strong className='font-mono underline decoration-wavy text-xl'>Notes!</strong>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>✔{note}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
          <strong className='font-mono underline decoration-wavy text-xl'>No Notes!</strong>
        </div>
      )}
    </div>
  )
}

export default NoteSection