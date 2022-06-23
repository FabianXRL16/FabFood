<template>
  <footer class="containerFooter">
    <div class="containerInfo">
      <div class="aboutUs">
        <img
          class="img"
          title="FabFood"
          src="../../assets/img/logo.svg"
          alt="FabFood"
        />
        <h4>About Us</h4>
        <span>We offer premium food with home delivery</span>
        <h5>Contact Us</h5>
        <div class="infoContact">
          <i class="icon fas fa-phone-alt"></i><span>+(900) 123 - 456</span>
        </div>
        <div class="infoContact">
          <i class="icon far fa-envelope"></i><span>order@fabfood.com</span>
        </div>
      </div>
      <form class="contact">
        <p class="messageContact">
          <strong> If you liked the page,</strong> contact me to do projects
          together
          <button
            class="btn btnShowForm"
            type="button"
            @click="showForm = !showForm"
          >
            <i
              :class="showForm ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
            ></i>
          </button>
        </p>
        <textarea
          :class="showForm ? 'textarea btn': 'noShow'"
          name="message"
          id=""
          placeholder="Hey cheer up!!!"
        >
        </textarea>
        <div :class="showForm ? 'actions': 'noShow'">
          <button
            v-for="button in buttons"
            :key="button.id"
            :type="button.type"
            class="btn btnContact"
            :class="button.styles"
          >
            <i class="iconBtn" :class="button.icon"></i>{{ button.title }}
          </button>
        </div>
      </form>
    </div>
    <ul>
      <li v-for="socialN in socialNetworks" :key="socialN.id">
        <a :href="socialN.link" target="_blank">
          <i :class="socialN.icon"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "containerFooter",
  data() {
    return {
      showForm: true,
      socialNetworks: [
        {
          id: 0,
          name: "Instagram",
          link: "https://www.instagram.com/fabian.xrl16/",
          icon: "fab fa-instagram",
        },
        {
          id: 1,
          name: "Twitter",
          link: "https://twitter.com/FabianXRL16",
          icon: "fab fa-twitter",
        },
        {
          id: 2,
          name: "Github",
          link: "https://github.com/FabianXRL16",
          icon: "fab fa-github",
        },
      ],
      buttons: [
        {
          id: 0,
          title: "Cancel",
          styles: "btnCancel",
          icon: "fas fa-times",
          action: "",
          type: "reset"
        },
        {
          id: 1,
          title: "Send",
          styles: "btnSend",
          icon: "fas fa-paper-plane",
          action: "",
          type: "button"
        },
      ],
    };
  },
};
</script>

<style scoped>
.containerFooter {
  background-color: var(--black);
  padding: 10px var(--p) 0;
  display: grid;
  grid-template-rows: repeat(2, auto);
}
.containerInfo {
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
}
.img {
  height: 60px;
}
h4,
h5 {
  margin-bottom: 0;
  color: var(--bg-primary);
}
.infoContact {
  display: flex;
  align-items: center;
  gap: 10px;
}
span {
  color: var(--gray-ligth);
  font-size: 12px;
}
.icon {
  font-size: 12px;
  color: var(--bg-primary);
}
.contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-end;
}
.messageContact {
  margin: 0;
  width: 100%;
  font-size: 15px;
  text-align: right;
  color: var(--gray-ligth);
}
.messageContact strong {
  color: var(--white);
}
.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}
.actions button {
  padding: 8px 0;
  border-radius: 5px;
  transform: scale(1);
  transition: 0.3s;
}
.actions button:hover {
  transform: scale(0.9);
  transition: 0.3s;
}
.textarea {
  border-radius: 5px;
  padding: 10px;
  background-color: var(--black-ligth);
  width: 100%;
  height: 90px;
  color: var(--gray-ligth);
  font-size: 16px;
  text-align: right;
  box-sizing: border-box;
  resize: none;
}
.btnContact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 16px;
  color: var(--white);
  font-weight: 600;
}
.iconBtn {
  color: var(--white);
  font-size: 20px;
}
.btnCancel {
  background-color: var(--bg-red);
}
.btnSend {
  background-color: var(--bg-primary);
}
ul {
  border-top: 1px solid var(--white);
  padding: 20px 0 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
ul li {
  list-style: none;
  background-color: var(--bg-primary);
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: grid;
  place-content: center;
}
ul li a {
  color: var(--white);
}
.btnShowForm {
  display: none;
}
@media (max-width: 840px) {
    .noShow{
        display: none;
    }
  .btnShowForm {
    display: inline-block;
    background-color: transparent;
    color: var(--bg-primary);
    font-size: 16px;
  }
  .containerInfo {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    width: 100%;
    padding-top: 35px;
  }
  .aboutUs {
    display: flex;
    flex-direction: column;
  }
  .textarea,
  .messageContact,
  h4,
  h5 {
    text-align: center;
  }
  .infoContact {
    justify-content: center;
  }
  h5 {
    margin-bottom: 5px;
  }
}
@media (max-width: 820px) {
  .containerFooter {
    padding: 0 var(--p-mobile);
  }
}
</style>
