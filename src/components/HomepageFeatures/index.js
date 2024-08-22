import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Laravel Packages',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We've released plenty of helper packages used in our Laravel projects - ranging from SOAP clients to
          simple wrappers around validation.
      </>
    ),
  },
  {
    title: 'GitHub Actions',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Deploying software via GitHub is common for us - we've built solutions for AWS CodeDeploy and ECS where
          we found options on the market didn't fit our usecase.
      </>
    ),
  },
  {
    title: 'React Native',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We've built a few React Native apps for our clients - and we've released or forked some abandoned projects
          to help us along the way.
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
