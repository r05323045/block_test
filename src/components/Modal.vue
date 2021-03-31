<template>
  <div class="my-modal">
    <div class="background"></div>
    <div class="side-nav">
      <div class="close" @click="closeModal">&#x2715;</div>
      <div class="nav">
        <div class="nav-item" @click="$router.push('/').catch(()=>{})">About</div>
        <div class="nav-item">Website</div>
        <div class="nav-item" @click="$router.push('/branding').catch(()=>{})">Branding</div>
      </div>
      <div class="brand">
        <span class="brand-text">B</span>
      </div>
      <div class="footer">
        <div class="wrapper">
          <div class="info">
            <p>
              T. 02-2885-8586<br/>
              E. info@blockstudio.tw<br/>
              3F. No.2, Ln. 80, Sec. 4, Chengde Rd, Shilin Dist., Taipei City 111, Taiwan
            </p>
          </div>
          <div class="icon-group">
            <img class="icon" src="../assets/facebook.png">
            <img class="icon" src="../assets/instagram.png">
            <img class="icon" src="../assets/youtube.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped lang="scss">
.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1050;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  .background {
    flex: 1;
    height: 100%;
    background: #ffffff;
    opacity: 50%;
  }
  .side-nav {
    opacity: 200;
    width: 400px;
    height: 100%;
    background: #2c2c2c;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    .close {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      padding: 40px;
      color: #ffffff;
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 212px;
      background: #000000;
      padding: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .wrapper {
        .info {
          font-size: 14px;
          color: #ffffff;
          text-align: left;
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .icon-group {
          display: flex;
          justify-content: flex-start;
          .icon {
            cursor: pointer;
            margin-right: 32px;
            width: 16px;
            height: 16px;
          }
        }
      }
    }
    .nav {
      padding: 16px;
      flex: 0.33;
      display: flex;
      flex-direction: column;
      margin-bottom: 100px;
      .nav-item {
        cursor: pointer;
        margin: 24px;
        text-align: center;
        color:#ffffff;
        font-size: 24px;
        font-weight: 500;
        &:hover {
          background: #ffffff;
          color: #2c2c2c;
        }
      }
    }
    .brand {
      cursor: default;
      margin: 0 20px 80px 0;
      flex: 0.67;
      .brand-text {
        border-top: 20px #202020 solid;
        line-height: 360px;
        color: #202020;
        font-weight: 800;
        font-size: 300px;
      }
    }
  }
}
</style>
