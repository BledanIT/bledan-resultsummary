import data from '../data.json';

const SummaryCard = ({idx = 0, bg = 'bg-darkGreyBlue', text = 'text-darkGreyBlue', icon = 'redIcon'}) => {

  return (
    <div className={`${bg} bg-opacity-10 ${text} flex justify-between rounded-md px-4 py-4`}>
      <div className='grid grid-cols-[2rem,1fr] w-1/4'>
        <i className={`${icon} text-sm block`}></i>
        <p>{data[idx].category}</p>
      </div>
      <p className=' text-darkGreyBlue text-opacity-100'>{data[idx].score} <span className='text-darkGreyBlue text-opacity-50'>/ 100</span></p>
    </div>
  )
}

export default SummaryCard