import YouTube from './shared/YouTube';
import VK from './shared/VK';
import Twitter from './shared/Twitter';
import Instagram from './shared/Instagram';

const addresses = [
  {
    name: 'АДРЕС АВТОЦЕНТРА:',
    address: 'Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999) 123-45-67',
  },
  {
    name: 'ЦЕНТР КУЗОВНОГО РЕМОНТА:',
    address: 'Екатеринбург, ул. Московский тракт 7 км, 2 +7 (999) 123-45-67',
  },
]

function Media() {
  return (
    <div className="flex justify-between items-center border-b border-separator_primary pb-10 mt-[60px] lg:flex-col">
      <div className="flex space-x-2.5 lg:self-start">
        <a 
          href="https://vk.com"
          target="_blank" 
          rel="noreferrer"
          className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-white"
        >
          <VK className="stroke-white group-hover:stroke-primary"/>
        </a>
        <a 
          href="https://instagram.com'" 
          target="_blank" 
          rel="noreferrer"
          className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-white"
        >
          <Instagram className="stroke-white group-hover:stroke-primary"/>
        </a>
        <a 
          href="https://twitter.com"
          target="_blank" 
          rel="noreferrer"
          className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-white"
        >
          <Twitter className="stroke-white group-hover:stroke-primary"/>
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-white"
        >
          <YouTube className="stroke-white group-hover:stroke-primary"/>
        </a>
      </div>
      <div className="flex justify-between w-[880px] lg:justify-start  lg:w-[640px] lg:mt-5 xs:justify-around  xs:w-[345px] space-x-10">
        {addresses.map(({name, address}) => (
          <div className="flex flex-col w-[420px]">
            <p className="text-text3 tracking-[0.02em] font-bold">{name}</p>
            <p className="text-sm text-secondary w-72 xs:w-[170px]">{address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media;
