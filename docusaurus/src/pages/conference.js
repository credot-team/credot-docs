import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return <Layout title={`線上會議 | ${siteConfig.title}`}></Layout>;
};
