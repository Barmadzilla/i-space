<template>
  <div class="icons">
    <a href="https://www.facebook.com/ispacefree" target="_blank">
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.1667 38.7303C31.1528 37.2228 38 29.4075 38 19.993C38 9.49963 29.4934 0.993042 19 0.993042C8.50659 0.993042 0 9.49963 0 19.993C0 29.4075 6.84724 37.2228 15.8333 38.7303V25.2708H11.0833V19.993H15.8333V15.7708C15.8333 11.0208 18.8944 8.38193 23.2222 8.38193C24.5944 8.38193 26.0722 8.59304 27.4444 8.80415V13.6597H25.0167C22.6944 13.6597 22.1667 14.8208 22.1667 16.2986V19.993H27.2333L26.3889 25.2708H22.1667V38.7303Z"
          fill="white"
        />
      </svg>
    </a>
    <a href="https://www.instagram.com/ispacepro/" target="_blank">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 12C1 5.92487 5.92487 1 12 1H28C34.0751 1 39 5.92487 39 12V28C39 34.0751 34.0751 39 28 39H12C5.92487 39 1 34.0751 1 28V12ZM31 20C31 26.0751 26.0751 31 20 31C13.9249 31 9 26.0751 9 20C9 13.9249 13.9249 9 20 9C26.0751 9 31 13.9249 31 20ZM30.5 11C31.8807 11 33 9.88071 33 8.5C33 7.11929 31.8807 6 30.5 6C29.1193 6 28 7.11929 28 8.5C28 9.88071 29.1193 11 30.5 11Z"
          fill="white"
        />
      </svg>
    </a>
    <a href="https://t.me/i_Space_team" target="_blank">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.2799 36.6354L38.1621 7.1312C38.1621 5.16671 35.4615 6.35768 35.4615 6.35768L2.44972 19.2496C2.44972 19.2496 0.883602 19.7776 1.00692 20.7598C1.13023 21.7421 2.40039 22.1964 2.40039 22.1964L10.6996 24.9835L10.9649 25.1109L30.6396 12.374C30.6396 12.374 31.7864 11.6742 31.7494 12.374C31.7494 12.374 31.9591 12.4968 31.3425 13.0739C30.8167 13.566 18.9951 24.1866 15.5265 27.3024L15.6322 27.3532L29.197 37.7036C31.4537 38.6858 32.2799 36.6354 32.2799 36.6354Z"
          fill="white"
        />
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  name: "Social",
};
</script>
<style scoped>
.icons {
  display: flex;
  align-items: center;
  margin-left: 1em;
}
svg path {
  fill: lightgray;
  transition: all 200ms;
}
a {
  margin-left: 0.9em;
  display: flex;
  align-items: flex-end;
  height: unset;
}

svg {
  width: 23px;
  height: 23px;
}
svg:hover path {
  fill: gray;
}

@media (max-width: 420px) {
  .icons {
      justify-content: flex-end;
      margin-top: 1em;
  }
  a{
      margin-left: 1.2em;
  }
}
</style>
