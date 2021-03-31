<template>
  <footer class="footer">
    <div class="row">
      <a class="brand" @click="$router.push('/').catch(()=>{})">B</a>
      <section>
        <div class="nav">
          <div class="nav-item" @click="$router.push('/').catch(()=>{})">About</div>
          <div class="nav-item">Website</div>
          <div class="nav-item" @click="$router.push('/branding').catch(()=>{})">Branding</div>
        </div>
        <div class="info">
          <p>
            T. 02-2885-8586<br/>
            E. info@blockstudio.tw<br/>
            3F. No.2, Ln. 80, Sec. 4, Chengde Rd, Shilin Dist., Taipei City 111, Taiwan
          </p>
        </div>
      </section>
      <div class="icon-group">
        <img class="icon" src="../assets/facebook.png">
        <img class="icon" src="../assets/instagram.png">
        <img class="icon" src="../assets/youtube.png">
      </div>
    </div>
    <hr>
    <div class="copyright">
      Block Studio©2018 Copyright. All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 245px;
  width: 100%;
  background: #000000;
  .row {
    margin: 0;
    padding: 48px 120px 12px;
    align-items: flex-start;
    justify-content: flex-start;
    .brand {
      cursor: pointer;
      margin-right: 60px;
      color: #ffffff;
      font-weight: 800;
      font-size: 30px;
      -webkit-text-decoration-line: overline;
      text-decoration-line: overline;
    }
    .nav {
      margin: 12px 0;
      display: flex;
      width: 480px;
      .nav-item {
        cursor: pointer;
        text-align: left;
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        flex: 1;
      }
    }
    .info {
      color: #ffffff;
      text-align: left;
      line-height: 1.5;
      font-size: 14px;
    }
    .icon-group {
      margin-left: auto;
      padding: 24px 0;
      display: flex;
      justify-content: flex-start;
      .icon {
        cursor: pointer;
        margin: 0 24px;
        width: 20px;
        height: 20px;
      }
    }
  }
  hr {
    background: #ffffff;
    margin: 0;
  }
  .copyright {
    color: #ffffff;
    font-size: 14px;
    margin: 12px 0;
  }
}
</style>
