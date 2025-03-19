function toCao() {
  const msg = document.getElementById("message");
  msg.innerText = "📢 Hải đã bị tố cáo trên toàn hệ mặt trời!";
}

function cauCuu() {
  const msg = document.getElementById("message");
  msg.innerText = "🆘 Đang triển khai tường năng lượng để ngăn Hải tiếp cận!";
}

function hanhDong() {
  const actions = [
    "😵 Bạn vừa bị Hải cú bu không báo trước!",
    "🔥 Hải thi triển 'Mốt lòng liên hoàn cước'!",
    "🫨 Bạn cảm nhận được ti lực từ phía sau!",
    "🤯 Hải vừa cạp ti bạn xong rồi... xin lỗi!",
    "🧨 Bạn bị Hải dính chiêu 'Nốn Lừng Kép'!",
    "🌀 Hải xì tơ rồi biến mất vào màn đêm...",
    "🚫 Hải đang âm thầm quan sát bạn đấy!",
    "🎯 Hải dùng kỹ năng định vị ti - lock on!"
  ];

  const msg = document.getElementById("message");
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  msg.innerText = randomAction;
}

function testDom() {
  const levels = [
    "💧 Hải chỉ hơi ngứa ti...",
    "💦 Hải đang hít hà không khí quanh bạn...",
    "🔥 Hải bắt đầu rùng mình rồi đó!",
    "💣 100% bị Hải mốt lòng ngay tại chỗ!",
    "🌪️ Hải dùng 'Dâm lực tuyệt đối' – bạn mất kiểm soát!",
    "🥵 Hải level MAX – Không ai cứu nổi bạn nữa!"
  ];

  const msg = document.getElementById("message");
  const randomLevel = levels[Math.floor(Math.random() * levels.length)];
  msg.innerText = randomLevel;
}
