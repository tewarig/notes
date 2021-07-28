import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Wide list',
    Svg: require('../../static/img/list.svg').default,
    description: (
      <>
        Get each and every meterial related to every topic in one place . no mode distraction
      </>
    ),
  },
  {
    title: 'Browse most common questions',
    Svg: require('../../static/img/myanswer.svg').default,
    description: (
      <>
         Well in a hurry , just have a look to most asked questions.
      </>
    ),
  },
  {
    title: 'Add your own',
    Svg: require('../../static/img/share.svg').default,
    description: (
      <>
        Well , why not ? the more resources and data we have more good it would be
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
