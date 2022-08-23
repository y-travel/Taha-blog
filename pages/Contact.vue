<template>
    <div>

        <NavMenu></NavMenu>

        <div id="contact-page" class="container">
            <div class="bg">
                <div class="row">
                    <div class="container">
                        <div class="col-sm-12" style="overflow: hidden; margin-bottom: 40px">
                            <h2 class="title text-center">تمـاس با مـا</h2>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1621.3545298246322!2d51.42870430051277!3d35.634898294459774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb2ae6a34cc5b5472!2zMzXCsDM4JzA1LjYiTiA1McKwMjUnNDUuNyJF!5e0!3m2!1sen!2s!4v1661261448517!5m2!1sen!2s"
                                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="contact-form">
                            <h2 class="title text-center">با ما در ارتباط باشیـد</h2>
                            <div class="status alert alert-success" style="display: none"></div>
                            <form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
                                <div class="form-group col-md-6">
                                    <input type="text" name="name" class="form-control" required="required"
                                        placeholder="نام">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" name="email" class="form-control" required="required"
                                        placeholder="ایمیـل">
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="text" name="subject" class="form-control" required="required"
                                        placeholder="موضـوع">
                                </div>
                                <div class="form-group col-md-12">
                                    <textarea name="message" id="message" required class="form-control" rows="8"
                                        placeholder="پیغـام شمـا"></textarea>
                                </div>
                                <div class="form-group col-md-12">
                                    <input type="submit" name="submit" class="btn btn-primary pull-right"
                                        value="ارسـال">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-4" style="text-align:right;">
                        <div class="contact-info">
                            <h2 class="title text-center">اطلاعات تماس</h2>
                            <address>
                                <p>گـروه طاها</p>
                                <p>ایـران - تهران</p>
                                <p>بزرگراه بعثت</p>
                                <p>تلفن تماس : 00 00 18 55 021</p>
                                <p>فکس : 00 00 18 55 021</p>
                                <p style="font-family: tahoma;">ایمیـل : info@tourineh.ir</p>
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
import NavMenu from '~/components/NavMenu.vue';
import Footer from '~/components/Footer.vue';
export default {
    transition: {
    name: 'home',
    mode: 'out-in'
  },
    name: "Contact",
    components: {
        NavMenu,
        Footer
    }
}
</script>