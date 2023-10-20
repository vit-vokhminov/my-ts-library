<?php include 'include/header.php'; ?>


    <div class="banner_main">
        <img src="media/img/banner_1.jpg" alt="Баннер">
        <div class="banner_main_text">
            <h1>ЗАКАЖИ ЗАБОР ИЗ ПРОФНАСТИЛА<br>
                В НОВОСИБИРСКЕ</h1>
            <p>Под ключ от 1500 руб.</p>
        </div>
    </div>


    <div class="container" id="prices">
        <div class="fence_prices">
            <div class="title">
                <h2 class="bot">ЦЕНЫ НА ЗАБОРЫ</h2>
            </div>
            <ul class="fence_prices_wrap">
                <?php
                $fence_prices = [
                    [
                        'img' => 'media/img/fence_prices_1.jpg',
                        'text_bold' => 'Т.Х: столбы 60х40мм',
                        'text' => 'от 1600 руб/пог.м.'
                    ],[
                        'img' => 'media/img/fence_prices_2.jpg',
                        'text_bold' => 'Т.Х: столбы 60х40мм',
                        'text' => 'от 1600 руб/пог.м.'
                    ],[
                        'img' => 'media/img/fence_prices_3.jpg',
                        'text_bold' => 'Т.Х: столбы 60х40мм',
                        'text' => 'от 1600 руб/пог.м.'
                    ]
                ]
                ?>
                <?php foreach ($fence_prices as $n => $el) { ?>

                    <li class="fence_prices_el">
                        <div class="fence_prices_main">
                            <div class="fence_prices_img">
                                <img src="<?php echo $el['img'] ?>" alt="">
                            </div>
                            <div class="fence_prices_text">
                                <p><b><?php echo $el['text_bold'] ?></b></p>
                                <p><?php echo $el['text'] ?></p>
                            </div>
                        </div>
                    </li>

                    <?php
                }
                ?>

            </ul>
        </div>
    </div>



    <div class="about_company" id="about_company">
        <div class="about_company_img">
            <img src="media/img/about_company_1.jpg" alt="">
        </div>
        <div class="about_company_text">
            <h2 class="left">О КОМПАНИИ</h2>
            <p>Компания &laquo;Мир Заборов&raquo;&nbsp;&mdash; профессионально занимается строительством заборов и&nbsp;ограждений &laquo;под ключ&raquo;, используя современные бетонные модули, изготовленные на&nbsp;собственном производстве.</p>
            <p>Надежной основой забора, предлагаемого нашей компанией, являются бетонные модули, произведенные с&nbsp;применением технологии &laquo;послойного прессования песчано-цементной смеси&raquo;.</p>
            <p>В&nbsp;сочетании с&nbsp;заборными пролетами, которые могутбыть изготовлены из&nbsp;различных материалов, калиткой и&nbsp;воротами (распашными или откатными, с&nbsp;автоматикой или без), вы&nbsp;получите законченную, красивую и&nbsp;прочную конструкцию.</p>
        </div>
    </div>


    <div class="how_wrap">
        <div class="container" id="how">
            <div class="how">
                <div class="title">
                    <h2 class="bot">Почему стоить выбрать НАС?</h2>
                </div>
                <div class="how_slider">

                    <div class="how_slider_nav">
                        <div class="sl__slide">
                            <div class="how_nav_img">
                                <?php echo file_get_contents('media/img/svg/fences.svg'); ?>
                            </div>
                            <div class="how_nav_text">
                                <p>Качество материалов</p>
                            </div>
                        </div>
                        <div class="sl__slide">
                            <div class="how_nav_img">
                                <?php echo file_get_contents('media/img/svg/chair.svg'); ?>
                            </div>
                            <div class="how_nav_text">
                                <p>Удобный заказ без визита в офис</p>
                            </div>
                        </div>
                        <div class="sl__slide">
                            <div class="how_nav_img">
                                <?php echo file_get_contents('media/img/svg/experience.svg'); ?>
                            </div>
                            <div class="how_nav_text">
                                <p>Богатый опыт в отрасле</p>
                            </div>
                        </div>
                    </div>

                    <div class="how_slider_for">
                        <div class="sl__slide">
                            <h4>Качество материалов</h4>
                            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
                            <p>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
                        </div>
                        <div class="sl__slide">
                            <h4>Удобный заказ без визита в офис</h4>
                            <p>При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
                            <p>Hыбатекст создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
                            <p>Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
                        </div>
                        <div class="sl__slide">
                            <h4>Богатый опыт в отрасле</h4>
                            <p>Дизайнеру менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.</p>
                            <p>Абзаце создании генератора  в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>



    <div class="share">
        <div class="container">
            <div class="title">
                <h2 class="bot white">АКЦИЯ -СКИДКА 15 % НА УСТАНОВКУ</h2>
            </div>
            <div class="counter">
                <script src="http://megatimer.ru/s/842adfe6431728b2aa03e1d62cc1cc36.js"></script>
            </div>
            <div class="button_main">
                <button type="button" class="green_bt" data-remodal-target="popup_feedback">Заказать звонок</button>
            </div>
        </div>
    </div>



    <div class="gallery_wrap" id="photo">
        <div class="container">
            <div class="gallery_slider_main">
                <div class="gallery_slider">

                    <?php
                    $gallery_photo = [
                        ['img' => 'media/img/gallery_1.jpg'],
                        ['img' => 'media/img/about_company_1.jpg'],
                        ['img' => 'media/img/gallery_1.jpg'],
                        ['img' => 'media/img/banner_1.jpg'],
                        ['img' => 'media/img/gallery_1.jpg'],
                    ]
                    ?>
                    <?php
                    foreach ($gallery_photo as $n => $el) {
                        ?>
                        <div class="sl__slide">
                            <a data-fancybox="gallery" href="<?php echo $el['img'] ?>"><img src="<?php echo $el['img'] ?>" alt=""></a>
                        </div>
                        <?php
                    }
                    ?>

                </div>
                <div class="gallery_slider_bt_prev"><?php echo file_get_contents("media/img/svg/arrow.svg"); ?></div>
                <div class="gallery_slider_bt_next"><?php echo file_get_contents("media/img/svg/arrow.svg"); ?></div>
            </div>
        </div>
    </div>


    <div class="reviews_wrap">
        <div class="container">
            <div class="title">
                <h2 class="bot">ОТЗЫВЫ</h2>
            </div>
            <div class="reviews_main">
                <div class="reviews">

                    <?php
                    $reviews = [
                        [
                            'img' => 'media/img/reviews/reviews_1.jpg',
                            'name' => 'Александра',
                            'text' => '
<p>Хочу выразить благодарность компании Мир Заборов, за качество работы. Перед тем как заказать забор и ворота себе на участок, пообщалась со многими компаниями. Остановилась на компании Романа, т.к у него очень грамотно поставленная речь. Роман приехал, сделал замер, пообщалась с ним и поняла, что могу доверить свой участок им. Спасибо большое за установку забора из штакетника и ворота. Осталась очень довольна результатом. Теперь любуюсь не только я , но и соседи. Удачи вам и по больше хороших и благодарных клиентов.</p>
                            ',
                        ],[
                            'img' => 'media/img/reviews/reviews_2.jpg',
                            'name' => 'Алексей',
                            'text' => '
<p>Хочу выразить благодарность компании Мир Заборов, за качество работы. Перед тем как заказать забор и ворота себе на участок, пообщалась со многими компаниями. Остановилась на компании Романа, т.к у него очень грамотно поставленная речь. Роман приехал, сделал замер, пообщалась с ним и поняла, что могу доверить свой участок им. Спасибо большое за установку забора из штакетника и ворота. Осталась очень довольна результатом. Теперь любуюсь не только я , но и соседи. Удачи вам и по больше хороших и благодарных клиентов.</p>
                            ',
                        ],[
                            'img' => 'media/img/reviews/reviews_1.jpg',
                            'name' => 'Пётр',
                            'text' => '
<p>Хочу выразить благодарность компании Мир Заборов, за качество работы. Перед тем как заказать забор и ворота себе на участок, пообщалась со многими компаниями. Остановилась на компании Романа, т.к у него очень грамотно поставленная речь. Роман приехал, сделал замер, пообщалась с ним и поняла, что могу доверить свой участок им. Спасибо большое за установку забора из штакетника и ворота. Осталась очень довольна результатом. Теперь любуюсь не только я , но и соседи. Удачи вам и по больше хороших и благодарных клиентов.</p>
                            ',
                        ],
                    ]
                    ?>
                    <?php
                foreach ($reviews as $n => $el) {
                    ?>
                    <div class="sl__slide">
                        <div class="reviews__slide">
                            <div class="reviews__img"><img src="<?php echo $el['img'] ?>" alt=""></div>
                            <div class="reviews__text">
                                <p class="reviews__name"><?php echo $el['name'] ?></p>
                                <p><?php echo $el['text'] ?></p>
                            </div>
                        </div>
                    </div>
                    <?php
                }
                ?>

            </div>
            <div class="reviews_slider_bt_prev"><?php echo file_get_contents("media/img/svg/arrow.svg"); ?></div>
            <div class="reviews_slider_bt_next"><?php echo file_get_contents("media/img/svg/arrow.svg"); ?></div>

            </div>
        </div>
    </div>



    <div class="how_work">
        <div class="container">
            <div class="title">
                <h2 class="bot">КАК МЫ РАБОТАЕМ</h2>
            </div>
            <ul class="how_work_main">

                <?php
                $how_work = [
                    ['txt' => 'Звонок'],
                    ['txt' => 'Бесплатный замер'],
                    ['txt' => 'Договор'],
                    ['txt' => 'Комплектация заказа'],
                    ['txt' => 'Выполнение заказа'],
                    ['txt' => 'Получение ключей (сдача объекта)'],
                ]
                ?>
                <?php
                foreach ($how_work as $n => $el) {
                    $n+=1;
                    ?>
                    <li class="how_work_el">
                        <div class="how_work_cont"><p><?php echo $n ?></p></div>
                        <p><b><?php echo $el['txt'] ?></b></p>
                        <div class="arrow"><?php echo file_get_contents("media/img/svg/arrow.svg"); ?></div>
                    </li>
                    <?php
                }
                ?>
            </ul>
            <div class="button_main">
                <button type="button" class="green_bt" data-remodal-target="popup_feedback">Заказать звонок</button>
            </div>
        </div>
    </div>




<?php include 'include/footer.php'; ?>
