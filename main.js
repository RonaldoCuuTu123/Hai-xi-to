function checkDam() {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) {
    document.getElementById("damResult").textContent = "Nhập tên đãa chớ!";
    return;
  }
  const percent = Math.floor(Math.random() * 101);
  let message = `${name} có độ dâm: ${percent}% 😳`;
  if (percent > 90) message += " Quá trời dâm luôn đó nha!";
  else if (percent > 70) message += " Hơi bị dâm á!";
  else if (percent > 40) message += " Bình thường thôi nè!";
  else message += " Hiền lành lắm, hổng dâm đâu!";
  document.getElementById("damResult").textContent = message;
}

function randomAction() {
  const actions = [
    "Hải Xì Tơ đang lăn lộn như con lươn 🐍",
    "Hải Xì Tơ bật nhạc remix rồi nhảy bốc lửa 🔥",
    "Hải Xì Tơ đang đọc thơ 18+ bằng giọng Huế 😏",
    "Hải Xì Tơ cosplay thành Pikachu dâm đãng ⚡",
    "Hải Xì Tơ đang cởi trần chạy vòng vòng sân bóng 🏃‍♂️"
  ];
  const random = actions[Math.floor(Math.random() * actions.length)];
  document.getElementById("actionResult").textContent = random;
}
