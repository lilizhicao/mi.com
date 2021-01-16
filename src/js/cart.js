import './library/jquery.js';
import { cookie } from './library/cookie.js';

let shop = cookie.get('shop');
if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(elm => elm.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: {
            idList
        },
        dataType: "json",
        success: function (res) {
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                let arr = shop.filter(val => val.id == elm.id);

                temp += `<li class="item">
                <div class=""><input type="checkbox" name="" id=""></div>
                <div class=""><img src="../${picture[0].src}" alt=""></div>
                <div class="">${elm.title}</div>
                <div class=""><input type="number" value="1" min="1" max="10" name="" id=""></div>
                <div class="unitPrice">单价:<span>${elm.price}</span></div>
                <div class="totalPrice">总价:<span>${shop[i].num * elm.price}</span></div>
                <div class="p-del" ><a href="javascrip:;" class="del" data-id="${elm.id}>删除</a></div>
            </li>`;
            });
            $('.prolist').append(temp).find('.del').on('click', function () {
                let shop2 = shop.filter(el => el.id != $(this).attr('data-id')); // 获得id不匹配的元素
                cookie.set('shop', JSON.stringify(shop2), 1); // 将不匹配的元素从新写进cookie
                location.reload();
            });
        }
    });
}