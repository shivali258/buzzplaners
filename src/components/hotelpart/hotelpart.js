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
      link: '',
      keys: [],
      loans: '',
      data: '123'
    }
  },
  methods: {
    getURL(fileName){
      var storage = firebase.storage();
      var pathReference = storage.ref('images/' + fileName +'.jpg');
    
     

      pathReference.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        
        
      });
    },
    getData(){
      window.result = "test"
      var docRef = db.collection('Hotels').doc("Hotels");
    docRef.get()
    .then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data())
          window.result = doc.data()
          document.cookie = "data=" + JSON.stringify(doc.data())
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  
  return window.result
},
getCookie(name) {
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length == 2) return parts.pop().split(";").shift();
}
  },
  created: function () {
  //  this.getURL("mountains")
 // Get the download URL
 console.log("1")
 console.log(this.getData())
 this.data = JSON.parse(this.getCookie("data"))
    
 var s = this.data[0]
 console.log(s)
 for(var k in s) this.keys.push(k);

  }
})

