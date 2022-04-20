<template>
  <div class="results__character">
    <img
      v-if="imageURL !== ''"
      :class="`character__photo ${houseColor}`"
      :src="imageURL"
      alt="character photo"
    />
    <img
      v-else
      :class="`character__photo ${houseColor}`"
      src="../assets/user.svg"
      alt="character photo"
    />
    <h2>{{ fullName }}</h2>
    <div class="character__house">
      <div :class="`house__color ${houseColor}`"></div>
      <div class="house__name">{{ houseName }}</div>
    </div>
    <div class="character__birthday">
      <img src="../assets/icon-birthday-cake.svg" alt="cake icon" />
      <div class="birthday__date">{{ birthdayDate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fullName", "houseName", "birthdayDate", "imageURL"],
  computed: {
    houseColor() {
      return this.houseName.toLowerCase();
    },
  },
};
</script>

<style scoped lang="scss">
.results__character {
  width: 317px;
  height: 283px;
  background-color: #fff;
  border-radius: 16px;
  margin-right: 16px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 4px solid #000;
  }
  .character__photo {
    object-fit: cover;
    object-position: 20% 10%;
  }
  .gryffindor {
    border-color: #740001;
  }
  .slytherin {
    border-color: #1a472a;
  }
  .ravenclaw {
    border-color: #0e1a40;
  }
  .hufflepuff {
    border-color: #ecb939;
  }
  h2 {
    color: #2f3542;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  .character__house {
    display: flex;
    margin-bottom: 9px;
    .house__color {
      width: 16px;
      height: 16px;
      background-color: #000;
      border-radius: 4px;
      margin-right: 8px;
    }
    .gryffindor {
      background-color: #740001;
    }
    .slytherin {
      background-color: #1a472a;
    }
    .ravenclaw {
      background-color: #0e1a40;
    }
    .hufflepuff {
      background-color: #ecb939;
    }
    .house__name {
      color: #57606f;
      font-size: 15px;
    }
  }
  .character__birthday {
    display: flex;
    img {
      width: 16px;
      height: 18.29px;
      border: 0;
      border-right: 8px;
    }
    .birthday__date {
      color: #57606f;
      font-size: 15px;
    }
  }
}
@media screen and (max-width: 724px) {
  .results__character {
    width: 100%;
    margin-right: 0;
  }
}
</style>