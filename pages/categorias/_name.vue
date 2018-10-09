<template>
  <div>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="title">{{ category.name }}</div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <nav class="tabs is-boxed">
            <div class="container">
              <ul>
                <li class="is-active">
                  <a>Todas</a>
                </li>
                <li>
                  <a>Popular</a>
                </li>
                <li>
                  <a>Novas</a>
                </li>
                <li>
                  <a>Ranking</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <section class="container list">
      <BaseAdvertinsing class="container has-text-centered" type="90" />
      <div class="columns is-multiline">
        <div class="column is-half" v-for="novel in novels" :key="novel.id">
          <hr>
          <article class="media">
            <figure class="media-left">
              <p class="image"><img :src="`http://localhost:8090/img/${novel.image}`" alt="Imagem"></p>
            </figure>
            <div class="media-content">
              <p class="title is-4">{{ novel.title }}</p>
              <p class="subtitle is-6">{{ novel.categorie }}</p>
              <p class="info">
                <svg width="20px" height="28px" class="info-icon">
                  <path fill-rule="evenodd" fill="rgb(51, 51, 51)"
                  d="M19.963,16.542 L19.944,16.281 C19.638,12.304 17.787,9.811 16.153,7.612 C14.640,5.576 13.334,3.818 13.334,1.223 C13.334,1.015 13.217,0.825 13.032,0.729 C12.846,0.633 12.623,0.649 12.455,0.772 C10.001,2.527 7.954,5.486 7.239,8.309 C6.742,10.275 6.677,12.485 6.667,13.944 C4.402,13.460 3.888,10.071 3.883,10.034 C3.857,9.858 3.750,9.705 3.594,9.622 C3.436,9.539 3.250,9.533 3.090,9.613 C2.971,9.670 0.174,11.091 0.011,16.768 C-0.000,16.956 -0.001,17.145 -0.001,17.334 C-0.001,22.848 4.486,27.334 10.000,27.334 C15.514,27.334 20.001,22.848 20.001,17.334 C20.001,17.058 19.982,16.800 19.963,16.542 ZM10.000,26.223 C8.162,26.223 6.666,24.631 6.666,22.673 C6.666,22.606 6.666,22.538 6.671,22.456 C6.693,21.630 6.850,21.067 7.022,20.692 C7.344,21.384 7.921,22.020 8.856,22.020 C9.163,22.020 9.412,21.772 9.412,21.465 C9.412,20.674 9.428,19.761 9.625,18.938 C9.800,18.207 10.219,17.430 10.750,16.808 C10.986,17.616 11.446,18.270 11.895,18.909 C12.538,19.823 13.203,20.767 13.320,22.378 C13.327,22.473 13.334,22.569 13.334,22.672 C13.334,24.631 11.838,26.223 10.000,26.223 ZM13.511,25.497 C14.088,24.711 14.445,23.739 14.445,22.673 C14.445,22.542 14.437,22.420 14.420,22.193 C14.289,20.379 13.500,19.258 12.804,18.269 C12.211,17.427 11.699,16.700 11.699,15.668 C11.699,15.457 11.580,15.264 11.391,15.170 C11.203,15.076 10.977,15.097 10.809,15.225 C9.743,16.030 8.855,17.385 8.544,18.679 C8.386,19.342 8.331,20.060 8.311,20.651 C7.926,20.236 7.806,19.468 7.805,19.457 C7.780,19.279 7.671,19.123 7.511,19.040 C7.352,18.958 7.161,18.956 7.001,19.038 C6.861,19.110 5.631,19.815 5.561,22.409 C5.556,22.497 5.555,22.585 5.555,22.673 C5.555,23.739 5.912,24.711 6.489,25.497 C3.329,24.133 1.111,20.989 1.111,17.335 C1.111,17.168 1.110,17.002 1.121,16.817 C1.217,13.487 2.282,11.835 2.978,11.107 C3.463,12.843 4.734,15.112 7.222,15.112 C7.529,15.112 7.778,14.864 7.778,14.557 C7.778,12.697 7.819,10.549 8.317,8.582 C8.881,6.353 10.427,3.946 12.293,2.317 C12.602,4.697 13.898,6.441 15.261,8.275 C16.881,10.455 18.555,12.709 18.836,16.359 L18.855,16.625 C18.872,16.856 18.890,17.087 18.890,17.335 C18.890,20.989 16.671,24.133 13.511,25.497 Z"/>
                </svg>
                <span class="number"><i>{{ novel.info.likes }}</i></span>
              </p>
              <p class="content">{{ novel.sinopse }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseAdvertinsing from '~/components/base/BaseAdvertinsing';
import BaseCard from '~/components/base/BaseCard';

export default {
  name: 'Category',
  components: {
    BaseAdvertinsing,
    BaseCard,
  },
  data() {
    const novels = [
      { id: 1, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Ação', sinopse: ' of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 2, image: 'novel2.png', title: 'Desolate Era', categorie: 'Xianxia', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 3, image: 'novel3.png', title: 'The Great Ruler', categorie: 'Ação', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 4, image: 'novel4.png', title: 'Everyone Else is a Returnee', categorie: 'shounen', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 5, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 6, image: 'novel2.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 7, image: 'novel3.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 8, image: 'novel4.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 9, image: 'novel1.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
      { id: 10, image: 'novel2.png', title: 'Agaist the Gods', categorie: 'Romance de Ficção', sinopse: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', info: { likes: 345 } },
    ];

    return {
      novels,
      category: {
        name: 'Todas',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 32px;
}

.info {
  margin-top: -1.5rem;
}

.info-icon {
  margin-right: 10px;
  margin-top: 5px;
}
</style>


