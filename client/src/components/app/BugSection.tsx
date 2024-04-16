function BugSection({ bugs }: { bugs: string[] }) {
    return (
        <div className='mt-10  max-w-2xl px-3 py-2 rounded-lg'>
            {bugs && bugs?.length > 0 ? (
                <div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Bugs!</strong>
                    <ul>
                        {bugs?.map((bugs, index) => (
                            <li key={index}>&#9989;{bugs}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='bg-yellow-100 border-4 border-yellow-400 text-yellow-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>No Bugs!</strong>
                </div>
            )}
        </div>
    )
}

export default BugSection