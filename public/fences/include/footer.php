


            </div><!--закрываем main-->
        </div><!--закрываем wrapper-->

        <div class="wrapper">
            <div class="footer" id="contacts">
                <div class="container">
                    <div class="footer_main">
                        <div class="footer_logo">
                            <a href="#"><img src="media/img/logo_footer.png" alt="Логотип"></a>
                            <p><b>заборы из профнастила</b></p>
                            <p class="copyright">2018 Все права защищены</p>
                        </div>
                        <div class="footer_name">
                            <div class="footer_name_el">
                                <p>Свириденко Алексей Юрьевич</p>
                                <p><a href="tel:+79538023227">+7 (953) 802 32 27</a></p>
                            </div>
                            <div class="footer_name_el">
                                <p>Иванов Пётр Владиславович</p>
                                <p><a href="tel:+79134737765">+7 (913) 473 77 65</a></p>
                                <p><a href="tel:+73832770602">+7 (383) 277-06-02</a></p>
                            </div>
                        </div>
                        <div class="footer_cont">
                            <p>г.Новосибирск,<br>
                                ул. Богдана Хмельницкого 25</p>
                            <p><a href="mailto:zakaz@zabormir.ru">zakaz@zabormir.ru</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



        <script src="media/js/jquery-2.1.4.min.js" type="text/javascript" charset="utf-8"></script>
        <script src="media/js/slick/slick.min.js"></script>
        <script src="media/js/fancybox/jquery.fancybox.min.js"></script>
        <script src="media/js/maskedinput.min.js"></script>
        <script src="media/js/remodal/remodal_script.js" type="text/javascript"></script>
        <script src="media/js/script.js"></script>



        <div class="remodal popup popup_feedback" data-remodal-id="popup_feedback">
            <div class="popup__close" data-remodal-action="close"><?php echo file_get_contents("media/img/svg/x.svg"); ?></div>
            <div class="popup__title"><p>Оставить заявку</p></div>
            <div class="popup__content">
                <div class="ajax-block">Идет отправка...</div>
                <div class="js-status-block"></div>
                <form class="popup_form" action="" method="" name="form_feedback">

                    <!-- Скрытые Обязательные Поля -->
                    <input type="hidden" name="project_name" value="Site Name">
                    <input type="hidden" name="admin_email" value="vit-vokhminov@yandex.ru">
                    <input type="hidden" name="form_subject" value="Form Subject">
                    <!-- END Скрытые Обязательные Поля -->

                    <input type="text" id="feedback[NAME]" name="feedback[NAME]" placeholder="Ваше имя" value="" minlength="3" maxlength="40" required>
                    <input type="text" id="feedback[PHONE]" name="feedback[PHONE]" placeholder="Ваш телефон" value="" class="phone-mask cursor-phone" required>
                    <button type="submit" class="green_bt">Отправить</button>
                </form>
            </div>
        </div>


        <script>
            var d;
            $(document).ready(function() {
                //E-mail Ajax Send
                $("form.popup_form").submit(function() { //Change
                    var th = $(this);
                    $('.ajax-block').css({'display':'block'});
                    $.ajax({
                        type: "POST",
                        url: "functions/mail.php", //Change
                        data: th.serialize()
                    }).done(function(data) {
                        $('.ajax-block').css({'display':'none'});
                        var remote = JSON.parse(data);
                        // alert(data.status);
                        $('.js-status-block').html(remote.message);
                        if (remote.status === 'success') {

                            $('.js-status-block').removeClass('has-error');
                            $('.popup_form').css({'display':'none'});
                            setTimeout(function() {
                                // Done Functions
                                location.replace("thank.php");
                            }, 2000);
                        } else {
                            $('.js-status-block').addClass('has-error');
                        }

                        // setTimeout(function() {
                        //     // Done Functions
                        //     th.trigger("reset");
                        // }, 1000);
                    });
                    return false;
                });
            });
        </script>


    </body>

</html>
