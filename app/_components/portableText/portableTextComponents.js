import React from 'react';


// Define your custom components
const components = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} alt={value.alt || ' '} loading="lazy" />,
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      const rel = target ? 'noopener noreferrer' : undefined;
      return (
        <a href={value?.href} target={target} rel={rel} className="underline">
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className='text-[24px] md:text-[32px] font-bold tracking-[0.95px] leading-normal md:leading-8 '>{children}</h1>,
    h2: ({ children }) => <h2 className='text-[18px] md:text-[24px] font-semibold tracking-[0.95px] leading-normal md:leading-5 '>{children}</h2>,
    h3: ({ children }) => <h3 className='text-[14px] md:text-[18px] font-semibold tracking-[0.95px] leading-normal md:leading-8 '>{children}</h3>,
    normal: ({ children }) => <p className='font-medium text-[12px] lg:text-[14px] tracking-[0.95px] leading-normal md:leading-5 '>{children}</p>,
    
    blockquote: ({ children }) => <blockquote className='font-raleway font-medium border-l-4 border-mainOrange pl-2 italic'>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5 mt-2 space-y-1 text-[12px] md:text-[14px]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-5 mt-2 space-y-1 text-[12px] md:text-[14px]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className='text-[12px] md:text-[14px]'>{children}</li>,
    number: ({ children }) => <li className='text-[12px] md:text-[14px]'>{children}</li>,
  },
};

export default components;
