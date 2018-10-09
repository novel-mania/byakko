<template>
  <div class="content">
    <div class="level">
      <div class="level-left">
        <div class="level-item"><h1>Usuários</h1></div>
      </div>
      <div class="level-right"></div>
    </div>
    <div class="content">
      <b-table :data="users">
        <template slot-scope="props">
          <b-table-column label="id">
            {{ props.row.id }}
          </b-table-column>

          <b-table-column label="Nome">
            {{ props.row.name }}
          </b-table-column>

          <b-table-column label="Email">
            {{ props.row.email }}
          </b-table-column>

          <b-table-column label="Cargo">
            {{ props.row.role }}
          </b-table-column>

          <b-table-column label="Opções" width="130">
            <b-field>
              <p class="control">
                <button class="button" @click.prevent.stop="editUser(props.row.id)">
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
  name: 'AdminUsers',
  layout: 'admin',
  computed: {
    ...mapGetters({
      users: 'getUsers',
    }),
  },
  methods: {
    ...mapActions([
      'fetchUsers'
    ]),
    async loadUsers() {
      await this.fetchUsers();
    },
    editUser(userId) {
      this.$router.push({ name: 'admin-users-id', params: { id: userId } });
    },
  },
  mounted() {
    this.loadUsers();
  },
};
</script>
