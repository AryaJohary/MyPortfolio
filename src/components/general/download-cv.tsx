'use client';

import Button from '@/components/general/button';


const cvpath = '../../../public/files/Arya_Kumar_Johary.pdf'
const gdrivecvpath = 'https://drive.google.com/file/d/1hyrWafkEuyo2dsdE7k-Zx30IUAn4JWvC/view?usp=sharing'
const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(gdrivecvpath, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
