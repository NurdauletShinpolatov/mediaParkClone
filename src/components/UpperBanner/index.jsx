import Image from 'next/image';
import cls from './UpperBanner.module.scss';
import bannerImg from '@/assets/images/UpperBanner.png';


export default function UpperBanner() {
  return(
    <div className={cls.upperBanner}>
      <Image src={bannerImg} alt='discount' className={cls.img} />
    </div>
  )
}