<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import { apolloClient } from '../apollo'
import gql from 'graphql-tag'

import Header from '../components/Header.vue';

const route = useRoute();
const code = route.params.id;

const fetchCountry = async () => {
    try {
        const { data } = await apolloClient.query({
            query: gql`
                query getCountry($code: ID!) {
                    country(code: $code) {
                        name
                        native
                        emoji
                        currency
                        capital
                        phone
                        languages {
                            code
                            name
                        }
                    }
                }
            `,
            variables: {
                code: code
            }
        })

        return data.country
    } catch (error) {
        console.error('Error while fetching country:', error)
        throw error
    }
}

const country = ref([])
const isLoading = ref(true)

onMounted(async () => {
    try {
        country.value = await fetchCountry()
    } finally {
        isLoading.value = false
    }
})


</script>

<template>
    <Header :title="country.name" />
    <div v-if="!isLoading" class="flex flex-col items-center">
        <div class="flex flex-col items-center mt-10 space-y-2">
            <div class="text-9xl font-bold">{{ country.emoji }}</div>
            <div class="text-2xl">{{ country.native }}</div>
            <div class="text-2xl">{{ country.capital }}</div>
        </div>
        <div class="flex flex-col items-center mt-10">
            <div class="text-4xl">{{ country.phone }}</div>
            <div class="text-2xl">{{ country.currency }}</div>
        </div>
        <div class="flex flex-col items-center mt-10">
            <div class="text-4xl">Languages</div>
            <div class="text-2xl">
                <ul>
                    <li v-for="language in country.languages" :key="language.code">
                        {{ language.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>