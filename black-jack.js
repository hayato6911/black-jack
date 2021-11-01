/***********************************************
  グローバル変数
************************************************/
//カードの山（配列）
let cards = [];
//自分のカード（配列）
let myCards = [];
//相手のカード（配列）
let comCards = [];
//勝敗決定フラグ（論理型）
let isGameOver = false;

/***********************************************
  イベントハンドラの割り当て
************************************************/

//ページの読み込みが完了した時に実行する関数を登録。
window.addEventListener("load", loadhandler);

//「カードを引く」ボタンを押した時に実行する関数を登録
document.querySelector("#pick").addEventListener("click", clickPickHandler);

//「勝負する！」ボタンを押した時実行する関数を登録
document.querySelector("#judge").addEventListener("click", clickJadgeHandler);

//「もう一回遊ぶ」ボタンを押した時実行する関数を登録
document.querySelector("reset").addEventListener("click",clickResetHandler);

/***********************************************
  イベントハンドラ
************************************************/
//ページの読み込みが完了した時実行する関数
function loadhandler(){
  //シャッフル
  suffle();
  //自分がカードを引く
  pickMyCard();
  //相手がカードを引く
  pickComCard();
  //画面を更新する
  updateView();
}
  
function カードを引く(){
  if(勝敗が未決定の場合){
    //自分がカードを引く
    //相手がカードを引く
    //画面を更新する
  }
}

function 勝負する(){
  if(勝敗が未決定){
    //勝敗を判定する
    //勝敗を画面に表示する
    //勝敗決定フラグを「決定」に変更
  }
}

function もう一回遊ぶ(){
  //画面を初期表示に戻す
  //reloadメソッドでページを再読み込みする
}


/***********************************************
  ゲーム関数
************************************************/
//カードの山をシャッフルする関数
  function shuffle() {
    //カードを初期化
    for (let i = 1; i <= 52; i++){
      cards.push(i);
    }
    //100回繰り返す
    for(let i = 0; i < 100 i++) {
    //カードの山からランダムに選んだ２枚を入れ替える
    let = j Math.floor(Math.random() * 52);
    let = k Math.floor(Math.random() * 52);
    let temp = cards[j];
    cards[j] = cards[k];
    cards[k] = temp;
    }
  }

   //自分がカードを引く関数
   function pickMyCard(){
    //自分のカードの枚数が４枚以下の場合
    if (comCards.length <= 4){
      //カードの山（配列）から１枚取り出す。
      let card = cards.pop();
      //取り出した１枚を自分のカード（配列）に追加する。
      myCards.push(card);
    }
  }
  
  //相手がカードを引く関数
  function pickComCard(){
    //相手のカードの枚数が４枚以下の場合
    if (comCards.length <= 4){
      //カードを引くかどうか考える
      if(piccAI(comCards)){
        //カードの山（配列）から１枚取り出す。
        let card = cards.pop();
        //取り出した１枚を相手のカード（配列）に追加する。
        comCards.push(card);
      }
    }
  }
  
  //カードを引くかどうか考える関数
  function 考える(){
    //引くか引かないかを戻り値で返す
  }

  //画面を更新する関数
  function 画面を更新する(){
    //自分のカードを表示する
    for (iを5回繰り返す) {
      if(自分のカードの枚数がiより大きい場合){
      //表面の画像を表示する
    } else {
      //裏面の画像を表示する
    }
    //相手のカードを表示する
    for(iを5回繰り返す) {
      if (相手のカードの枚数がiより大きい場合){
        //表面の画像を表示する
      } else {
        //裏面の画像を表示する
      }
    }
    //カードの合計を再計算する
  }
  
  //勝敗を変亭する関数
  function 勝敗を判定する(){
    //自分のカードの合計を求める
    //相手のカードの合計を求める
    //勝敗のパターン表に当てはめて勝敗を決めるP235
    //勝敗を呼び出し元に返す
  }
/***********************************************
  デバッグ関数
************************************************/
function debug(){
  console.log("カードの山",カードの山);
  console.log("自分のカード",自分のカード);
  console.log("相手のカード",相手のカード);
  console.log("勝敗決定フラグ",勝敗決定フラグ);
}
