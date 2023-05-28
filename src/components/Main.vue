<script setup>
import { onMounted } from 'vue'
import CountryCard from '../components/CountryCard.vue'
import { apolloClient } from '../apollo'
import gql from 'graphql-tag'
import { ref } from 'vue'
import router from '../router/router'

const fetchCountries = async () => {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query getCountries {
          countries {
            name
            code
            emoji
          }
        }
      `,
    })

    return data.countries
  } catch (error) {
    console.error('Error while fetching countries:', error)
    throw error
  }
}

const countries = ref([])
const clickedCountry = ref('')

const handleClick = () => {
  router.push({ name: 'details', params: { id: clickedCountry.value } })
}

const isLoading = ref(true)

onMounted(async () => {
  try {
    countries.value = await fetchCountries()
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="main bg-[#F0E9E9] flex">
    <div class="flex flex-wrap">
      <div v-if="!isLoading" v-for="country in countries" :key="country.name" class="w-1/3 flex justify-center">
        <CountryCard :name="country.name" :emoji="country.emoji" @click="clickedCountry = country.code; handleClick()" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

