<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project</span>
            <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Vue</span>
                <span ckl>Todo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-btn flat slot="activator" color="grey">
                    <v-icon>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{link.text}}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn flat color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="indigo">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/40104076_2136247516616966_2264178171425325056_n.jpg?_nc_cat=106&_nc_ht=scontent.fpat1-1.fna&oh=17c2383d441a59b23613cf409ebd2162&oe=5CBD0398">
                    </v-avatar>
                    <p class="white--text subheading mt-1 px-3">Tanweer</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"></Popup>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
import Popup from './Popup';
export default {
    components: { Popup },
    data() {
        return {
            drawer: false,
            links: [
                {icon: "dashboard", text: "Dashboard", route: "/"},
                {icon: "folder", text: "My projects", route: "/projects"},
                {icon: "person", text: "Team", route: "/team"}
            ],
            snackbar: false
        }
    }
}
</script>
