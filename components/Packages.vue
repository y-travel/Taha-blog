<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">
        
        <h2 class="title text-center">{{ $t('pakages') }}</h2>

        <div class="row">
            <div class="col-sm-3">
                <div class="product-image-wrapper">
                    <div class="single-products">
                        <div class="productinfo text-center">
                            <img src="/assets/images/home/Gallery.jpg" alt="img" />
                            <h2>1.250.000 R</h2>
                            <p>توضیحات کوتاه محصول</p>
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>افزودن به
                                سبـد خرید</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

export default {
    name: "Hotels",
    computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
    components: {}
  }
  </script>