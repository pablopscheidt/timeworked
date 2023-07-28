import './App.css'
import { Input } from './components/Input';
import { Menu } from './components/Menu';
import { Subtitle } from './components/Subtitle';

function App() {
  function teste(){
    console.log('teste');
  }

  return (
    <div className='bg-gray-950 w-screen h-screen flex justify-center items-center'>
      <div className='bg-gray-800 p-8 rounded-lg text-gray-50 flex flex-col gap-10'>
        <div className='flex items-center justify-between gap-10'>
          <a href='https://github.com/pablopscheidt/timeworked' target='_blank' className='bg-gradient-hovered p-1 flex justify-center items-center rounded'>
            <img src="src/assets/github-icon.svg" alt="Github" width={32} height={32} />
          </a>
          <h1>
            <img src="/logo.svg" alt="TIMEWORKED" width={340} height={40} />
          </h1>
          <Menu onClick={teste} />
        </div>
        <div className='flex flex-col gap-4'>
          <Subtitle textSubtitle='Digite seus horários:' />
          <div className='flex justify-between'>
            <Input labelInput='Entrada' />
            <Input labelInput='Almoço ida' />
            <Input labelInput='Almoço volta' />
            <Input labelInput='Saída' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
