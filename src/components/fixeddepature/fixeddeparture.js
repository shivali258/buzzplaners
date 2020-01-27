/* eslint-disable no-undef */
/* eslint-disable */
import Vue from 'vue';
import template from './fixeddeparture.html'
import styles from './fixeddeparture.less'
import admin from '../admin/admin'
import {db} from '../admin/firebaseConfig'
import * as firebase from 'firebase'

export default Vue.extend({
  template: template,
  components: {
    admin
  },
  data: function () {
    return {
      keys: [],
      loans: '',
      data: '123'
    }
  },
  methods: {
    getData(){
            window.result = "test"
            var docRef = db.collection('cities').doc("Employees");
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
<<<<<<< HEAD
  created: function () {
    console.log("1")
    this.getData()
=======
>>>>>>> 185429e8de550ec96d598dbdbe4f75a3d5ab472d


  created: function () {   
    
    
    this.getData()

    this.data = JSON.parse(this.getCookie("data"))
    
    var s = this.data[0]
    console.log(s)
    for(var k in s) this.keys.push(k);
  }
});
