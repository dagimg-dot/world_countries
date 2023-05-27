import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { apolloClient } from './apollo'

import { DefaultApolloClient } from '@vue/apollo-composable'

createApp(App)
.provide(DefaultApolloClient, apolloClient)
.mount('#app')
