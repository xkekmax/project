<template>
<div class="header-three">
        <div class="container">
            <div class="header-line-three">
                <div class="button">
                    <img src="@/images/Frame 1.png">
                    Каталог
                </div>

                <div class="akcii">Акции</div>
                <div>О нас</div>
                <div>Доставка и оплата</div>
                <div>Новости</div>
                <div>FAQ</div>
                <div>Контакты</div>
    
                <div class="kontakti">
                    <div>Режим работы <br><b>09:00 - 19:00</b></div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.header-three{
    background-color: #9eb7fa;
    color: #ffff;
}
.header-line-three{
    display: flex;
    justify-content: space-between;
    padding: 5px 0px;
    align-items: center;
}
.button{
    background-color: #ffb48f;
    padding: 18px 40px;
    border-radius: 4px;
}
.akcii{
    background-color: rgb(248, 105, 105);
    border-radius: 4px;
    padding: 4px 10px;
    height: fit-content;
    width: fit-content;
}
.kontakti{
    align-items: center;
    padding-left: 50px;
    padding-right: 30px;
}
</style>