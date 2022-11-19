<template>
    <div :class="{ 'ltrdir': ($i18n.locale === 'en') }">

        <HeaderMenu></HeaderMenu>

        <div id="contact-page" class="container">
            <div class="bg">
                <div class="row">
                    <div class="container">
                        <div class="col-sm-12" style="overflow: hidden; margin-bottom: 40px">
                            <h2 class="title text-center"> {{ $t('contact') }} </h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.7105183478798!2d51.42709331460366!3d35.63486234012232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb38c39639e42638b!2zMzXCsDM4JzA1LjUiTiA1McKwMjUnNDUuNCJF!5e0!3m2!1sen!2sus!4v1661496872852!5m2!1sen!2sus"
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="contact-form">
                            <h2 class="title text-center">{{ $t('be_in_touch_with_us') }}</h2>
                            <div class="status alert alert-success" style="display: none"></div>
                            <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" required="required"
                                        :placeholder="$t('name')">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" name="email" class="form-control" required="required"
                                        :placeholder="$t('email')">
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="text" name="subject" class="form-control" required="required"
                                        :placeholder="$t('subject')">
                                </div>
                                <div class="form-group col-md-12">
                                    <textarea name="message" id="message" required class="form-control" rows="8"
                                        :placeholder="$t('your_message')"></textarea>
                                </div>
                                <div class="form-group col-md-12">
                                    <button type="submit" name="submit" class="btn btn-primary">{{ $t('send') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="contact-info"  :class="{ 'ltrdir': ($i18n.locale === 'en') }">
                            <h2 class="title text-center"> {{ $t('contactinfo') }} </h2>
                            <address>
                                <p>گـروه {{$t('title')}}</p>
                                <p>ایـران - تهران</p>
                                <p>بزرگراه بعثت</p>
                                <p>تلفن تماس : 00 00 18 55 021</p>
                                <p>فکس : 00 00 18 55 021</p>
                                <p>ایمیـل : info@tourineh.ir</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/#contact-page-->

        <Footer></Footer>

    </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';

export default {
    transition: {
        name: 'home',
        mode: 'out-in'
    },
    name: "Contact",
    components: {
        Footer,
        HeaderMenu
    }
}
</script>