import Image from 'next/image';

import AryaFullPose from './public/images/arya-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AryaFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Want to know about me? Here we go:
          </Typography>
          <Typography>
            I&apos;m Arya Kumar Johary, a passionate and self-motivated tech enthusiast
            specializing in java development and machine learning. I thrive on
            transforming innovative ideas into reality with robust, scalable,
            and efficient code. My dedication to user experience, clean design, and
            high-performance development is reflected in every project I undertake.
          </Typography>
          <Typography>
            My journey began in 2021 when I started my Bachelor of Technology in
            Computer Science Engineering with a focus on Artificial Intelligence
            and Machine Learning at the University of Engineering and Management,
            Jaipur. Since then, I have continuously honed my skills, tackling new
            challenges and embracing the latest technologies. Now, in my early
            twenties, I'm building sophisticated applications using cutting-edge
            tools like Java, JSP, MySQL, React.js, Node.js, and Unity.
          </Typography>
          <Typography>
            I pride myself on being a progressive thinker, always eager to innovate
            and improve. I enjoy working on projects from inception to completion,
            ensuring every detail is meticulously crafted.
          </Typography>
          <Typography>
            When I&apos;m not immersed in development, you can find me engaging with
            the tech community on platforms like GitHub and LinkedIn, where I share
            my projects and connect with fellow tech enthusiasts. You can connect with me on-
            LinkedIN:{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              aryajohary
            </Link>{' '}
            Github:{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              aryajohary
            </Link>
            .
          </Typography>
          <Typography>A few quick highlights about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
              B.Tech in Computer Science Engineering (AIML)
              </Typography>
              <Typography component="li">Recipient of university scholarship for academic excellence</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Certified in Alteryx Designer Core for Data Analytics</Typography>
              <Typography component="li">Gold medalist in NPTEL&apos;s Joy of Computing using Python</Typography>
            </ul>
          </div>
          <Typography>
            Looking forward to collaborating and creating exceptional digital experiences!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
