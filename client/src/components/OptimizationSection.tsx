import React from 'react'

function OptimizationSection({ optimizations }) {
    return (
        <div className='mt-10 max-w-2xl'>
            {optimizations && optimizations.length > 1 ? (
                 <div className='bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Optimization!</strong>
                    <ul>
                        {optimizations.map((optimization, index) => (
                            <li key={index}>&#9989;{optimization}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>No Optimization!</strong>
                </div>
            )}
        </div>
    )
}

export default OptimizationSection