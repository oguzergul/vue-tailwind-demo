import Vue from "vue";
import Vuex from "vuex";
import { axiosInstance } from "../utils/axios";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    roads: [],
    favorites: [],
    comments: [],
    roadDetails: {},
    colors: [],
  },
  mutations: {
    SET_ROADS(state, payload) {
      state.roads = payload;
    },
    ADD_TO_FAVORITES(state, payload) {
      state.favorites.push(payload);
    },
    SET_ROAD_DETAILS(state, payload) {
      state.roadDetails = payload;
    },
    SAVE_COMMENT(state, payload) {
      state.comments.push(payload);
      console.log("coommentply", payload);
    },
    SAVE_COLOR_CODE(state, payload) {
      state.colors.push(payload);
      console.log("color", payload);
    },
  },
  actions: {
    GET_ALL_OTOBAN({ commit }) {
      axiosInstance.get("/").then((response) => {
        commit("SET_ROADS", response.data.roads);
      });
    },
    GET_OTOBAN_BY_ID({ commit }, payload) {
      axiosInstance.get(`/${payload}/services/roadworks`).then((response) => {
        console.log(response.data);
        commit("SET_ROAD_DETAILS", response.data.roadworks);
      });
    },
    ADD_TO_FAVORITES({ commit }, payload) {
      commit("ADD_TO_FAVORITES", payload);
    },
    SAVE_COMMENT({ commit }, payload) {
      commit("SAVE_COMMENT", {
        road: payload.id,
        comment: payload.comment,
      });
      commit("SAVE_COLOR_CODE", {
        road: payload.id,
        colorCode: payload.color,
      });
    },
  },
  getters: {
    _get_roads(state) {
      return state.roads;
    },
    GET_ROAD_DETAILS(state) {
      return state.roadDetails;
    },
    GET_COMMENTS(state) {
      return state.comments;
    },
    _get_favorite_roads(state) {
      return state.favorites;
    },
    _get_color_code(state) {
      return state.colors;
    },
  },
  plugins: [vuexLocal.plugin],
});
