/* eslint-disable no-undef */

import Vue from 'vue';
import template from './hotelpart.html'
import styles from './hotelpart.less'
import admin from '../admin/admin'
import {db} from '../admin/firebaseConfig'
import * as firebase from 'firebase'
export default Vue.extend({
  template: template,
  data: function () {
    return {
      link: ''
    }
  },
  methods: {
    getURL(fileName){
      var storage = firebase.storage();
      var pathReference = storage.ref('images/' + fileName +'.jpg');
    
     

      pathReference.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        
        
      });
    }
  },
  created: function () {
    this.getURL("mountains")
 // Get the download URL
  }
})

