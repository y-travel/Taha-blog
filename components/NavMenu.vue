<template>
	<div>
		<header>
			<div class="header-bottom">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse"
									data-target=".navbar-collapse">
									<span class="sr-only">Toggle navigation</span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>
							<div class="mainmenu pull-right">
								<ul class="nav navbar-nav collapse navbar-collapse">
									<li>
										<nuxt-link to="/" active-class="active" exact>
											خانه
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/About" active-class="active">
											درباره ما
										</nuxt-link>

									</li>
									<li>
										<nuxt-link to="/Contact" active-class="active">
											تماس با ما
										</nuxt-link>
									</li>
									<li>
										<nuxt-link to="/app">
											<button style="font-size:12pt" type="button"
												class="btn btn-info">سـامـانـه</button>
										</nuxt-link>
									</li>
								</ul>
							</div>

							<div class="col-sm-3">
								<div class="search_box pull-left">
									<input type="text" placeholder="جستـجو" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--/header-bottom-->
		</header>
	</div>
</template>

<script>
export default {
	name: 'NavMenu',
}
</script>