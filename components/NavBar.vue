<template>
  <nav
    class="w-full items-center justify-between csm:justify-around h-16 csm:h-auto flex flex-row csm:flex-wrap"
  >
    <div
      class="mx-5 flex h-full csm:py-2  items-center text-bluish clg:ml-10 w-1/4 csm:w-1/2 csm:order-1 csm:mx-0"
    >
      <figure>
        <img
          width="54"
          height="54"
          class="fill-current h-10 w-10 mr-2"
          src="~assets/images/Logo_CNF_Negativo.svg"
          alt="Clínica del Niño y la Familia"
        />
      </figure>
      <span class="font-bold text-xl tracking-tight leading-none text-bluish"
        >Clínica del <br />
        Niño y la Familia</span
      >
    </div>
    <div class="csm:flex items-center csm:order-2 pl-1 justify-between hidden">
      <div class="flex h-auto items-center bg-bluish mx-5 csm:mx-2">
        <a
          href="/turnos.cnf.com.ar"
          class="no-underline rounded text-center csm:text-base csm:py-2 csm:px-2 px-6 py-4 leading-none border text-white border-white hover:border-transparent bg-bluish csm:mt-0"
          >Turnos online</a
        >
      </div>
    </div>
    <div class="hidden csm:order-3 csm:right-0 csm:block csm:pl-2">
      <button @click="toggle" class="flex items-center px-2 py-2 text-gray-800">
        <svg
          class="fill-current h-8 w-8"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'csm:block' : 'csm:hidden'"
      class="csm:order-4 csm:w-full flex csm:flex-col h-full items-center justify-between"
    >
      <div
        class="flex flex-wrap h-full items-center justify-between csm:items-start csm:pl-4 csm: text-center csm:flex-col csm:py-2 w-full"
      >
        <nuxt-link
          v-for="(item, index) in items"
          :to="item.route"
          :key="index"
          class="h-full pt-6 text-sm px-2 mx-2 items-center text-center justify-center border-b-1 border-blue-800 no-underline uppercase block csm:inline-block csm:mt-0 text-gray-800 hover:text-gray-900"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="flex items-center justify-between csm:hidden">
      <div class="flex h-auto items-center bg-bluish  mx-5 csm:mx-2">
        <a
          href="/turnos.cnf.com.ar"
          class="no-underline flex-shrink rounded text-center csm:text-sm csm:py-2 csm:px-4 px-6 py-2 leading-none border text-white border-white hover:border-transparent bg-bluish csm:mt-0"
          >Turnos online</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
//TODO: NavBar Optimizar imagenes
//TODO: Renderizar imagenes en formatos modernos

export default {
  name: "Navbar",
  data: () => {
    return {
      open: false,
      items: [
        { name: "Home", route: "/", internal: true },
        { name: "Clinica", route: "/clinica", internal: true },
        { name: "Staff Medico", route: "/staffmedico", internal: true },
        { name: "Telemedicina", route: "/telemedicina", internal: true },
        { name: "Contacto", route: "/contacto", internal: true }
      ]
    };
  },
  methods: {
    toggle() {
      ``;
      this.open = !this.open;
    }
  }
};
</script>

<style>
.text-bluish {
  color: var(--bluish);
}

.bg-bluish {
  background-color: var(--bluish);
}

.nuxt-link-active {
  border-bottom: solid 2px var(--bluish);
}
</style>
