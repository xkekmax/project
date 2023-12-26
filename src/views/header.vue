<template>
    <div class="header">
        <div class="container">
            <div class="header-line-one">
                <div>
                    <img src="@/images/Pin.png">
                    <div class="head-text">Ваш город: <a href="#">{{ city }}</a></div>
                </div>
                <div>
                    <img src="@/images/user.png">
                    <div class="head-text">Войти в аккаунт</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city: "Санкт-Петербург"
        }
    }
}
</script>

<style scoped>
.header{
    background-color: #868fe0;
    color: aliceblue;
}
.header-line-one{
    display: flex;
    justify-content: space-between;
    padding: 16px 0px 10px 0px;
}
.head-text{
    float: right;
    padding: 5px 0px 0px 8px;
    font-size: 14px;
}
a:visited{
    color: rgb(255, 200, 240);
}
</style>
