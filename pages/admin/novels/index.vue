<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Novels</h1></div>
      </div>
      <div class="level-right"></div>
    </div>
    <div class="content">
      <b-table :data="novels">
        <template slot-scope="props">
          <b-table-column label="id">
            {{ props.row.id }}
          </b-table-column>

          <b-table-column label="Nome">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column label="Categorias">
            {{ props.row.categories.join(',') }}
          </b-table-column>

          <b-table-column label="Opções">
            <b-field>
              <p class="control">
                <button class="button" @click.prevent.stop="showChapters(props.row.id)">
                  <b-icon icon="view-list" />
                </button>
              </p>
              <p class="control">
                <button class="button">
                  <b-icon icon="pencil" />
                </button>
              </p>
              <p class="control">
                <button class="button">
                  <b-icon icon="delete" type="is-danger" />
                </button>
              </p>
            </b-field>
          </b-table-column>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminNovels',
  layout: 'admin',
  computed: {
    ...mapGetters({
      novels: 'getNovels',
    }),
  },
  methods: {
    ...mapActions([
      'fetchNovels',
      'addChaptersFilter',
    ]),
    async loadNovels() {
      await this.fetchNovels();
    },
    showChapters(novel) {
      this.addChaptersFilter({ name: 'novel', value: novel });
      this.$router.push('/admin/chapters');
    },
  },
  mounted() {
    this.loadNovels();
  },
};
</script>
