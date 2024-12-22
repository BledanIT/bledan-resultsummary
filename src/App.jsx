import Card from './components/Card.jsx';
import Summary from './components/Summary.jsx';
import ContinueButton from './components/ContinueButton.jsx';
import Attribution from './components/Attribution.jsx';

const App = () => {
  return (
    <div className = 'bg-paleBlue flex flex-col min-h-screen lg:justify-center lg:items-center box-border m-0 font-hanken'>
      <main className = 'bg-pureWhite grid lg:grid-flow-col grid-cols-1 lg:grid-cols-2 grid-rows-[1fr_1fr_1fr] lg:grid-rows-4 gap-4 m-0 lg:m-auto min-h-fit lg:w-[48rem] lg:h-[32rem] lg:rounded-3xl'>
          <Card />
          <Summary />
          <ContinueButton />
      </main>
      <Attribution />
    </div>
  )
}

export default App
