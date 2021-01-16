import './library/jquery.js';
import { cookie } from './library/cookie.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function (res) {
        // console.log(res);
        let picture = JSON.parse(res.picture);

        let temp = `
        <div class="product-left">
        <img src="../${picture[0].src}">
        </div>
        <div class="product-right">
            <h1>${res.title}</h1>
            <div class="detail">${res.details}</div>
            <div class="unit-price"><span>￥</span>${res.price}</div>
            <div class="kucun">
                库存:${res.num}
            </div>
            <input type="number" value="1" min="1" max="${res.num}" id="num">
            <input type="button" value="加入购物车" id="addItem">
        </div>
        `;

        $('.product').append(temp).find('#addItem').on('click', function () {
            addItem(res.id, res.price, $('#num').val());
        });
    }
});

function addItem(id, price, num) {
    let shop = cookie.get('shop');
    let product = {
        id,
        price,
        num
    };

    if (shop) {
        shop = JSON.parse(shop);

        if (shop.some(elm => elm.id == id)) {
            shop.forEach(el => {
                el.id == id ? el.num = num : null;
            });
        } else {
            shop.push(product);
        }

    } else {
        shop = [];
        shop.push(product);
    }
    cookie.set('shop', JSON.stringify(shop), 1);
    let addr = window.location.href.split('/product')[0] + '/cart.html';
    window.open(addr);
}