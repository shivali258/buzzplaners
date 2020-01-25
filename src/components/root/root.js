/* eslint-disable no-undef */

import Vue from 'vue';
import template from './root.html'
import styles from './root.less'
import footermain from '../footer/footer'
import headerElement from '../header/header'

export default Vue.extend({
  template: template,
  components: {
    'footermain': footermain,
    'headerElement' : headerElement
  },
  data: function () {
    return {
    }
  },
  methods: {
  },
  created: function () {
  }
});
