<template>
<div class="container">
        <div class="new"><p class="new_text">Новые поступления</p></div>
        <div class="clothes">
            <div class="dress">
                <div class="sale">-15%</div>
                <img src="@/images/1.png">
                <div class="dress-text">
                    <p class="drstxt">"Дракончик"</p>
                    <img src="@/images/Оценки.png">
                </div>
                <p class="cena"><b>586 ₽</b></p><span class="colortext"><s>690 Р</s></span>
                <div class="aaa">
                    <div class="burcl"><img src="@/images/Vector.png">В корзину</div>
                    <img class="like" src="@/images/like2.png">
                </div>
            </div>
            
            <div class="dress">
                <div class="sale">-15%</div>
                <img src="@/images/2.png">
                <div class="dress-text">
                    <p class="drstxt">"Хомяк Арсений"</p>
                    <img src="@/images/Оценки.png">
                </div>
                <p class="cena"><b>890 ₽</b></p><span class="colortext"><s>690 Р</s></span>
                <div class="aaa">
                    <div class="burcl"><img src="@/images/Vector.png">В корзину</div>
                    <img class="like" src="@/images/like2.png">
                </div>
            </div>

            <div class="dress">
                <div class="sale">-50%</div>
                <img src="@/images/3.png">
                <div class="dress-text">
                    <p class="drstxt">"Лягушонок"</p>
                    <img src="@/images/Оценки.png">
                </div>
                <p class="cena"><b>586 ₽</b></p><span class="colortext"><s>690 Р</s></span>
                <div class="aaa">
                    <div class="burcl"><img src="@/images/Vector.png">В корзину</div>
                    <img class="like" src="@/images/like2.png">
                </div>
            </div>

            <div class="dress">
                <div class="sale">-50%</div>
                <img src="@/images/4.png">
                <div class="dress-text">
                    <p class="drstxt">"Снеговик Аркадий"</p>
                    <img src="@/images/Оценки.png">
                </div>
                <p class="cena"><b>472 ₽</b></p><span class="colortext"><s>690 Р</s></span>
                <div class="aaa">
                    <div class="burcl"><img src="@/images/Vector.png">В корзину</div>
                    <img class="like" src="@/images/like2.png">
                </div>
            </div>

            <div class="dress">
                <div class="sale">-25%</div>
                <img src="@/images/5.png">
                <div class="dress-text">
                    <p class="drstxt">"Малыши Капибара"</p>
                    <img src="@/images/Оценки.png">
                </div>
                <p class="cena"><b>1289 ₽</b></p><span class="@/images/colortext"><s>1690 Р</s></span>
                <div class="aaa">
                    <div class="burcl"><img src="@/images/Vector.png">В корзину</div>
                    <img class="like" src="@/images/like2.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.clothes{
    display: flex;
    justify-content: space-around;
    height: 500px;
}
.new{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 40px;
    padding-top: 30px;
    padding-bottom: 100px;
    color: #fff;
}
.new_text{
    font-family: 'Courier New', Courier, monospace;
    width: 500px;
    background-color: #a3b9ff;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #b3b3b3;
}
.sale{
    background-color: rgb(248, 105, 105);
    color: #fff;
    padding: 4px 10px;
    width: fit-content;
    font-size: 12px;
    border-radius: 4px;
}
.colortext{
    color: #AAAAAA;
    font-size: 14px;
    margin-left: 10px;
    align-items: center;
    float: none;
}
.dress{
    width: 170px;
    padding: 16px;
    height: fit-content;
    background-color: #fff;
    border-radius: 10px;
}
.dress:hover{
    color: #4E8AFF;
    border: none;
    box-shadow: 5px 5px 5px 5px #b3b3b3;
}
.dress-text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    height: 60px;
    margin-top: 25px;
    margin-bottom: 16px;
}
.drstxt{
    height: 75px;
    font-size: 15px;
}
.cena{
    float: left;
    font-size: 20px;
}
.like{
    margin: 22px 0px 0px 10px;
    border: 1px solid #A8A8A8;
    border-radius: 4px;
    padding: 2px;
}
.burcl{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #ff9d6c;
    color: #fff;
    font-size: 14px;
    padding: 12px 18px;
    width: fit-content;
    border-radius: 4px;
    margin-top: 13px;
    float: left;
}
</style>