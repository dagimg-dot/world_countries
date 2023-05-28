import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { apolloClient } from './apollo'
import router from './router/router'
import { DefaultApolloClient } from '@vue/apollo-composable'

const app = createApp(App)

app.provide(DefaultApolloClient, apolloClient)
app.use(router)
app.mount('#app')
