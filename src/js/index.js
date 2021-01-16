// import './library/jquery.js';
/*自动播放*/
$(function () {
    $(function () {
        var mySwiper = new Swiper('.home-hero-swiper', {
            direction: 'horizontal', // 水平切换选项,
            loop: true, // 循环模式选项
            autoplay: 2000,//自动播放
            effect: "fade",
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            on: {
                autoplayStart: function () {
                    console.log('开启自动切换');
                },
                autoplayStop: function () {
                    console.log('关闭自动切换');
                }
            }
        })
    })

    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",
        success: function (res) {
            // console.log(response);
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);
                temp += `<li class="brick-item brick-item-m brick-item-m-2">
                <a href="../html/product.html?id=${elm.id}"
                        target="_blank" data-settrack="true" stat_exposure="true">
                        <div class="figure figure-img">
                        <img width="160" height="160" alt="#"        
                                src="../${picture[0].src}" lazy="loaded">
                        </div>
                        <h3 class="title">
                            ${elm.title}
                        </h3>
                        <p class="desc"></p>
                        <p class="price"><span class="num">${elm.price}</span>元<span>起</span>
                        </p>
                    </a>
                </li>`;
            });
            $('.onlist').append(temp);
        }
    });
})
