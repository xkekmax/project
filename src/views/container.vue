<template>
 <div class="container">
        <div class="header-line-two">
            <div class="pic"><img src="@/images/Frame 1310.png"></div>

            <form name="email" method="post">
                <input type="text" v-model="product" class="f5" placeholder="Поиск"/>
                <button v-if="product !=''"><a href="#">Найти</a></button>
                <button disabled v-else>Найти</button>
            </form>
    
            <div class="korzina">
                <img src="@/images/eye.png">
                <div class="head-text">Недавно просмотренное</div>
            </div>

            <div class="korzina">
                <img src="@/images/like.png">
                <div class="head-text">Избраное</div>
            </div>
            

            <div class="korzina">
                <img src="@/images/shop.png">
                <div class="head-text">Корзина пуста</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: ""
        }
    }
}
</script>

<style scoped>
button{
    color: rgb(91, 50, 104);
    background-color: #ffcfcf;
    font-size: 14px;
    border-radius: 4px;
    padding: 12px 32px;
    height: 40px;
    border: none;
}
button:disabled{
    background-color: #dfa9a9;
    cursor: not-allowed;
}
.header-line-two{
    display: flex;
    justify-content: space-between;
    padding: 14px 0px 12px 0px;
}
.f5{
    font-size: 16px;
    height: 40px;
    width: 664px;
    padding-left: 16px;
    border: none;
    border-radius: 4px;
    float: left;
    background-color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
}
.head-text{
    color: #38429c;
    float: right;
    padding: 5px 0px 0px 8px;
    font-size: 14px;
    margin-right: 14px;
}
.korzina{
    padding-top: 5px;
}
</style>