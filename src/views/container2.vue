<template>
<div class="container">
        <div class="main">
            <div>
                <img class="frozen" src="@/images/Frame 20.png">
                <div class="main-text">
                    <p class="collection">Новая<br>коллекция</p>
                    <p class="sign">
                        Небольшая надпись в кратце
                        <br>описывающая акцию и даты её
                        <br>проведения
                    </p>
                    <div class="button-p"><a href="#">Подробнее</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.main{
    position: relative;
    color: #fff;
    padding: 70px 220px 160px;
}
.frozen{
    position: absolute;
    box-shadow: 5px 5px 5px 5px #8fa1c9;
    border-radius: 10px;
}
.main-text{
    position: relative;
    padding: 97px 80px;
}
.collection{
    font-size: 56px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    line-height: 1;
}
.sign{
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    margin: 32px 0px 40px 0px;
    line-height: 1.5;
}
.button-p{

    color: #3b2731;
    background-color: #fff;
    font-size: 20px;
    border-radius: 4px;
    padding: 12px 32px;
    width: fit-content;
}
a{
    font-family: 'Courier New', Courier, monospace;
}
</style>