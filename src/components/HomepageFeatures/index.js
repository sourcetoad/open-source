import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Laravel/PHP Packages',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          We've crafted a suite of robust helper packages for our Laravel/PHP projects, simplifying everything from SOAP clients to validation wrappers, all designed to elevate your development experience.
      </>
    ),
  },
  {
    title: 'GitHub Actions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          GitHub is at the core of our deployment strategies. We've tailored solutions using AWS CodeDeploy and ECS, filling gaps that existing tools left behind, ensuring a seamless deployment process.
      </>
    ),
  },
  {
    title: 'React Native',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Our expertise in React Native is reflected in the apps we've developed for our clients. Along the way, we've revived and released open-source projects to contribute back to the community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
