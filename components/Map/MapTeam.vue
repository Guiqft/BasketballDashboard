<template>
  <div :class="`container_${team.name}`">
    <div :class="`team_${team.name}`" />
  </div>
</template>

<script>
import Vue from "vue";
import MapTeamTooltip from "./MapTeamTooltip";

export default {
  name: "MapTeam",
  props: {
    team: { type: Object, default: null },
  },

  mounted() {
    // getting the locations to deal with same positions
    const usedLocations = this.$store.state.usedLocations;

    // team attr
    const teamCity = `${this.$props.team.city.replace(/ /g, "")}`;
    const teamDivision = `${this.$props.team.division.toLowerCase()}`;

    // offset to changes the equal positions
    var offset = 0;

    // check if the team location are already in use]
    // if are, set a random offset to positioning the team tooltip
    usedLocations.map((usedLocation) => {
      if (usedLocation !== undefined) {
        if (usedLocation.includes(teamCity) || usedLocation.includes(teamDivision)) {
          offset = Math.random() * -60;
        }
      }
    });

    // getting the countie element
    let countie = document.getElementsByClassName(teamCity)[0];

    // if countie doen't match, put on the division
    if (countie === undefined) {
      countie = document.getElementsByClassName(`${teamDivision}_division`)[0];
    }

    // Team div to insert Team component
    const element = document.getElementsByClassName(
      `team_${this.$props.team.name}`
    )[0];

    // dinamic instance of the Team component
    var ComponentClass = Vue.extend(MapTeamTooltip);
    var instance = new ComponentClass({
      propsData: {
        team: this.$props.team,
        store: this.$store,
      },
    });
    instance.$mount();

    // getting the countie coordinate and positioning Team component into div
    if (countie !== undefined) {
      var rect = countie.getBoundingClientRect();
      element.style.position = "relative";
      element.style.top = rect.top + offset + "px";
      element.style.left = rect.left + offset + "px";
      element.appendChild(instance.$el);

      // adding locations to list of useds
      this.$store.commit("addLocation", teamCity);
      this.$store.commit("addLocation", teamDivision);
    }
  },
};
</script>

<style scoped>
div[class^="container_"] {
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
}

div[class^="container_"]:hover {
  z-index: 11;
}
</style>
