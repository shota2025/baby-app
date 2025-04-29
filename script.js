const form = document.getElementById('worryForm');
const input = document.getElementById('worryInput');
const babyImage = document.getElementById('babyImage');
const babyMessage = document.getElementById('babyMessage');

// フォルダ内の赤ちゃんの画像を指定（画像のパスを指定）
const babyPhotos = [
  "images/baby1.jpg",
  "images/baby2.jpg",
  "images/baby3.jpg",
  "images/baby4.jpg",
  "images/baby5.jpg",
  "images/baby6.jpg",
  "images/baby7.jpg",
  "images/baby8.jpg",
  "images/baby9.jpg",
  "images/baby10.jpg"
];

form.addEventListener('submit', function(e) {
  e.preventDefault();  // ページがリロードされないようにする

  const worry = input.value;
  if (!worry) {
    alert('なやみをカキカキでちゅ！');
    return;
  }

  // ランダムな赤ちゃん写真を選ぶ
  const randomPhoto = babyPhotos[Math.floor(Math.random() * babyPhotos.length)];
  babyImage.src = randomPhoto;
  babyImage.style.display = 'block';

  // ランダムな励ましメッセージを選ぶ
  const randomMessage = babyMessages[Math.floor(Math.random() * babyMessages.length)];

  // 入力に「！？」をつけて、メッセージに組み込む
  const babyResponse = `${worry}！？ ${randomMessage}`;

  // 表示する
  babyMessage.textContent = babyResponse;
});


// 赤ちゃん励ましメッセージの候補をいくつか用意
const babyMessages = [
  "だいじょうぶでちゅよ〜！またがんばればいいでちゅ〜！",
  "よちよち、いたいのいたいのとんでけ〜でちゅ！",
  "なんでもできるでちゅよ〜！しんじてるでちゅ〜！",
  "おっきな声でないちゃってもいいでちゅよ〜！",
  "まいにちすこしずつでちゅ〜！",
  "えらいでちゅね〜！ちゃーんとがんばってるでちゅ！",
  "がんばったぶん、きっとごほうびくるでちゅよ〜！",
  "ちっちゃな一歩でも、すごいでちゅ〜！",
  "たまにはおやすみするでちゅよ〜！",
  "いっしょにがんばろーでちゅ！",
  "ねんねして、またげんきでちゅ〜！",
  "なきたいときはないちゃうでちゅ〜！",
  "うえむいて、えがおでちゅよ〜！",
  "きょうもがんばったね、えらいえらいでちゅ！",
  "だいすきでちゅよ〜！そのままでだいじょうぶでちゅ！",
  "いっぱいほめてあげるでちゅ〜！",
  "あせらなくていいでちゅよ〜！",
  "ゆっくりでもいいんでちゅ〜！",
  "どんなときも、みかただよ〜でちゅ！",
  "ニコニコしてたら、きっとだいじょうぶでちゅ！"
];

// ランダムに1つ励ましメッセージを選ぶ
const randomIndex = Math.floor(Math.random() * babyMessages.length);
const selectedMessage = babyMessages[randomIndex];

// 返答を作成
const babyResponse = `${repeatedInput}${selectedMessage}`;

console.log(babyResponse);
// フォームが送信されたときの処理
form.addEventListener('submit', function(e) {
  e.preventDefault();  // ページがリロードされないようにする

  const worry = input.value;
  if (!worry) {
    alert('なやみをカキカキでちゅ！');
    return;
  }

  // ランダムな赤ちゃん写真を選ぶ
  const randomPhoto = babyPhotos[Math.floor(Math.random() * babyPhotos.length)];
  babyImage.src = randomPhoto;  // 画像を表示
  babyImage.style.display = 'block';  // 画像を表示するように設定

  // ランダムな赤ちゃん言葉で励ます
  const randomMessage = babyMessages[Math.floor(Math.random() * babyMessages.length)];
  babyMessage.textContent = randomMessage;  // ランダムなメッセージを表示
});
