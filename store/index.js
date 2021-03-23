export const state = () => ({
    professionals: null
});

export const mutations = {
 updateProfessionals: (state, professionals) => {
   state.professionals = professionals;
 }
};

export const actions = {
 async getProfessionals({ commit }) {
   console.log("GetProfessionals store commit")
 }
};