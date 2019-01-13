<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
              <v-card flat class="text-xs-center ma-3">
                  <v-responsive class="pt-4">
                      <v-avatar size="100" class="grey lighten-2">
                          <img :src="person.avatar">
                      </v-avatar>
                  </v-responsive>
                  <v-card-text>
                      <div class="subheading">{{person.name}}</div>
                      <div class="grey--text">{{person.role}}</div>
                  </v-card-text>
                  <v-card-actions>
                      <v-btn flat color="grey">
                          <v-icon small left>message</v-icon>
                          <span>Message</span>
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                {name: "Tanweer", role: "CEO", avatar:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/40104076_2136247516616966_2264178171425325056_n.jpg?_nc_cat=106&_nc_ht=scontent.fpat1-1.fna&oh=17c2383d441a59b23613cf409ebd2162&oe=5CBD0398"},
                {name: "Danish", role: "COO", avatar:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/28276899_151153065540811_2134197317249203090_n.jpg?_nc_cat=103&_nc_ht=scontent.fpat1-1.fna&oh=532db52834d76c9958d9f0397694749a&oe=5CC78F11"},
                {name: "Zeeshan", role: "CTO", avatar:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/27072895_778526319021816_9215068075921037840_n.jpg?_nc_cat=101&_nc_ht=scontent.fpat1-1.fna&oh=865a9625d38953ab6c9edfc1392cb941&oe=5CC1A57A"},
                {name: "Nazish", role: "Project lead", avatar:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/17309026_1866878626911218_2429991797991084816_n.jpg?_nc_cat=108&_nc_ht=scontent.fpat1-1.fna&oh=4964b8261cec59e0e00e123d5a4290d6&oe=5CC9BDAD"},
                {name: "Saqib", role: "Chief Engineer", avatar:"https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/35489388_1743574239067377_2982753911175118848_n.jpg?_nc_cat=102&_nc_ht=scontent.fpat1-1.fna&oh=b43f94084af673fd8f1ffb7380f478f0&oe=5CBBBC9F"},
            ]
        }
    }
   
}
</script>



