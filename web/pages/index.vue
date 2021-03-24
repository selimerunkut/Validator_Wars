<template>
  <div class="container">
    <div class="main-content__notuser" v-if="userAddress == null">
        <el-alert
          title="cannot connetct Metamask"
          type="error"
          description="cannot connetct Metamask"
          show-icon
          :closable="false"
        >
        </el-alert>
  </div>
    <div class="main-content" v-if="userAddress != null">
      <div class="about-account">
          <h4>account</h4>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
    </div>
  </div>
     <div class="main-content__notuser" v-if="keplr_accounts == null">
        <el-alert
          title="cannot connetct Metamask"
          type="error"
          description="cannot connetct Metamask"
          show-icon
          :closable="false"
        >
        </el-alert>
  </div>
    <div class="main-content" v-if="keplr_accounts != null">
      <div class="about-account">
          <h4>account</h4>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
    </div>
  </div>
    <div>
      <logo />
      <h1 class="title">
        web
      </h1>
      <h2 class="subtitle">
        My finest Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  data(){
    return{
    userAddress: null,
    keplrAddress: null
    };
  },


async mounted(){
let acocunts = await this.$web3.eth.getAccount();
this.userAddress = acocunts[0];

let keplr_accounts = await this.$acocunt;
this.keplrAddress = keplr_accounts[0].address;
},

}


</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
