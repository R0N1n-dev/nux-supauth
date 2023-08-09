<template>
    <div>
        <i-input type="text" v-model="email" placeholder="email" />
        <i-input type="text" v-model="password" placeholder="password" />
        <i-button @click="signUp">Signup</i-button>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const email = ref('')
const password = ref(null)
const errorMsg = ref(null)
async function signUp() {
    try {
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value
        })
        if (error) throw error
    } catch (error) {
        errorMsg.value = error.message
    }

}
</script>
