import './Github.css';
import gitIcon from '../../assets/github-icon.svg';

export function Github() {
    return (
        <a href='https://github.com/pablopscheidt/timeworked' target='_blank' className='gh-button'>
            <img src={gitIcon} alt="Github" width={32} height={32} />
        </a>
    )
  }