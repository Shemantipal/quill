import React from 'react'

function ReportCard({ result }) {
    return (
        <div className='mt-10 max-w-2xl'>
            {result && result.length > 0 && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Result!</strong>
                    <ul>
                        {result.map((result, index) => (
                            <li key={index}>✔{result}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default ReportCard
