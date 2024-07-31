'use client';

import Button from '@/components/general/button';


const cvpath = '../../../public/files/Arya_Kumar_Johary.pdf'
const gdrivecvpath = 'https://drive.google.com/file/d/1xPu2bz8ADE3SVmStrYf7ZMVHY3s4VZ8p/view?usp=sharing'
const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(gdrivecvpath, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
