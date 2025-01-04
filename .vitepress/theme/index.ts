// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './style.css'
import './tailwind.css';
import globalPlugin from '../../plugins/global';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    console.log('hello app');
		globalPlugin.install(app);
  }
} satisfies Theme

