<template>
  <div>
    <v-form
      method="post"
      @submit.prevent.native="login(username, password)"
    >
      <v-text-field
        v-model="username"
        dark
        label="Имя пользователя"
        required
      />
      <v-text-field
        v-model="password"
        dark
        label="Пароль"
        type="password"
        required
        class="mt15"
      />

      <BaseFormButton
        btn-text="Войти"
        margin-top
        @click.native="login(username, password)"
      />
      <p
        v-if="error"
        class="white--text mt15"
      >
        {{ error }}
      </p>
    </v-form>
  </div>
</template>

<script>
import BaseFormButton from '@/components/atoms/buttons/BaseFormButton'
export default {
  name: 'LoginMenu',
  components: {
    BaseFormButton
  },
  props: {
    error: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login (username, password) {
      this.$emit('login', username, password)
    }
  }
}
</script>

<style scoped>
.mt15 {
  margin-top: 15px;
}
</style>
