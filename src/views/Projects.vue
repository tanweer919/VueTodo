<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panel v-for="project in myProjects" :key="project.id">
        <v-expansion-panel-content>
          <div slot="header">{{project.title}}</div>
            <v-card flat> 
              <v-card-text class="px4 grey--text ">
                <div class="font-weight-bold">due by {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
  
</template>
<script>
import db from '../fb.js';
export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
          return project.person === "Tanweer"
        });
    } 
  },
  created() {
        db.collection('projects').onSnapshot(res => {
            const changes = res.docChanges();
            changes.forEach(change => {
                if(change.type === 'added') {
                    this.projects.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    });
                }
            });
        });
    },
    methods: {
      // changeStatus() {
      //   db.collection('projects').where("id", "==", ).get()
      //   .then(querySnapshot => {
      //     querySnapshot.forEach(doc => {
      //       db.collection("projects").doc(doc.id).update({status: });
      //     })
      //   })
      // }
    }
}
</script>


