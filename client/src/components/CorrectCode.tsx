import React from 'react'

function CorrectCode({ correct }: { correct: string }) {
    return (
        <div className='mt-10  max-w-2xl'>
            {correct  && (
                <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>CorrectCode</strong>
                    <code className='bg-slate-800'>
                    <pre>{correct}</pre>
                    </code>
                </div>
            )}
        </div>
    )
}

export default CorrectCode