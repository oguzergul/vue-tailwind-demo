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
    REMOVE_FROM_FAVORITES(state, payload) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== payload
      );
    },
    SET_ROAD_DETAILS(state, payload) {
      state.roadDetails = payload;
    },
    SAVE_COMMENT(state, payload) {
      state.comments.push(payload);
    },
    SAVE_COLOR_CODE(state, payload) {
      state.colors.push(payload);
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
        commit("SET_ROAD_DETAILS", response.data.roadworks);
      });
    },
    ADD_TO_FAVORITES({ commit }, payload) {
      if (!this.state.favorites.includes(payload)) {
        commit("ADD_TO_FAVORITES", payload);
      }
    },
    SAVE_COMMENT({ commit }, payload) {
      commit("SAVE_COMMENT", {
        road: payload.id,
        comment: payload.comment,
      });
    },
    SAVE_COLOR_CODE({ commit }, payload) {
      commit("SAVE_COLOR_CODE", {
        road: payload.id,
        colorCode: payload.color,
      });
    },
    REMOVE_FAVORITE({ commit }, payload) {
      commit("REMOVE_FROM_FAVORITES", payload);
    },
  },
  getters: {
    _get_roads(state) {
      return state.roads;
    },
    _get_road_details(state) {
      return state.roadDetails;
    },
    _get_comments(state) {
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
