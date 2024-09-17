'use client';

import Button from '@/components/general/button';


const cvpath = '../../../public/files/Arya_Kumar_Johary.pdf'
const gdrivecvpath = 'https://drive.google.com/file/d/17-lzXJRs5bNJh5Q8BeCGm6jmPUT64HHG/view?usp=sharing'
const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(gdrivecvpath, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
