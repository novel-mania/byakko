<template>
  <section class="new-comers">
    <div class="title">
      <h1 class="name">Recém chegadas</h1>
      <svg class="icon" width="31px" height="34px">
        <path fill-rule="evenodd"  fill="rgb(51, 51, 51)"
        d="M23.896,33.240 L7.104,33.240 C3.462,33.240 0.498,30.277 0.498,26.636 L0.498,21.828 C0.498,21.747 0.512,21.665 0.532,21.584 L3.720,10.056 C3.788,9.792 3.977,9.582 4.222,9.466 L4.310,9.426 C4.432,9.371 4.561,9.345 4.690,9.345 L10.441,9.345 C10.949,9.345 11.356,9.751 11.356,10.260 C11.356,10.769 10.949,11.175 10.441,11.175 L5.313,11.175 L2.607,20.947 L9.450,20.947 C9.959,20.947 10.366,21.353 10.366,21.862 L10.366,22.689 C10.366,23.903 11.349,24.886 12.563,24.886 L18.152,24.886 C19.366,24.886 20.349,23.903 20.349,22.689 L20.349,21.862 C20.349,21.353 20.756,20.947 21.265,20.947 L28.386,20.947 L25.693,11.196 L20.566,11.196 C20.057,11.196 19.651,10.789 19.651,10.280 C19.651,9.772 20.057,9.365 20.566,9.365 L26.310,9.365 C26.439,9.365 26.568,9.392 26.690,9.446 L26.778,9.487 C27.023,9.602 27.206,9.812 27.280,10.077 L30.468,21.604 C30.495,21.679 30.502,21.760 30.502,21.848 L30.502,26.636 C30.502,30.277 27.538,33.240 23.896,33.240 ZM28.684,22.777 L22.194,22.777 C22.146,24.954 20.356,26.710 18.165,26.710 L12.577,26.710 C10.386,26.710 8.596,24.954 8.548,22.777 L2.329,22.777 L2.329,26.636 C2.329,29.267 4.473,31.409 7.104,31.409 L23.896,31.409 C26.527,31.409 28.671,29.267 28.671,26.636 L28.684,26.636 L28.684,22.777 ZM21.000,14.105 C21.360,14.464 21.360,15.040 21.000,15.400 L16.144,20.255 C15.968,20.438 15.731,20.526 15.500,20.526 C15.269,20.526 15.032,20.431 14.856,20.255 L10.000,15.400 C9.640,15.040 9.640,14.464 10.000,14.105 C10.352,13.745 10.936,13.745 11.295,14.105 L14.584,17.393 L14.584,1.675 C14.584,1.167 14.991,0.760 15.500,0.760 C16.009,0.760 16.416,1.167 16.416,1.675 L16.416,17.393 L19.705,14.105 C20.064,13.745 20.641,13.745 21.000,14.105 Z"/>
      </svg>
    </div>
    <div class="content">
      <base-carrousel class="novels">
        <base-card
          v-for="novel in novels"
          :key="novel.id"
          :info="novel"
        />
      </base-carrousel>
      <base-advertinsing class="advertinsing" type="square" />
    </div>
  </section>
</template>

<script>
import BaseAdvertinsing from '~/components/base/BaseAdvertinsing';
import BaseCarrousel from '~/components/base/BaseCarrousel';
import BaseCard from '~/components/base/BaseCard';

export default {
  name: 'NewComers',
  data() {
    const novels = [
      { id: 1, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Ação' },
      { id: 2, image: 'novel2.png', title: 'Desolate Era', categorie: 'Xianxia' },
      { id: 3, image: 'novel3.png', title: 'The Great Ruler', categorie: 'Ação' },
      { id: 4, image: 'novel4.png', title: 'Everyone Else is a Returnee', categorie: 'Shounen' },
      { id: 5, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
      { id: 6, image: 'novel2.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
      { id: 7, image: 'novel3.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
      { id: 8, image: 'novel4.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
      { id: 9, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
      { id: 10, image: 'novel2.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção' },
    ]

    return {
      novels,
    };
  },
  components: {
    BaseAdvertinsing,
    BaseCarrousel,
    BaseCard,
  },
};
</script>

<style lang="scss">
.new-comers {
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  > .title {
    display: flex;
    align-items: center;

    > .name {
      margin-right: 10px;
      font-size: 1.875rem;
    }

    > .icon {
      margin-bottom: 10px;
    }
  }

  > .content {
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;
    display: flex;

    > .novels {
      width: 70%;
      margin-right: 30px;
    }
  }
}
</style>


