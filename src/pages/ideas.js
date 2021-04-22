import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Graph from 'react-graph-vis';

export default () => {
  const { siteConfig } = useDocusaurusContext();

  const graph = {
    nodes: [
      { id: '新產品', label: '新產品', color: '#F87171' },

      { id: '社群', label: '社群', color: '#34D399' },
      { id: '電商', label: '電商', color: '#34D399' },
      { id: '遊戲', label: '遊戲', color: '#34D399' },
      { id: '課程平台', label: '課程平台', color: '#34D399' },
      { id: '徵才平台', label: '徵才平台', color: '#34D399' },
      { id: 'ERP', label: 'ERP', color: '#34D399' },
      { id: '智慧家電', label: '智慧家電', color: '#34D399' },

      { id: '訊息', label: '訊息', color: '#FCD34D' },
      { id: '地圖', label: '地圖', color: '#FCD34D' },
      { id: '3D', label: '3D', color: '#FCD34D' },
      { id: 'AI', label: 'AI', color: '#FCD34D' },
      { id: 'AR', label: 'AR', color: '#FCD34D' },
      { id: 'VR', label: 'VR', color: '#FCD34D' },
      { id: 'IoT', label: 'IoT', color: '#FCD34D' },

      { id: 'Facebook', label: 'Facebook', color: '#60A5FA' },
      { id: 'Instagram', label: 'Instagram', color: '#60A5FA' },
      { id: 'DCard', label: 'DCard', color: '#60A5FA' },
    ],
    edges: [
      //
      { from: '新產品', to: '社群' },
      { from: '新產品', to: '電商' },
      { from: '新產品', to: '遊戲' },
      { from: '新產品', to: '課程平台' },
      { from: '新產品', to: '徵才平台' },
      { from: '新產品', to: 'ERP' },
      { from: '新產品', to: '智慧家電' },
      //
      { from: '社群', to: 'Facebook' },
      { from: '電商', to: 'Facebook' },
      { from: '社群', to: 'Instagram' },
      { from: '電商', to: 'Instagram' },
      { from: '社群', to: 'DCard' },
      //
      { from: '訊息', to: 'Facebook' },
      { from: '地圖', to: 'Facebook' },
      { from: '訊息', to: 'Instagram' },
      { from: '地圖', to: 'Instagram' },
      { from: '訊息', to: 'DCard' },
    ],
  };

  const options = {
    autoResize: true,
    height: '900px',
    nodes: {
      shape: 'dot',
      size: 8,
      font: {
        color: 'gray',
      },
    },
    edges: {
      color: 'gray',
      length: 150,
      // smooth: true,
    },
  };

  return (
    <Layout
      title={`點子 | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Graph graph={graph} options={options} />
    </Layout>
  );
};
