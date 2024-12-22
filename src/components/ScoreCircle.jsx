import data from '../data.json';

const ScoreCircle = () => {
  const scoreMean = (data) => {
    let scoreSum = 0;
    for(let i = 0; i < data.length; i++){
      scoreSum += data[i].score;
    }
    scoreSum = Math.floor(scoreSum / data.length);
    return scoreSum;
  }

  return (
    <div className='flex flex-col justify-center bg-gradient-to-b from-circleGradient1 to-circleGradient2 rounded-full size-28 lg:size-48 mx-auto'>
        <h1 className="font-extrabold text-[2.75rem] lg:text-7xl leading-normal">{scoreMean(data)}</h1>
        <p className='font-bold text-sm lg:text-lg lg:mt-1 text-lavender text-opacity-50'>of 100</p>
    </div>
  )
}

export default ScoreCircle