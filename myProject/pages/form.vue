<template>
  <div>
    <b-form v-if="show" @submit="order" @reset="onReset">
      <p>{{ status }}</p>
      <b-form-group
        id="input-group-1"
        label="User address:"
        label-for="input-1"
        description="We'll never share your address with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.address"
          type="text"
          required
          placeholder="Your address..."
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Your name"
        />
      </b-form-group>

      <b-form-group id="input-group-3" label="Your telephone:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.telephone"
          type="number"
          required
          placeholder="Your telephone"
        />
      </b-form-group>

      <b-form-group id="input-group-4" label="Delivery:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="form.delivery"
          :options="delivery"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-5">
        <b-form-checkbox-group id="checkboxes-5" v-model="form.checked">
          <b-form-checkbox value="me">
            Check me out
          </b-form-checkbox>
          <b-form-checkbox value="that">
            Check that out
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <!--<b-card class="mt-3" header="Form Data Result">-->
    <!--<pre class="m-0">{{ form }}</pre>-->
    <!--</b-card>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        address: '',
        name: '',
        telephone: '',
        checked: []
      },
      delivery: ['Самовывоз', 'Наш курьeр', 'Glovo'],
      show: true,
      status: 'Idle'
    }
  },
  computed: mapGetters({
    items: 'favorites/items'
  }),
  methods: {
    async order (evt) {
      evt.preventDefault() // prevent form reset

      this.status = 'Loading'
      await this.$axios.$post('/delivery', { form: this.form, order: this.items })
        .then(() => { this.status = 'Success' })
        .catch((err) => { this.status = `Error: ${err.message}` })

      // reset ordered items
      // redirect to order info page
    },
    // onSubmit (evt) {
    //   evt.preventDefault()
    //   alert(JSON.stringify(this.form))
    // },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.address = ''
      this.form.name = ''
      this.form.telephone = ''
      this.form.delivery = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
</style>
