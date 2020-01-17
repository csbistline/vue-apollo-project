import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blueGrey.base,
        secondary: colors.brown.base,
        accent: colors.lightBlue.base,
        error: colors.pink.base,
        warning: colors.amber.base,
        info: colors.cyan.base,
        success: colors.green.base
      }
    }
  }
});
