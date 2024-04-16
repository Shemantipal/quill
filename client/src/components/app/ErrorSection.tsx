function ErrorSection({ errors }: { errors: string[] }) {
    return (
        <div className='mt-10 max-w-2xl px-3 py-2 rounded-lg'>
            {errors && errors.length > 0 ? (
                <div className='bg-neutral-900  border border-white text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>Error!</strong>
                    <ul>
                        {errors.map((error, index) => (
                            <span key={index}>&#9989;{error}</span>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-mono underline decoration-wavy text-xl'>No Error!</strong>
                </div>
            )}
        </div>
    )
}

export default ErrorSection