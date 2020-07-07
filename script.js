
    // JSを読み込むタイミングを指定
    // addEventListener(イベントに合わせて実行させる関数)
addEventListener("DOMContentLoaded",function(){

    // ノード取得
const saikoro =  document.getElementById("dice");
    //サイの目を取得
function number() {
    const sainome = Math.floor(Math.random( )* 6 + 1);
    saikoro.innerHTML = sainome;
}
    //クリックイベント
    saikoro.addEventListener("click", number, false);

});