import React from 'react'

function CorrectCode({ correct }: { correct: string[] }) {
    return (
        <div className='mt-10  max-w-2xl px-3 py-2 rounded-lg'>
            {correct  && (
                <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>CorrectCode</strong>
                    <br />
                    <br />
                    <br />
                    <code>
                        {
                            correct.map((line, index) => (
                                <div key={index}>{line}</div>
                            ))
                        }
                    </code>
                </div>
            )}
        </div>
    )
}

export default CorrectCode