import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: string;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Laravel/PHP Packages',
    img: require('@site/static/img/laravel-php-transparent.png').default,
    description: (
      <>
          We've crafted a suite of robust helper packages for our Laravel/PHP projects, simplifying everything from SOAP clients to validation wrappers, all designed to elevate your development experience.
      </>
    ),
  },
  {
    title: 'GitHub Actions',
    img: require('@site/static/img/deployment-transparent.png').default,
    description: (
      <>
          GitHub is at the core of our deployment strategies. We've tailored solutions using AWS CodeDeploy and ECS, filling gaps that existing tools left behind, ensuring a seamless deployment process.
      </>
    ),
  },
  {
    title: 'React Native',
    img: require('@site/static/img/react-native-transparent.png').default,
    description: (
      <>
          Our expertise in React Native is reflected in the apps we've developed for our clients. Along the way, we've revived and released open-source projects to contribute back to the community.
      </>
    ),
  },
];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
