import ReactSpeedometer from "react-d3-speedometer"
function ReportCard({ marks }: { marks: number }) {
    return (
        <div className='mt-10  px-3 py-2 rounded-lg bg-slate-200 border-2 border-teal-300'>
            <span className="text-center">Your Result</span>
            <ReactSpeedometer
                value={marks || 0}
                maxValue={10}
                currentValueText={`⌛`}
            />
        </div>
    )
}
export default ReportCard
