<template>
	<div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
		<!-- <h1>Header</h1> -->
		<div>
			<b-navbar type="light" variant="light" class="fixed-top">
				<b-navbar-nav>
					<b-nav-item>
						<nuxt-link class="navbar-brand" to="/" active-class="active" exact>
							{{ $t('home') }}
						</nuxt-link>
					</b-nav-item>

					<!-- Navbar dropdowns -->
					<b-nav-item-dropdown :text="$t('tour')" right>
						<b-dropdown-item class="rtldir" v-for="tour in tours" :key="tour.id">
							<nuxt-link :to="`/tour?id=${tour.id}`" active-class="active">
								{{ tour.title }}
							</nuxt-link>
						</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item>
						<nuxt-link class="navbar-brand" to="/AllPackages" active-class="active">
							{{ $t('package') }}
						</nuxt-link>
					</b-nav-item>

					<b-nav-item>
						<nuxt-link class="navbar-brand" to="/AllHotels" active-class="active">
							{{ $t('hotel') }}
						</nuxt-link>
					</b-nav-item>

					<b-nav-item>
						<nuxt-link class="navbar-brand" to="/About" active-class="active">
							{{ $t('aboutUs') }}
						</nuxt-link>
					</b-nav-item>

					<b-nav-item>
						<nuxt-link class="navbar-brand" to="/Contact" active-class="active">
							{{ $t('contactUs') }}
						</nuxt-link>
					</b-nav-item>

					<b-nav-form>
						<b-form-input class="mr-sm-2" :placeholder="$t('search')"></b-form-input>
						&nbsp;
						<b-button variant="outline-success" class="my-2 my-sm-0" type="submit">
							{{ $t('search') }}
						</b-button>
					</b-nav-form>
				</b-navbar-nav>
			</b-navbar>
		</div>
	</div>
</template>


<script lang="ts">
import { getRequest } from '~/utils'
import { defineComponent, onMounted, onUpdated, ref } from 'vue'

export default defineComponent({
  name: "HeaderMenu",

  setup() {
    const tours = ref()

    const init = async () => {
      try {
        tours.value = (await getRequest('/api/tour-pages'))?.data

        // debugger;

      } catch (err: any) {
        console.log('result: ' + err.status.value)
        // if(err.status.value == 200)
      }
    };
    onMounted(async () => {
      await init();
    });
    onUpdated(async () => {
    });
    return {
      tours,
      availableLocales() {
        return ['fa'] //@TODO implement
        // return globalThis.nuxt.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    };
  },
})
</script>