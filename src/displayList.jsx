import React from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id} className='box'>
      <h1 className='title'>{title}</h1>
      {children}
    </section>
  );
}

function DefinitionList({ items }) {
  return (
    <dl className='definition'>
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <dt className='definition-title'>{item.title}</dt>
          <dd className='definition-content'>{item.content}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

export const list = (
  <>
    <Section id='react' title='React'>
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2013/5' },
          { title: 'Github stars', content: '147,940' },
        ]}
      />
    </Section>
    <Section id='vue' title='Vue.js'>
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2014/2' },
          { title: 'Github stars', content: '163,165' },
        ]}
      />
    </Section>
    <Section id='angular' title='Angular'>
      <DefinitionList
        items={[
          { title: 'Initial release', content: '2016/9' },
          { title: 'Github stars', content: '60,571' },
        ]}
      />
    </Section>
  </>
);
