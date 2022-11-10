<template>
	<div class="footer" :class="{ 'ltrdir': ($i18n.locale === 'en') }">
		<div>
			<div class="container">
				<div class="row">
					<div class="col-sm-3">
						<div class="address">
							<img src="/assets/images/home/map.png" alt="map" />
						</div>
					</div>
					<div class="col-sm-6">
						<div class="companyinfo">
							<h4>
								<b>
									&nbsp; {{ $t('aboutUs') }}
								</b>
							</h4>
							<p>
								&nbsp; &nbsp;تورینه می کوشد تا
								بهترین خدمات رزرو هتل، بلیط هواپیما، بلیط چارتر و تور مسافرتی را در سراسر جهان با
								بالاترین
								استاندارد ها، به مشتریان خود ارائه دهد. خرید بلیط هواپیمای تور خارجی، خرید بلیط
								هواپیمای
								تور داخلی ، خرید بلیط هواپیمای تور لحظه آخری، خرید بلیط هواپیمای تور هوایی کربلا، خرید
								بلیط هواپیما تور عتبات، بلیط استانبول، بلیط دبی، بلیط چارتر هواپیما ، بلیط ارزان
								هواپیما
								و رزرو هتل ارزان قیمت و لوکس از جمله رزرو هتل استانبول ، هتل دبی و هتل مشهد بلیط هواپیما
								مشهد، بلیط کیش و … تور دبی، تور ترکیه ، تور استانبول ، تور آنتالیا ، تور مالزی ، تور
								تایلند
								<nuxt-link to="/About" active-class="active">
									<b> بیشتر </b>
								</nuxt-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container">
				<div class="row">
					<p>Copyright © 2022
						<a target="_blank" href="http://www.tourine.ir/"><b>طاها</b></a>. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
}
</script>