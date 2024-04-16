import React from 'react'

function ReportCard({ marks }) {
    return (
        <div className='mt-10 max-w-2xl'>
            {marks  &&(
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Report Card</strong>
                    <br />
                    <strong className='font-mono '>{marks}/10</strong>
                    <br />
                    {marks>=5 ? 'Passed' : 'Failed'}
                </div>
            )}
        </div>
    )
}
export default ReportCard
