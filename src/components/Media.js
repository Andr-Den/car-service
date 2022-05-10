import vk from '../images/VK.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';

const socialMedia = [
  {
    src: vk,
    alt: 'логотип вконтакте',
    link: 'https://vk.com'
  },
  {
    src: instagram,
    alt: 'логотип instagram',
    link: 'https://instagram.com'
  },
  {
    src: twitter,
    alt: 'логотип twitter',
    link: 'https://twitter.com'
  },
  {
    src: youtube,
    alt: 'логотип youtube',
    link: 'https://youtube.com'
  }
];

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
    <div className="flex justify-between items-center border-b border-separator_primary pb-10 mt-[60px]">
      <div className="flex space-x-2.5">
        {socialMedia.map(({ src, alt, link }) => (
          <a href={link} target="_blank" rel="noreferrer" className="border rounded-full w-[60px] h-[60px] border-white flex justify-center items-center hover:bg-white">
            <img className="w-6 h-6" src={src} alt={alt} key={alt} />
          </a>
        ))}
      </div>
      <div className="flex justify-between w-[880px]">
        {addresses.map(({name, address}) => (
          <div className="flex flex-col w-[420px]">
            <p className="text-text3 tracking-[0.02em] font-bold">{name}</p>
            <p className="text-secondary w-72 text-sm">{address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media;
