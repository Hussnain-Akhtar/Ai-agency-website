import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';

const Services = () => {

  const servicesData = [
    {
      title: 'Advertising',
      description:
        'We turn bold ideas into powerful digital solutions that connect, engage and grow your business.',
      icon: assets.ads_icon,
    },
    {
      title: 'Content Marketing',
      description:
        'We help you execute your plan and deliver measurable results.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content Writing',
      description:
        'We help you create marketing strategies that drive results.',
      icon: assets.content_icon,
    },
    {
      title: 'Social Media',
      description:
        'We help you build a strong social media presence and engage with your audience.',
      icon: assets.social_icon,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-72 -left-52 -z-10 dark:hidden"
      />

      <div className="flex flex-col items-center gap-7">
        <Title
          title="How can we help?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              Services={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;