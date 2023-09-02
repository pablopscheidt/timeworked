import './App.css'
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';
import { Menu } from './components/Menu';
import { Subtitle } from './components/Subtitle';
import { Background } from './components/Background/Background';
import { Github } from './components/Github/Github';

function App() {
  function teste(){
    console.log('teste');
  }

  return (
    <div className='bg-zinc-950 w-screen h-screen flex justify-center items-center'>
      <Background/>
      <div className='bg-violet-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500 p-16 rounded-lg text-zinc-50 flex flex-col gap-10 z-10'>
        <div className='flex items-center justify-between gap-10'>
          <Github />
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
          <Checkbox IdCheckbox='saidaAuto' labelCheckbox='Preencher saída automaticamente' />
        </div>
      </div>
    </div>
  )
}

export default App
