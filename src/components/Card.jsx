import ScoreCircle from "./ScoreCircle"

const Card = () => {
  return (
    <div className='lg:row-span-4 flex flex-col gap-4 bg-gradient-to-b from-cardGradient1 to-cardGradient2 to-70% text-pureWhite text-center rounded-b-3xl lg:rounded-[2rem] p-6 lg:p-10'>
      <h1 className='font-bold text-base lg:text-xl lg:mb-4 text-lavender'>Your Result</h1>
      <ScoreCircle />
      <h2 className='font-bold text-[2rem]'>Great</h2>
      <p className='font-bold text-lg text-lavender text-opacity-80 px-6 lg:px-4 mb-2'>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}

export default Card