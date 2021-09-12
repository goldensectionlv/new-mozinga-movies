<template>
  <div class="registerMenu">
    <v-form
      ref="registerForm"
      method="post"
      lazy-validation
      class="registerForm"
    >
      <v-text-field
        v-model.trim="username"
        style="width: 100%"
        dark
        label="Имя пользователя"
        :rules="nameRules"
        required
      />
      <v-text-field
        v-model.trim="email"
        style="width: 100%"
        dark
        :rules="emailRules"
        label="Email"
        required
      />
      <v-text-field
        v-model="password"
        style="width: 100%"
        dark
        :rules="passRules"
        label="Пароль"
        type="password"
        required
      />
      <v-text-field
        v-model="password2"
        style="width: 100%"
        dark
        :rules="passRules"
        type="password"
        label="Подтверждение пароля"
        required
      />

      <BaseFormButton
        btn-text="Зарегаться"
        margin-top
        @click.prevent.native="register(username, email, password, password2)"
      />

      <p
        v-if="password2 && password2 !== password"
        class="white--text"
      >
        Пароли не совпадают
      </p>
      <div class="white--text">
        {{ error }}
      </div>
    </v-form>
  </div>
</template>

<script>
import apiRequests from '@/store/apiRequests'
import BaseFormButton from '@/components/atoms/buttons/BaseFormButton'
import { mapActions } from 'vuex'

export default {
  name: 'RegisterMenu',
  components: {
    BaseFormButton
  },
  data () {
    return {
      emailRules: [
        v => !!v || 'Обязательное поле',
        v => /.+@.+\..+/.test(v) || 'Некорректный e-mail'
      ],
      nameRules: [
        v => !!v || 'Обязательное поле',
        v => (v && v.length >= 3) || 'Минимум 3 буквы'
      ],
      passRules: [
        v => !!v || 'Обязательное поле',
        v => (v && v.length >= 4) || 'Минимум 4 символа'
      ],
      username: '',
      email: '',
      password: '',
      password2: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(['createdHome', 'setUsername']),

    async register (username, email, password, password2) {
      await apiRequests.register(username, email, password, password2).then((response) => {
        if (response.response.data?.username) {
          this.error = response.response.data?.username[0]
        } else {
          localStorage.setItem('token', response.response.data.token)
          localStorage.setItem('username', username)
          this.createdHome().then(() => apiRequests.deleteAnonymous())
          this.setUsername(username)

          this.error = ''
          this.reset()
          this.$emit('successRegister')
        }
      }).catch((error) => {
        this.error = 'Пользователь с таким логином или email уже существует'
        console.log(error)
      })
    },
    reset () {
      this.$refs.registerForm.reset()
      this.username = ''
      this.email = ''
      this.password = ''
      this.password2 = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.registerMenu {
  width: 100%;
}

.registerForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
