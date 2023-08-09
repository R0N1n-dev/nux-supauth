<template>
    <div>
        <h2>Hello</h2>
        <i-button>Hello</i-button>
        <div>{{ user }}</div>
        <i-button @click="logout"></i-button>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})
//const user = useSupabaseUser()
const client = useSupabaseClient()
const user = client.auth.getUser()
const router = useRouter()
const errorMsg = ref(null)

async function logout() {
    try {
        const { error } = await client.auth.signOut()
        if (error) throw error
        router.push('/login')
    } catch (error) {
        errorMsg.value = error.message
    }
}
</script>



<style scoped></style>