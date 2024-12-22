import data from '../data.json';
import SummaryCard from "./SummaryCard"

const Summary = () => {
  const bgs = ['bg-redDiv', 'bg-yellowDiv', 'bg-greenDiv', 'bg-blueDiv'];
  const texts = ['text-redDiv', 'text-yellowDiv', 'text-greenDiv', 'text-blueDiv'];
  const iconClasses = ['redIcon', 'yellowIcon', 'greenIcon', 'blueIcon'];
   
  return (
    <div className='lg:row-span-3 flex flex-col gap-4 px-6 lg:py-4 my-2'>
        <h1 className='font-bold lg:text-lg mb-2'>Summary</h1>

        {data.map((element, index) => (
          <SummaryCard key={element[index]} idx={index} bg={bgs[index]} text={texts[index]} icon={iconClasses[index]} />
        ))}
    </div>
  )
}

export default Summary