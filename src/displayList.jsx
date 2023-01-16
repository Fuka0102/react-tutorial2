import React from 'react';

const programingLanguages = [
  {
    id: 'react',
    name: 'React',
    initialRelease: '2013/5',
    githubStars: '147,940',
  },
  {
    id: 'vue',
    name: 'Vue.js',
    initialRelease: '2014/2',
    githubStars: '163,165',
  },
  {
    id: 'angular',
    name: 'Angular',
    initialRelease: '2016/9',
    githubStars: '60,571',
  },
];

const DefinitionList = programingLanguages.map((item) => {
  <dl className='definition'>
    <dt className='definition-title'>Initial release</dt>
    <dd className='definition-content'>{item.initialRelease}</dd>
    <dt className='definition-title'>Github stars</dt>
    <dd className='definition-content'>{item.githubStars}</dd>
  </dl>;
});

export const section = programingLanguages.map((item) => {
  <section id={item.id} className='box'>
    <h1 className='title'>{item.name} </h1>
    <DefinitionList />
  </section>;
});
