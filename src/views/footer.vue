<template>
 <div class="footer">
        <div class="container">
            <div class="foot">
                <div class="footer-text">
                    Рубрики
                    <div class="ft-text">
                        <p>Крючком</p>
                        <p>Игрушки спицами</p>
                        <p>Полезности</p>
                        <p>Статьи</p>
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
    justify-content: space-between;
    padding: 55px;
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