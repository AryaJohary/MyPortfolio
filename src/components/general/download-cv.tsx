'use client';

import Button from '@/components/general/button';


const cvpath = '../../../public/files/Arya_Kumar_Johary.pdf'
const gdrivecvpath = 'https://drive.google.com/file/d/1lhychQshFq8HW8XnNdJz4Mt0ul7gGttS/view?usp=sharing'
const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(cvpath, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
