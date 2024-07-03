'use client';

import Button from '@/components/general/button';


const cvpath = '../../../public/files/AryaJohary.pdf'
const gdrivecvpath = 'https://drive.google.com/file/d/1lhychQshFq8HW8XnNdJz4Mt0ul7gGttS/view?usp=sharing'
const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(gdrivecvpath, '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
