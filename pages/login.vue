<template>
    <div>
        <i-input type="text" v-model="email" placeholder="email" />
        <i-input type="text" v-model="password" placeholder="password" />
        <i-button @click="signIn">Sign in</i-button>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const router = useRouter()
const email = ref('')
const password = ref(null)
const errorMsg = ref(null)
async function signIn() {
    try {
        const { data, error } = await client.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })
        if (error) throw error
        router.push('/')
    } catch (error) {
        errorMsg.value = error.message
    }

}
</script>
