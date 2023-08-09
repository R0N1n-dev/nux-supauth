export default defineNuxtRouteMiddleware((to, from) => {
  let client = useSupabaseClient();
  const user = client.auth.getUser();
  if (!user.value) {
    return navigateTo("/login");
  }
});
