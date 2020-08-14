<template>
  <div class="container mb-4">
    <validation-observer v-if="!status" v-slot="{ handleSubmit }" slim>
      <b-form @submit.prevent="handleSubmit(order)" @reset="onReset">
        <!--<p>{{ status }}</p>-->
        <validation-provider v-slot="{ errors, classes }" :rules="{ required: true, min: 10 }" name="Address">
          <b-form-group
            id="input-group-1"
            label="User address"
            label-for="input-1"
            description="We'll never share your address with anyone else."
          >
            <p v-if="{errors}" class="text-danger mb-1">
              {{ errors[0] }}
            </p>

            <b-form-input
              id="input-1"
              v-model="form.address"
              type="text"
              placeholder="Your address..."
              name="address"
              :class="classes"
            />
          </b-form-group>
        </validation-provider>

        <validation-provider v-slot="{ errors, classes }" :rules="{ required: true, min: 2 }" name="Name">
          <b-form-group d="input-group-2" label="Your Name:" label-for="input-2">
            <p v-if="{errors}" class="text-danger mb-1">
              {{ errors[0] }}
            </p>
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Your name"
              pattern="^[a-zA-Z]+$"
              minlength="2"
              :class="classes"
            />
          </b-form-group>
        </validation-provider>

        <validation-provider v-slot="{ errors, classes }" :rules="{ required: true, regex: '^\\+\\d{2}\\d{3}\\d{3}\\d{2}\\d{2}$'}" name="Phone">
          <b-form-group id="input-group-3" label="Your telephone:" label-for="input-3">
            <p v-for="error of errors" :key="error" class="text-danger mb-1">
              {{ error }}
            </p>
            <b-form-input
              id="input-3"
              v-model="form.telephone"
              required
              placeholder="Your telephone"
              :class="classes"
            />
          </b-form-group>
        </validation-provider>

        <b-form-group id="input-group-4" label="Delivery:" label-for="input-4">
          <b-form-select
            id="input-4"
            v-model="form.delivery"
            :options="delivery"
            required
          />
        </b-form-group>

        <b-button type="submit" class="mp-btn mp-btn-checkout mb-2 mb-md-0">
          Submit
        </b-button>
        <b-button type="reset" class="mp-btn mp-btn-remove">
          Reset
        </b-button>
      </b-form>
    </validation-observer>
    <div v-else class="wrapper">
        <p class="text mb-4">Thank You!</p>
        <p class="text">Order is accepted!</p>
      <video
        class="img-orderDone"
        autoplay
        loop
        src="../assets/img/thumbs-up.mp4"
        type="video/mp4"
        alt="good"
      />
    </div>
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
      status: false
    }
  },
  computed: mapGetters({
    items: 'favorites/items'
  }),
  methods: {
    async order () {
      // evt.preventDefault() // prevent form reset
      // this.status = 'Loading'
      //
      // if (this.form.name.length < 2 || !isNaN(this.form.name)) {
      //   this.show = false
      //   this.errorShow = true
      //   return
      // }

      await this.$axios.$post('/delivery', { form: this.form, order: this.items })
        .then(() => { this.status = true })
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
      this.status = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
  .wrapper{
    text-align: center;
  }
  .img-orderDone {
   width: 75%;
 }
  .text{
    /*text-align: center;*/
    color: #ca3f8b;
    font-size: 20px;
  }
  .text:nth-of-type(2){
    color: #36becd;
    font-size: 18px;
  }
  .has-error{
    border: 1px solid red;
    color: red;
  }

</style>
