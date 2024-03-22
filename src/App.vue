<template>
  <div class="header">
    <img src="@/assets/Scissor.svg" alt="Scissor" class="scissor" />
    <router-link to="/my-urls">My URLs</router-link>
    <router-link to="/features">Features</router-link>
    <router-link to="/pricing">Pricing</router-link>
    <router-link to="/analytics">Analytics</router-link>
    <router-link to="/faqs">FAQs</router-link>
    <router-link to="/login" class="login"><h2>Login</h2></router-link>
    <router-link to="/try-for-free" class="try-for-free">
      Try for Free</router-link
    >
  </div>
</template>

<style scoped>
.header {
  background-color: #333;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.header a {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.header a:hover {
  text-decoration: underline;
}
.login h2 {
  color: #007bff;
}

.try-for-free {
  background-color: #ff5733;
  padding: 8px 16px;
  border-radius: 5px;
}
.scissor {
  width: 100px; /* Adjust width and height as needed */
  height: 50px;
}
</style>
