const form = document.getElementById('worryForm');
const input = document.getElementById('worryInput');
const babyImage = document.getElementById('babyImage');
const babyMessage = document.getElementById('babyMessage');

// 赤ちゃんの画像一覧
const babyPhotos = [
  "images/baby1.jpg", "images/baby2.jpg", "images/baby3.jpg",
  "images/baby4.jpg", "images/baby5.jpg", "images/baby6.jpg",
  "images/baby7.jpg", "images/baby8.jpg", "images/baby9.jpg", "images/baby10.jpg"
];

// 励ましメッセージ一覧
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

// フォーム送信時の処理
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const worry = input.value.trim();
  if (!worry) {
    alert('なやみをカキカキでちゅ！');
    return;
  }

  // ランダムな画像とメッセージを選ぶ
  const randomPhoto = babyPhotos[Math.floor(Math.random() * babyPhotos.length)];
  const randomMessage = babyMessages[Math.floor(Math.random() * babyMessages.length)];

  // 表示更新
  babyImage.src = randomPhoto;
  babyImage.style.display = 'block';
  babyMessage.textContent = `${worry}！？ ${randomMessage}`;

  // 入力をリセット（お好みで）
  input.value = '';
});
