<template>
 <div class="footer">
        <div class="container">
            <div class="foot">
                <div class="footer-text">
                    Одежда для девочек
                    <div class="ft-text">
                        <p>Блузки, футболки, майки</p>
                        <p>Платья, сарафаны</p>
                        <p>Платья карнавальные</p>
                        <p>Теплые платья, свитера, теплые кофты</p>
                        <p>Брюки, бриджи, спортивная одежда, юбки</p>
                        <p>Пижамы, домашняя одежда, купальники</p>
                        <p>Верхняя одежда для девочек</p>
                    </div>
                </div>
    
                <div class="footer-text">
                    Одежда для мальчиков
                    <div class="ft-text">
                        <p>Футболки, рубашки, толстовки</p>
                        <p>Брюки, шорты, бриджи</p>
                        <p>Пижамы, домашняя одежда для мальчиков</p>
                        <p>Верхняя одежда</p>
                    </div>
                </div>
    
                <div class="footer-text">
                    Suport clienti
                    <div class="ft-text">
                        <p>Бижутерия и аксесуары</p>
                        <p>Товары для праздника с мультгероями</p>
                    </div>
                </div>
    
                <div class="foot-info">
                    <div>
                        <p class="num">8 (800) 505-54-33</p>
                        <p class="info">info@mag123.ru</p>
                    </div>

                    <div class="socseti">
                        <img src="@/images/whatsapp 2.png">
                        <img src="@/images/telegram 1.png">
                    </div>

                    <div class="bute">
                        <img src="@/images/aaa.png">
                        <a href="#">Написать Email</a>
                    </div>

                    <p class="prava">© 2019-2020. Все права защищены</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.footer{
    background-color: #868fe0;
    color: aliceblue;
}
.foot{
    display: flex;
    justify-content: space-around;
    padding: 55px 0px;
}
.ft{
    font-size: 16px;
}
.footer-text{
    font-size: 16px;
    width: 200px;
}
.ft-text{
    margin-top: 16px;
    font-size: 14px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.foot-info{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}
.num{
    font-size: 16px;
    margin: 15px 0px;
}
.info{
    font-size: 14px;
    float: right;
}
.bute{
    background-color: rgb(255, 200, 240);
    color: #fff;
    padding: 12px 28px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
}
.prava{
    margin-top: 95px;
    font-size: 12px;
}
</style>