<template>
	<div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
		<!-- <h1>Header</h1> -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">

					<!-- <nuxt-link class="navbar-brand" to="/">
						طاها
					</nuxt-link> -->

					<li class="nav-item">
						<nuxt-link class="navbar-brand" to="/" active-class="active" exact>
							{{ $t('home') }}
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="navbar-brand" to="/About" active-class="active">
							{{ $t('about') }}
						</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="navbar-brand" to="/Contact" active-class="active">
							{{ $t('contact') }}
						</nuxt-link>
					</li>
					<form class="form-inline my-2 my-lg-0">
						<input class="form-control mr-sm-2" type="search" aria-label="search">
						&nbsp;<button class="btn btn-outline-success my-2 my-sm-0" type="submit">{{ $t('search')
						}}</button>
					</form>
					&nbsp;&nbsp;
					<div style="font-size:large; padding-top: 10px;">
						<nuxt-link v-for="locale in availableLocales" :key="locale.code"
							:to="switchLocalePath(locale.code)">
							{{ locale.name }}
						</nuxt-link>
					</div>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'HeaderMenu',
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
}
</script>