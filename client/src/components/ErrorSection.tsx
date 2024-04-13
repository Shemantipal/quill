import React from 'react'

function ErrorSection({ errors }) {
    return (
        <div className='mt-10 max-w-2xl'>
            {errors && errors.length > 0 && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Error!</strong>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>✔{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ErrorSection