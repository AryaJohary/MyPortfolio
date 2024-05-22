import Image from 'next/image';

import { CertificationDetails as CertificationDetailsProps } from '@/lib/types';
import Link from '@/components/navigation/link';
import Card from '@/components/layout/card';

const CertificationDetails = ({
  organisationName,
  organisationAvatar,
  certification,
  issueDate,
  certificatePic,
  url,
}: CertificationDetailsProps) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg mx-auto bg-gray-100 hover:scale-105 duration-300">
      <Link href={url} externalLink>
      <div className="px-4 pt-4 pb-0">
        <Image className="w-full rounded-lg" src={certificatePic} alt={`${certificatePic} pic`} />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src={organisationAvatar}
            alt={`${organisationName} logo`}
          />
          <div className="ml-2 text-sm">
            <p className="text-gray-700">{organisationName}</p>
            <p className="text-gray-500">{issueDate}</p>
          </div>
        </div>
        <div className="mt-4 text-xl font-semi-bold font-sans">
          <p className="text-gray-900">{certification}</p>
        </div>
        </div>
        </Link>
    </Card>
  );
};


export default CertificationDetails;
